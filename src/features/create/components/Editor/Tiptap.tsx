import { FC, useEffect, useRef, useState } from 'react';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
  ListBulletIcon,
} from '@radix-ui/react-icons';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Text } from '@radix-ui/themes';

// Tiptap Imports
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextAlign } from '@tiptap/extension-text-align';
import CharacterCount from '@tiptap/extension-character-count';

// Service and Constants Imports
import { editorConstants } from '../../constants/editor';
import { newsHandlers } from '../../../../services/handlers/news';
import { useDebounce } from '../../hooks/useDebounce';

interface EditorToolbarProps {
  blogId: string;
  editor: Editor | null;
}

const EditorToolbar: FC<EditorToolbarProps> = ({ blogId, editor }) => {
  const [saveStatus, setSaveStatus] = useState({
    saved: false,
    isError: false,
  });
  const saveTimeoutRef = useRef<number | undefined>(undefined);

  const debouncedValue = useDebounce(editor?.getHTML(), 2000);

  const updateContent = async () => {
    if (!editor) return;

    try {
      const res = await newsHandlers.showNews(blogId);

      if (res.data.success) {
        clearTimeout(saveTimeoutRef.current);
        setSaveStatus({ saved: true, isError: false });

        saveTimeoutRef.current = setTimeout(() => {
          setSaveStatus((prev) => ({
            ...prev,
            saved: false,
          }));
        }, 2000);
      } else {
        setSaveStatus({ saved: false, isError: true });
      }
    } catch (error) {
      console.log(error);

      setSaveStatus({ saved: false, isError: true });
    }
  };

  useEffect(() => {
    updateContent();
  }, [debouncedValue]);

  if (!editor) return null;

  const charactersCount = editor.storage.characterCount.characters();
  const wordsCount = editor.storage.characterCount.words();

  return (
    <Toolbar.Root className="flex items-center p-2 border-b border-gray-300 gap-1">
      <Toolbar.ToggleGroup
        className="flex gap-1"
        type="single"
        aria-label="Heading levels"
      >
        {editorConstants.headingLevels.map((level) => (
          <Toolbar.ToggleItem
            key={`h${level}`}
            className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive('heading', { level }) ? 'bg-blue-400 text-white' : ''}`}
            value={`h${level}`}
            aria-label={`Heading ${level}`}
            onClick={() => {
              editor.chain().focus().toggleHeading({ level }).run();
            }}
          >
            H{level}
          </Toolbar.ToggleItem>
        ))}
      </Toolbar.ToggleGroup>

      <Toolbar.Separator className="w-px h-4 bg-gray-300" />

      <Toolbar.ToggleGroup
        className="flex gap-1"
        type="multiple"
        aria-label="Text formatting"
      >
        <Toolbar.ToggleItem
          className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive('bold') ? 'bg-blue-400 text-white' : ''}`}
          value="bold"
          aria-label="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FontBoldIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive('italic') ? 'bg-blue-400 text-white' : ''}`}
          value="italic"
          aria-label="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FontItalicIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive('strike') ? 'bg-blue-400 text-white' : ''}`}
          value="strikethrough"
          aria-label="Strike through"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <StrikethroughIcon />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Separator className="w-px h-4 bg-gray-300" />

      <Toolbar.ToggleGroup
        type="single"
        aria-label="Text alignment"
        className="flex gap-1"
      >
        <Toolbar.ToggleItem
          className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-400 text-white' : ''}`}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          value="left"
          aria-label="Left aligned"
        >
          <TextAlignLeftIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-400 text-white' : ''}`}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          value="center"
          aria-label="Center aligned"
        >
          <TextAlignCenterIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem
          className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-400 text-white' : ''}`}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          value="right"
          aria-label="Right aligned"
        >
          <TextAlignRightIcon />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Separator className="w-px h-4 bg-gray-300" />

      <Toolbar.ToggleGroup type="single">
        <Toolbar.ToggleItem
          className={`flex items-center p-1 border-2 border-transparent rounded hover:bg-blue-500 focus:border-blue-400 ${editor.isActive('bulletList') ? 'bg-blue-400 text-white' : ''}`}
          value="list"
          aria-label="List"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <ListBulletIcon />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <section className="flex items-center ml-auto">
        {saveStatus.saved && (
          <Text size={'2'} color="green">
            Saved
          </Text>
        )}
        {saveStatus.isError && (
          <Text size={'2'} color="tomato">
            Error saving
          </Text>
        )}
        <Text size={'1'} className="text-gray-500 ml-2">
          <Text className="characters-count mr-2" as="span">
            {charactersCount} Character{charactersCount === 1 ? '' : 's'}
          </Text>
          <Text className="words-count" as="span">
            {wordsCount} Word{wordsCount === 1 ? '' : 's'}
          </Text>
        </Text>
      </section>
    </Toolbar.Root>
  );
};

// Example of how to set up the editor in the parent component
const TiptapComponent = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      CharacterCount.configure({
        limit: 10000, // Optional: set a character limit
      }),
    ],
    // other editor configuration
  });

  return (
    <div>
      <EditorToolbar blogId="your-blog-id" editor={editor} />
      {/* Other editor content */}
    </div>
  );
};

export default TiptapComponent;
