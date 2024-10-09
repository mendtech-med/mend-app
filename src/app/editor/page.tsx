"use client";

import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import "./index.scss";
import MenuBar from './_components/MenuBar'
import Gapcursor from '@tiptap/extension-gapcursor'
import Placeholder from '@tiptap/extension-placeholder'
import { readStreamableValue } from 'ai/rsc';
import { generate, generateNonStream } from '@/actions/ai';
import { useEffect, useState } from 'react';
import EditorHeading from '@tiptap/extension-heading';

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import ReferTooltip from './_components/tooltip';

import { useSearchParams } from 'next/navigation'
import ContentView from './_components/content-view';



export default function App() {

  const params = useSearchParams();
  const isNewBlog = params.get('new') === 'true';

  console.log('isNewBlog', isNewBlog);

  const [content, setContent] = useState(``);

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

    enableContentCheck: false,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false
  });

  if (!editor) {
    return <div>Loading editor...</div>
  }

  const handleGenerate = async () => {
    const { output } = await generate();

    for await (const delta of readStreamableValue(output)) {
      editor.commands.insertContent(delta ?? '', {
        parseOptions: {
          preserveWhitespace: false,
        },
      });
      setContent((prev) => prev + delta);
    }
  }

  // useEffect(() => {
  //   const fetchText = async () => {
  //     const { text } = await generateNonStream();
  //     setContent(text);
  //   }
  //   fetchText();
  // }, []);

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}


      {editor ? <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="bubble-menu">
          <ReferTooltip />
        </div>
      </BubbleMenu> : <div>Loading...</div>
      }

      {
        !isNewBlog ? <EditorContent className="editor__content" editor={editor} /> : <ContentView content={content} />
      }

    </div>
  )
}


