'use client';
import ProjectCard from "./project-card";
import ProjectAdd from "./project-add";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CreateBlogForm from "@/components/blog/create";

interface IPorject {
    id: string;
    title: string;
}


const Projects = () => {
    const [projects, setProjects] = useState<IPorject[]>([]);
    const [isCreateBlogModalOpen, setIsCreateBlogModalOpen] = useState<boolean>(false);
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

            <Dialog open={isCreateBlogModalOpen} onOpenChange={() => setIsCreateBlogModalOpen(!isCreateBlogModalOpen)}>
                <DialogContent className="sm:max-w-md bg-slate-50">
                    <CreateBlogForm onClose={() => setIsCreateBlogModalOpen(false)} />
                </DialogContent>
            </Dialog>

            <ProjectAdd onClick={() =>
                setIsCreateBlogModalOpen(true)
            } />

            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}

        </div>
    );
}

export default Projects;