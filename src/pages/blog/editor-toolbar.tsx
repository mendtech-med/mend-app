import * as Toolbar from '@radix-ui/react-toolbar';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
  ListBulletIcon,
} from '@radix-ui/react-icons';
import {
  editorToggleGroupStyle,
  editorToolbarRootStyle,
  saveStatusStyle,
  separatorStyle,
  toolbarToggleItemStyle,
} from './style';
import { useCurrentEditor } from '@tiptap/react';
import { Button, Text, TextField } from '@radix-ui/themes';
import { FC, useEffect, useRef, useState } from 'react';
import { editorConstants } from './../../constant';
import { useDebounce } from '../../features/create/hooks/useDebounce';
import { newsHandlers } from '../../services/handlers/news';
import { INews } from '../../services/api/types';
import {
  MdArrowForward,
  MdFormatQuote,
  MdHorizontalRule,
  MdRedo,
  MdSearch,
  MdUndo,
} from 'react-icons/md';

interface EditorToolbarProps {
  news: INews;
  isGenerating?: boolean;
}
const EditorToolbar: FC<EditorToolbarProps> = ({
  news,
  isGenerating = false,
}) => {
  const { editor } = useCurrentEditor();
  const [popoverPosition, setPopoverPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isRewriting, setIsRewriting] = useState(false);
  const [saveStatus, setSaveStatus] = useState({
    saved: false,
    isError: false,
  });
  const saveTimeoutRef = useRef<number | undefined>(undefined);
  const debouncedValue = useDebounce(editor?.getHTML(), 2000);
  const [selectionRect, setSelectionRect] = useState<DOMRect | any>(null);
  const [isOtherText, setIsOtherText] = useState(false);
  const [otherText, setOtherText] = useState('');

  const updateContent = async () => {
    if (debouncedValue && !isGenerating) {
      try {
        news.content = debouncedValue;
        await newsHandlers.updateNews(news);

        clearTimeout(saveTimeoutRef.current);
        setSaveStatus({ saved: true, isError: false });

        saveTimeoutRef.current = setTimeout(() => {
          setSaveStatus((prev) => ({
            ...prev,
            saved: false,
          }));
        }, 2000);
      } catch (error) {
        console.log(error);
        setSaveStatus({ saved: false, isError: true });
      }
    }
  };

  useEffect(() => {
    updateContent();
  }, [debouncedValue, isGenerating]);
  // Detect editor selection

  const handleSelection = () => {
    if (!editor) return;

    const { state } = editor;
    const { from, to } = state.selection;

    if (from === to) {
      setIsPopoverVisible(false);
      return;
    }
    // Get selected text
    const selectedText = state.doc.textBetween(from, to, ' ').trim();

    const selectedTextWindow = window?.getSelection()?.toString().trim();

    // Avoid triggering if no valid text is selected
    if (
      !selectedText ||
      selectedText.length === 0 ||
      !selectedTextWindow ||
      selectedTextWindow?.length === 0
    ) {
      setIsPopoverVisible(false);
      // setIsOtherText(false);
      return;
    }

    // Get bounding rect for the selected content
    const startCoords = editor.view.coordsAtPos(from);
    const endCoords = editor.view.coordsAtPos(to);

    const coords = editor.view.dom.getBoundingClientRect();

    const rect = {
      top: startCoords.top - coords.top - 60,
      left: (startCoords.left + endCoords.right) / 2 - coords.left,
    };

    setSelectionRect({
      ...rect,
      width: Math.abs(endCoords.right - startCoords.left),
      height: startCoords.bottom - startCoords.top,
    });

    const range = window?.getSelection()?.getRangeAt(0).getBoundingClientRect();
    setPopoverPosition({
      top: rect.top - 20,
      left: rect.left,
    });
    setPopoverPosition({
      top: window.scrollY + (range?.top ?? 0) - 40,
      left: window.scrollX + (range?.left ?? 0),
    });
    setIsPopoverVisible(true);
    setPopoverView('main');
  };

  // Attach selection event listener
  useEffect(() => {
    const editorDOM = editor?.view.dom;
    if (!editorDOM) return;

    // Listen to selection changes
    document.addEventListener('selectionchange', handleSelection);

    return () => {
      document.removeEventListener('selectionchange', handleSelection);
    };
  }, [editor]);

  const handleFind = async (type: string) => {
    setIsPopoverVisible(false);
    if (type === 'Other') {
      setIsOtherText(true);
      return; // Wait for input in 'Other'
    }
    
    setIsOtherText(false);
    setIsRewriting(true);

    if (!editor) return;

    const { from, to } = editor.state.selection;

    if (from === to) {
      console.warn('No text is selected.');
      return;
    }

    const selectedText = editor.state.doc.textBetween(from, to, ' ');
    const payload = {
      type: type,
      selection: selectedText,
      brandId: news.brandId,
      newsTitle: news.newsTitle,
    };
    try {
      const data = await newsHandlers.findSelectedText(payload);
      editor?.chain().focus().setHorizontalRule().run()
      editor
        .chain()
        .focus()
        .deleteRange({ from, to })
        .insertContent(
          "\n<p><br><br class='ProseMirror-trailingBreak'></p>\n" +
            data.data.replace(/\n/g, '') +
            "\n<p><br><br class='ProseMirror-trailingBreak'></p>\n"
        )
        .run();
        editor?.chain().focus().setHorizontalRule().run()
      setIsRewriting(false);
    } catch (error) {
      setIsRewriting(false);
      console.log(error);
    }
  };

  const handleRefer = async (content: string) => {
    if (!editor) return;
    // editor
    //     .chain()
    //     .focus()
    //     .insertContent(content)
    //     .run();

    setIsPopoverVisible(false);
    setIsRewriting(true);

    if (!editor) return;

    const { from, to } = editor.state.selection;

    if (from === to) {
      console.warn('No text is selected.');
      return;
    }

    const selectedText = editor.state.doc.textBetween(from, to, ' ');
    const payload = {
      referContent: content,
      selection: selectedText,
      brandId: news.brandId,
      newsTitle: news.newsTitle,
    };
    try {
      const data = await newsHandlers.referSelectedText(payload);
      editor
        .chain()
        .focus()
        .deleteRange({ from, to })
        .insertContent(data.data.replace(/\n/g, ''))
        .run();
      setIsRewriting(false);
    } catch (error) {
      setIsRewriting(false);
      console.log(error);
    }
  };

  if (!editor) return null;

  const charactersCount = editor.storage.characterCount.characters();
  const wordsCount = editor.storage.characterCount.words();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [popoverView, setPopoverView] = useState<'main' | 'find' | 'refer'>(
    'main'
  );

  const findList = [
    'Statistic',
    'Example',
    'Story',
    'News',
    'Industry Opinion',
    'Other',
  ];

  // Render dynamic popover content based on the current view
  const renderPopoverContent = () => {
    switch (popoverView) {
      case 'find':
        return (
          <div className="popover-container">
            {/* <div className="popover-header">Find</div> */}
            <div className="find-list">
              {findList?.map((item, index) => (
                <div key={index} className="find-item">
                  <Button
                    className="refer-find"
                    onClick={() => handleFind(item)}
                  >
                    {item}
                    <MdArrowForward />
                  </Button>
                </div>
              ))}
              {/* <div className="find-item input-container">
                <input
                  type="text"
                  className="find-input"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Enter your type here"
                />
                <Button
                  className="other-button"
                  onClick={() => handleFind(type)}
                  disabled={!type.trim()}
                >
                  <MdArrowForward />
                </Button>
              </div> */}
            </div>
            <div
              className="popover-footer"
              style={{ marginTop: '16px', textAlign: 'right' }}
            >
              <button
                onClick={() => setPopoverView('main')}
                className="back-button"
              >
                Go Back
              </button>
            </div>
          </div>
        );
      case 'refer':
        return (
          <div className="popover-container">
            <div className="refer-list">
              {news.refer?.map((item, index) => (
                <div key={index}>
                  <Button
                    className="refer-find"
                    onClick={() => handleRefer(item.content)}
                  >
                    <div className="text-start text-truncate w-60">
                      <div className="text-gray-900 flex-wrap">
                        {item.content}
                      </div>
                      <span className="text-gray-500 flex-wrap">
                        {item.source.replace('https://', '')}
                      </span>
                    </div>
                    <MdArrowForward />
                  </Button>
                </div>
              ))}
            </div>
            <div
              className="popover-footer"
              style={{ marginTop: '16px', textAlign: 'right' }}
            >
              <button
                onClick={() => setPopoverView('main')}
                className="back-button"
              >
                Go Back
              </button>
            </div>
          </div>
        );
      default:
        return (
          <div className="popover-container">
            <Button
              className="refer-find"
              onClick={() => setPopoverView('find')}
            >
              Find
              <MdArrowForward />
            </Button>
            <Button
              className="refer-find"
              onClick={() => setPopoverView('refer')}
            >
              Refer
              <MdArrowForward />
            </Button>
          </div>
        );
    }
  };

  return (
    <>
      <div>
        {isPopoverVisible && popoverPosition && (
          <div
            style={{
              position: 'absolute',
              top: selectionRect.top + selectionRect.height,
              left: selectionRect.left,
              zIndex: 1000,
            }}
          >
            {renderPopoverContent()}
          </div>
        )}
      </div>
      <Toolbar.Root css={editorToolbarRootStyle}>
        <Toolbar.ToggleGroup
          css={editorToggleGroupStyle}
          type="single"
          aria-label="Heading levels"
        >
          {editorConstants.headingLevels.map((level) => {
            return (
              <Toolbar.ToggleItem
                css={toolbarToggleItemStyle(editor.isActive({ level }))}
                value={`h${level}`}
                aria-label={`Heading ${level}`}
                onClick={() => {
                  if (editor.isActive({ level })) {
                    editor.commands.toggleHeading({ level });
                  } else {
                    editor.commands.setHeading({ level });
                  }
                }}
              >
                H{level}
              </Toolbar.ToggleItem>
            );
          })}
        </Toolbar.ToggleGroup>
        <Toolbar.Separator css={separatorStyle} />
        <Toolbar.ToggleGroup
          css={editorToggleGroupStyle}
          type="multiple"
          aria-label="Text formatting"
        >
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(editor.isActive('bold'))}
            value="bold"
            aria-label="Bold"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <FontBoldIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(editor.isActive('italic'))}
            value="italic"
            aria-label="Italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <FontItalicIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(editor.isActive('strike'))}
            value="strikethrough"
            aria-label="Strike through"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <StrikethroughIcon />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator css={separatorStyle} />

        <Toolbar.ToggleGroup
          type="single"
          aria-label="Text alignment"
          css={editorToggleGroupStyle}
        >
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(editor.isActive({ textAlign: 'left' }))}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            value="left"
            aria-label="Left aligned"
          >
            <TextAlignLeftIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(
              editor.isActive({ textAlign: 'center' })
            )}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            value="center"
            aria-label="Center aligned"
          >
            <TextAlignCenterIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(
              editor.isActive({ textAlign: 'right' })
            )}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            value="right"
            aria-label="Right aligned"
          >
            <TextAlignRightIcon />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator css={separatorStyle} />
        <Toolbar.ToggleGroup type="single" css={editorToggleGroupStyle}>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(editor.isActive('orderedList'))}
            value="list"
            aria-label="List"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <ListBulletIcon />
          </Toolbar.ToggleItem>
          {/* Blockquote */}
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(editor?.isActive('blockquote'))}
            value="blockquote"
            aria-label="blockquote"
            onClick={() => editor?.chain().focus().setBlockquote().run()}
          >
            <MdFormatQuote />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(editor?.isActive('paragraph'))}
            value="paragraph"
            aria-label="paragraph"
            onClick={() => editor?.chain().focus().setHorizontalRule().run()}
          >
            <MdHorizontalRule />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator css={separatorStyle} />
        <Toolbar.ToggleGroup type="single" css={editorToggleGroupStyle}>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(false)}
            value="undo"
            aria-label="undo"
            onClick={() => editor?.chain().focus().undo().run()}
            disabled={!editor.can().undo() || isGenerating}
          >
            <MdUndo />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            css={toolbarToggleItemStyle(false)}
            value="redo"
            aria-label="redo"
            onClick={() => editor?.chain().focus().redo().run()}
            disabled={!editor.can().redo() || isGenerating}
          >
            <MdRedo />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator css={separatorStyle} />

        {isOtherText && (
          <div className="flex items-center space-x-2 ml-2">
            <TextField.Root
              placeholder="Please enter text here..."
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              className="mr-1 w-[200px]"
            />
            <Button
              css={toolbarToggleItemStyle(true)}
              onClick={() => handleFind(otherText)}
              disabled={!otherText.trim()}
              className='cursor-pointer'
            >
              <MdSearch />
            </Button>
          </div>
        )}
        {/* Save Status and Character Count */}
        <section css={saveStatusStyle}>
          {saveStatus.saved && (
            <Text size="2" color="green">
              Saved
            </Text>
          )}
          {saveStatus.isError && (
            <Text size="2" color="tomato">
              Error saving
            </Text>
          )}

          {!isGenerating && !isRewriting && (
            <Text size="1" className="count">
              <Text className="characters-count" as="span">
                {charactersCount} Character{charactersCount === 1 ? '' : 's'}
              </Text>
              <Text className="words-count" as="span">
                {wordsCount} Word{wordsCount === 1 ? '' : 's'}
              </Text>
            </Text>
          )}
          {(isGenerating || isRewriting) && (
            <Text size="1" color="blue" className="mr-0">
              Rewriting...
            </Text>
          )}
        </section>
      </Toolbar.Root>
    </>
  );
};

export default EditorToolbar;
