import { EditorProvider, Extensions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CharacterCount from '@tiptap/extension-character-count';
import TextAlign from '@tiptap/extension-text-align';
import EditorHeading from '@tiptap/extension-heading';
import { blogTitleHeaderStyle, editorAreaStyle } from '../../pages/blog/style';
import EditorToolbar from '../../pages/blog/editor-toolbar';
import { Heading } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { newsHandlers } from '../../services/handlers/news';
import { useParams } from 'react-router-dom';
import { Spinner } from '../create/components/spinner/spinner';
import { INews } from 'src/services/api/types';
import { ENDPOINTS } from '../../services/api/endpoints';
import { baseURL } from '../../services/api/axios';

// Extensions
const extensions: Extensions = [
  StarterKit,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  CharacterCount.configure(),
  EditorHeading.configure({
    levels: [1, 2, 3, 4, 5, 6], // You can customize heading levels here
  }),
];


const NewsPage = () => {
  const [content, setContent] = useState('');
  const { newsId } = useParams();
  const [title, setTitle] = useState('');
  const [loadingNewContent, setLoadingNewContent] = useState(true);
  const [generatingNewContent, setGeneratingNewContent] = useState(false);
  const [news, setNews] = useState({} as INews);
  
  useEffect(() => {
    let isMounted = true;
    let eventSource : EventSource | null = null;

    const getNews = async () => {
      try {
        const res = await newsHandlers.showNews(newsId ?? '');
        const newsData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;

        if (isMounted) {
          setNews(newsData as INews);
          setTitle(newsData.newsTitle);
          setContent(newsData.content);
          
          if (newsData.content == null) {
            setGeneratingNewContent(true);
            // const token = localStorage.getItem('access_token');
            const url = `${baseURL}${ENDPOINTS.NEWS.GENERATE_STREAM}?id=${newsId}`;
            eventSource = new EventSource(url);
            try {
              // SS : simple news generation
              // const response = await newsHandlers.generateNews(newsData);
              // setContent(response.data.content);

              eventSource.addEventListener("chunk", (event) => {
                const chunk = JSON.parse(event.data);
                if(chunk && chunk.content) {
                  setContent((prevContent) => prevContent + chunk.content); // Append chunk to content
                }
              });
    
              eventSource.addEventListener("end", (event) => {
                setContent((prevContent) => prevContent.replace("null", "").trim());
                console.log(event);
                if (isMounted) {
                  setGeneratingNewContent(false);
                }
                if(eventSource != null) eventSource.close();
              });
              
              eventSource.addEventListener("error", (event) => {
                if (isMounted) {
                  setGeneratingNewContent(false);
                }
                console.error("Streaming error:", event);
                if(eventSource != null) eventSource.close();
              });
              
            } catch (error) {
              console.error('Error generating news content:', error);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        if (isMounted) {
          setLoadingNewContent(false);
        }
      }
    };

    getNews();

    return () => {
      isMounted = false; // Cleanup function to prevent state updates after unmount
      if(eventSource != null) eventSource.close();
    };
  }, [newsId]);

  if (loadingNewContent) {
    return <Spinner type="content" message="Loading . . . " />;
  }

  return (
    <section>
      <header css={blogTitleHeaderStyle}>
        <Heading weight={'medium'} size={'5'}>
          {title}
        </Heading>
      </header>

      {generatingNewContent ? (
        <section
          css={editorAreaStyle}
          className="new-content"
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </section>
      ) : (
        <section css={editorAreaStyle} className='tiptap ProseMirror prose prose-sm prose-editor:w-full min-w-full'>
          <EditorProvider
            extensions={extensions}
            content={content || ''}
            slotBefore={<EditorToolbar news={news} />}
          >
            <></>
          </EditorProvider>
        </section>
      )}
    </section>
  );
};

export default NewsPage;
