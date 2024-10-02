'use client';
import ProjectCard from "./project-card";
import ProjectAdd from "./project-add";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


interface IPorject {
    id: string;
    name: string;
}


const Projects = () => {




    const [projects, setProjects] = useState<IPorject[]>([]);
    const router = useRouter();


    useEffect(() => {

        const fetchTest = async () => {
            const response = await fetch('/api/projects/last-updated', {
                credentials: 'include',
                method: 'GET',
            });
            if (!response.ok) {
                console.log('Error');
                toast.error('Error');
                return;
            }
            const data = await response.json() as IPorject[];
            toast.success('Projects Loaded');
            console.log(data);

            setProjects(data);
        }

        fetchTest();
        return () => {
            console.log('Test Page Unmounted');
        }
    }, []);



    return (
        <div className="flex flex-wrap gap-6 justify-start  h-full">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}

            {
                projects.length === 0 && (
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="text-foreground text-lg">No Projects Available</h1>
                    </div>
                )
            }

            <ProjectAdd onClick={() => router.push("/agent/create")} />
        </div>
    );
}

export default Projects;