'use client';
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
import { generate, generateNonStream, reWriteSelectionUsingRefer } from '@/actions/ai';
import { useCallback, useEffect, useRef, useState } from 'react';
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
import { findSelection } from "@/actions/find-selection"

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

interface IFind {
    id: string;
    title: string;
}

export default function EditorView({ project, isNewBlog, isLoading, refetch }: { project: IProject, isNewBlog: boolean, isLoading: boolean, refetch: () => void }) {
    const [content, setContent] = useState(``);
    const [isRewriting, setIsRewriting] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [updatingContent, setUpdatingContent] = useState(false);
    const [isBubbleMenuOpen, setIsBubbleMenuOpen] = useState(false);

    // Initialize predefined finds
    const predefinedFinds: IFind[] = [
        { id: 'statistic', title: 'Statistic' },
        { id: 'example', title: 'Example' },
        { id: 'story', title: 'Story' },
        { id: 'news', title: 'News' },
        { id: 'industry-opinion', title: 'Industry Opinion' },
    ];

    // State to manage finds, including user-added finds
    const [finds, setFinds] = useState<IFind[]>(predefinedFinds);

    // update trigger 
    const hasUnsavedChanges = useRef(false);

    const router = useRouter();

    console.log("[EDITOR] project : ", project);

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: 'prose prose-sm prose-editor:w-full min-w-full',
            },
        },
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
                placeholder: 'Write something …',
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

        const { view, state } = editor;
        const { from, to } = view.state.selection;
        const selectedText = state.doc.textBetween(from, to, '');

        await reWriteSelectionUsingRefer({
            brandVoice: project.audience.brandVoiceId,
            referContent: project.refers.find(refer => refer.id === referId)?.content ?? "",
            selection: selectedText,
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
        }).catch((error) => {
            console.error("Error during reWriteSelectionUsingRefer:", error);
            setIsRewriting(false);
            editor.setEditable(true);
            toast.error("Failed to rewrite the selected text.");
        });
    }

    const handleFind = async ({ type }: { type: string }) => {
        const { view, state } = editor;
        const { from, to } = view.state.selection;
        const selectedText = state.doc.textBetween(from, to, '');
        console.log("selectedText : ", selectedText);

        setIsRewriting(true);
        editor.setEditable(false);

        await findSelection({
            brandVoice: project.audience.brandVoiceId,
            selection: selectedText,
            targetAudience: project.audience.target,
            targetAudienceLevel: project.audience.level,
            title: project.title,
            type
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
        }).catch((error) => {
            console.error("Error during findSelection:", error);
            setIsRewriting(false);
            editor.setEditable(true);
            toast.error("Failed to process the selected text.");
        });
    }

    const handleGenerate = useCallback(async () => {
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
    }, [project.audience, project.title]);

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
    }, [content, project.id]);

    useEffect(() => {
        if (project && isNewBlog && !isReady) {
            handleGenerate();
        }
    }, [handleGenerate, isNewBlog, isReady, project]);

    const handleStartEditing = async () => {
        setUpdatingContent(true);
        await updateContent(content, project.id).then(() => {
            setUpdatingContent(false);
            toast.success("Content updated successfully");
            window.location.replace(`/project/${project.id}/editor?new=false`);
        }).catch(() => {
            setUpdatingContent(false);
            toast.error("Something went wrong while updating the content");
        });
    }

    // Function to add a new find type
    const addFind = (title: string) => {
        const newFind: IFind = { id: Date.now().toString(), title };
        setFinds([...finds, newFind]);
    }

    // Function to handle selection, including 'find' types
    const handleSelection = (itemId: string, type: 'refer' | 'find') => {
        if (type === 'refer') {
            handleReWrite({ referId: itemId });
        } else if (type === 'find') {
            // Find the selected find item
            const selectedFind = finds.find(find => find.id === itemId);
            if (selectedFind) {
                handleFind({ type: selectedFind.title });
            }
        }
    }


    if (!editor || !project) {
        return (
            <div className='w-full h-screen bg-transparent grid place-items-center'>
                <Spinner />
            </div>
        );
    }

    // Combine predefined finds with user-added finds
    const combinedFinds = finds;

    return (
        <div className='flex flex-col h-screen pb-4 box-border'>
            <div className='py-4 text-black font-normal text-lg'>
                {
                    !isNewBlog && project.title
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

                {editor ? (
                    <BubbleMenu
                        editor={editor}
                        updateDelay={0}
                        tippyOptions={{
                            duration: 100,
                            onHide: () => {
                                setIsBubbleMenuOpen(false);
                                refetch();
                            },
                            onShow: () => {
                                setIsBubbleMenuOpen(true);
                                refetch();
                            }
                        }}
                    >
                        <div className="bubble-menu">
                            <ReferTooltip
                                isHiden={!isBubbleMenuOpen}
                                // onFind={handleFind}
                                finds={combinedFinds}
                                refers={project.refers ? project.refers.slice().reverse() : []}
                                isLoading={isLoading}
                                onSelection={handleSelection}
                                refetch={refetch}
                            // Optional: Provide a callback to add finds from ReferTooltip
                            // onAddFind={addFind}
                            />
                        </div>
                    </BubbleMenu>
                ) : (
                    <div className='w-full h-full bg-transparent grid place-items-center'>
                        <Spinner />
                    </div>
                )}

                {
                    !isNewBlog ? (
                        <EditorContent className="editor__content" editor={editor} />
                    ) : (
                        <>
                            {
                                !isReady ? (
                                    <div className='w-full h-full bg-transparent grid place-items-center'>
                                        <ContentViewGenerating />
                                    </div>
                                ) : (
                                    <ContentView content={content} />
                                )
                            }
                        </>
                    )
                }

                {/* Optional: If you want to handle adding new find types outside ReferTooltip */}
                {/* <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <input
                        type="text"
                        value={userFindInput}
                        onChange={(e) => setUserFindInput(e.target.value)}
                        placeholder="Add a new Find type"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                        onClick={() => {
                            if (userFindInput.trim()) {
                                addFind(userFindInput.trim());
                                setUserFindInput('');
                            }
                        }}
                        className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Add Find Type
                    </button>
                </div> */}
            </div>
        </div>
    )
}
