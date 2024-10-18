"use client";

import { useSearchParams } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import Project from '@/server/domain/entities/project.entity';
import Refer from '@/server/domain/entities/refer.entity';
import EditorView from './_components/editor';
import Spinner from '@/components/global/spinner';

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


export default function Editor() {
  const params = useParams<{ projectid: string }>();
  const searchParams = useSearchParams();
  const isNewBlog = searchParams.get('new') === 'true';


  const fetchProject = async () => {
    const { data } = await axios.get('/api/projects/' + params.projectid);
    return data;
  };




  const { data: project, error, isLoading, isError, refetch } = useQuery<IProject[]>('refers', fetchProject, {
    onError: (error) => {
      toast.error("Something went wrong while fetching the project");
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });


  return (
    <div className='max-h-screen box-border pb-4'>
      {
        project ? <EditorView isLoading={isLoading} isNewBlog={isNewBlog} project={project[0]} refetch={refetch} /> : <div className='w-full h-screen bg-transparent grid place-items-center' >
          <Spinner />
        </div>
      }
    </div>
  )
}


