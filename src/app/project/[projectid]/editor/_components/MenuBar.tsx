"use client";

import './MenuBar.scss'
import type { Editor } from '@tiptap/react'
import { Fragment, useState } from 'react'
import MenuItem from './MenuItem'
import {
  RiBold, RiItalic, RiStrikethrough, RiCodeView, RiMarkPenLine, RiDivideFill, RiH1, RiH2, RiH3, RiParagraph, RiListUnordered, RiListOrdered, RiListCheck2, RiCodeBoxLine, RiDoubleQuotesL, RiSeparator, RiTextWrap, RiFormatClear, RiArrowGoBackLine, RiArrowGoForwardLine
} from "@remixicon/react"
import CharacterCount from '@tiptap/extension-character-count'



export default function MenuBar({ editor, isRewriting }: { editor: Editor, isRewriting: boolean }) {
  const [isCharacterCountVisible, setIsCharacterCountVisible] = useState(false);

  const items = [
    {
      icon: <RiBold />,
      title: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      icon: <RiItalic />,
      title: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      icon: <RiStrikethrough />,
      title: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
    },
    {
      icon: <RiCodeView />,
      title: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
    },
    {
      icon: <RiMarkPenLine />,
      title: 'Highlight',
      action: () => editor.chain().focus().toggleHighlight().run(),
      isActive: () => editor.isActive('highlight'),
    },
    {
      type: 'divider',
    },
    {
      icon: <RiH1 />,
      title: 'Heading 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: <RiH2 />,
      title: 'Heading 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: <RiH3 />,
      title: 'Heading 3',
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive('heading', { level: 3 }),
    },
    {
      icon: <RiParagraph />,
      title: 'Paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      icon: <RiListUnordered />,
      title: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      icon: <RiListOrdered />,
      title: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
    {
      icon: <RiListCheck2 />,
      title: 'Task List',
      action: () => editor.chain().focus().toggleTaskList().run(),
      isActive: () => editor.isActive('taskList'),
    },
    {
      icon: <RiCodeBoxLine />,
      title: 'Code Block',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive('codeBlock'),
    },
    {
      type: 'divider',
    },
    {
      icon: <RiDoubleQuotesL />,
      title: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    {
      icon: <RiDivideFill />,
      title: 'Horizontal Rule',
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: <RiTextWrap />,
      title: 'Hard Break',
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      icon: <RiFormatClear />,
      title: 'Clear Format',
      action: () => editor.chain().focus().clearNodes().unsetAllMarks()
        .run(),
    },
    {
      type: 'divider',
    },
    {
      icon: <RiArrowGoBackLine />,
      title: 'Undo',
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: <RiArrowGoForwardLine />,
      title: 'Redo',
      action: () => editor.chain().focus().redo().run(),
    },
  ]

  return (
    <div className="editor__header">
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === 'divider' ? <div className="divider" /> : <MenuItem {...item} />}
        </Fragment>
      ))}
      <p className='flex-1 block place-content-end text-right pr-4 text-slate-500 text-[12px]' onMouseEnter={() => setIsCharacterCountVisible(true)} onMouseLeave={() => setIsCharacterCountVisible(false)}>

        {
          isRewriting ? (
            <span className='text-primary'>
              Rewriting...
            </span>
          ) : (
            <>
              {
                !isCharacterCountVisible ? (<span >
                  {editor.storage.characterCount.words()} words
                </span>) : (
                  <span >
                    {editor.storage.characterCount.characters()} characters
                  </span>
                )
              }
            </>
          )}
      </p>
    </div>
  )
}
