import { RiQuillPenFill } from "react-icons/ri";
import ProjectThemeSvg from "./project-theme-svg";
import Image from "next/image";
import IconButton from "../common/button/icon-button";
import { useRouter } from "next/navigation";
interface ProjectProps {
    id: string;
    title: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push(`/project/${project.id}/editor?new=false`);
            }}
            className="rounded-lg cursor-pointer hover:shadow-main shadow-main group relative w-64 h-36 box-border p-4 bg-white shadow-slate-300 overflow-hidden">

            <div className="w-full grid place-items-center">
                <div className="w-full rounded-lg h-28  box-border p-2 flex items-center">
                    <div className=" pl-3 items-center justify-center">
                        <h1 className="text-foreground font-bold text-center w-full text-lg m-0 p-0">{project.title}</h1>
                    </div>
                </div>
            </div>



            <IconButton className="absolute bottom-6 shadow-lg transition-all duration-150 right-4 group-hover:shadow-md group-hover:scale-110" icon={<RiQuillPenFill size={20} color="white" />} onClick={() => { }} />


        </div>
    );
}

export default ProjectCard;