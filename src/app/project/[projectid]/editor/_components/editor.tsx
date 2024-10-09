"use client";
import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import "./index.scss";
import MenuBar from './MenuBar'
import Gapcursor from '@tiptap/extension-gapcursor'
import Placeholder from '@tiptap/extension-placeholder'
import { readStreamableValue } from 'ai/rsc';
import { generate, generateNonStream, reWriteSelectionUsingRefer } from '@/actions/ai';
import { useContext, useEffect, useRef, useState } from 'react';
import EditorHeading from '@tiptap/extension-heading';

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import ReferTooltip from './tooltip';
import ContentView from './content-view';
import Project from '@/server/domain/entities/project.entity';
import Refer from '@/server/domain/entities/refer.entity';
import Spinner from '@/components/global/spinner';
import ContentViewMenu from './content-view-menu';
import { RiQuillPenFill } from "react-icons/ri";
import ContentViewGenerating from './content-view-generating';
import toast from 'react-hot-toast';
import updateContent from '@/actions/blog/update-content';
import { useRouter } from 'next/navigation';


interface IProject {
    id: Project["id"];
    content: Project["content"];
    title: Project["title"];
    audience: Project["audience"];
    refers: {
        id: Refer["id"]
        content: Refer["content"]
        sourceUrl: Refer["sourceUrl"]
        createdAt: Refer["createdAt"]
    }[];
    createdAt: Project["createdAt"];
}


export default function EditorView({ project, isNewBlog, isLoading }: { project: IProject, isNewBlog: boolean, isLoading: boolean }) {
    const [content, setContent] = useState(``);
    const [isRewriting, setIsRewriting] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [updatingContent, setUpdatingContent] = useState(false);

    // update trigger 
    const hasUnsavedChanges = useRef(false);

    const router = useRouter();

    console.log("[EDITOR] project : ", project);

    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            Highlight,
            TaskList,
            TaskItem,
            Gapcursor,
            Document,
            Paragraph,
            Text,
            EditorHeading.configure({
                levels: [1, 2, 3, 4, 5, 6],
            }),
            CharacterCount.configure({
                limit: 10000,
            }),
            Placeholder.configure({
                // Use a placeholder:
                placeholder: 'Write something …',
                // Use different placeholders depending on the node type:
                // placeholder: ({ node }) => {
                //   if (node.type.name === 'heading') {
                //     return 'What’s the title?'
                //   }

                //   return 'Can you add some further context?'
                // },
            }),
        ],
        content: project.content,
        enableContentCheck: false,
        shouldRerenderOnTransaction: true,
        immediatelyRender: true,
        onUpdate: ({ editor }) => {
            console.log("editor updated");
            setContent(editor.getHTML());
            hasUnsavedChanges.current = true;
        },
    });




    const handleReWrite = async ({ referId }: { referId: string }) => {
        console.log("referId : ", referId);
        if (!project.audience || !project.refers || !editor) {
            console.log("all is not ready");
            return;
        }

        setIsRewriting(true);
        editor.setEditable(false);

        await reWriteSelectionUsingRefer({
            brandVoice: project.audience.brandVoiceId,
            referContent: project.refers.find(refer => refer.id === referId)?.content ?? "",
            selection: editor.state.selection.content.toString(),
            targetAudience: project.audience.target,
            targetAudienceLevel: project.audience.level,
            title: project.title,
        }).then(({ text }) => {
            console.log("text : ", text);
            setIsRewriting(false);
            editor.setEditable(true);
            editor.commands.insertContent(text, {
                parseOptions: {
                    preserveWhitespace: false,
                },
                updateSelection: true,
            });
        });


    }


    const handleGenerate = async () => {
        if (!project.audience) {
            return;
        }


        try {
            await generateNonStream({
                brandVoiceId: project.audience.brandVoiceId,
                targetAudience: project.audience.target,
                targetAudienceLevel: project.audience.level,
                title: project.title,
            }).then(({ text }) => {
                setContent(text);
            }).finally(() => {
                setIsReady(true);
            });

        } catch (e) {
            console.log("error : ", e);
            toast.error("Something went wrong while generating the content");
        }
    }



    useEffect(() => {
        const interval = setInterval(async () => {
            // Check if there are unsaved changes before saving
            if (hasUnsavedChanges.current) {
                await updateContent(content, project.id).then(() => {
                    console.log("[AUTO SAVE] Content updated successfully");
                    toast.success("Content updated successfully");
                }).catch(() => {
                    setUpdatingContent(false);
                    toast.error("Could not save the content");
                });
                hasUnsavedChanges.current = false;
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [content]);




    useEffect(() => {
        if (project && isNewBlog && !isReady) {
            handleGenerate();
        }
    }, [project]);

    const handleStartEditing = async () => {
        setUpdatingContent(true);
        await updateContent(content, project.id).then(() => {
            setUpdatingContent(false);
            toast.success("Content updated successfully");
            router.push(`/project/${project.id}/editor`);
        }).catch(() => {
            setUpdatingContent(false);
            toast.error("Something went wrong while updating the content");
        });
    }



    if (!editor || !project) {
        return <div className='w-full h-screen bg-transparent grid place-items-center'>
            <Spinner />
        </div>
    }



    return (
        <div className='flex flex-col h-screen pb-4 box-border'>
            <div className='py-4     text-black font-bold text-lg'>
                {
                    project.title
                }
            </div>
            <div className="editor">
                {(editor && !isNewBlog) && <MenuBar editor={editor} isRewriting={isRewriting} />}
                {isNewBlog && <ContentViewMenu
                    title={project.title}
                    buttonIcon={RiQuillPenFill}
                    buttonLabel='Start Editing'
                    onButtonClick={handleStartEditing}
                    buttonClassName='text-white'
                    isUpdating={updatingContent}
                />}

                {editor ? <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}  >
                    <div className="bubble-menu">
                        <ReferTooltip refers={project.refers ? project.refers.reverse() : []} isLoading={isLoading} onSelection={(referId) => handleReWrite({ referId })} />
                    </div>
                </BubbleMenu> : <div className='w-full h-full bg-transparent grid place-items-center'>
                    <Spinner />
                </div>
                }

                {
                    !isNewBlog ? <EditorContent className="editor__content" editor={editor} /> : (
                        <>
                            {
                                !isReady ? <div className='w-full h-full bg-transparent grid place-items-center'> <ContentViewGenerating /> </div> : <ContentView content={content} />
                            }
                        </>
                    )
                }

            </div >
        </div>
    )
}


