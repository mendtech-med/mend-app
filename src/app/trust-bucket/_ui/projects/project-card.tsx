import { RiQuillPenFill } from "react-icons/ri";
import IconButton from "@/app/_ui/common/button/icon-button";
import { useRouter } from "next/navigation";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import ProjectCardAction from "./project-card-actions";

interface ProjectProps {
    id: string;
    title: string;
    createdAt: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const router = useRouter();
    const [isActionsPopoverOpen, setIsActionsPopoverOpen] = useState<boolean>(false);
    return (

        <div className="rounded-lg hover:shadow-main shadow-main group relative w-60 h-36 box-border p-4 bg-white shadow-slate-300 overflow-hidden">
            <div className="w-full h-full box-border px-2 relative">
                <div className=" items-center justify-center pt-6">
                    <h1 className="text-foreground font-bold text-left !text-[16px] w-full text-lg m-0 p-0">{
                        project.title.length > 30 ? project.title.slice(0, 30) + '...' : project.title
                    }</h1>
                </div>
                <div className="items-center justify-center mt-4 absolute bottom-0">
                    <p className="font-normal w-full text-left text-[12px] text-gray-400 m-0 p-0">{project.createdAt}</p>
                </div>
            </div>

            <IconButton className="absolute bottom-6 shadow-lg transition-all duration-150 right-4 group-hover:shadow-md group-hover:scale-110" icon={<RiQuillPenFill size={20} color="white" />} onClick={() => {
                router.push(`/project/${project.id}/editor?new=false`);
            }} />

        </div>
    );
}

export default ProjectCard;