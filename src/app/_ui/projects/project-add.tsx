'use client';
import { HiMiniPlus } from "react-icons/hi2";
import IconButton from "../common/button/icon-button";
interface ProjectAddProps {
    onClick: () => void;
}


const ProjectAdd = ({ onClick }: ProjectAddProps) => {
    return (
        <div className="rounded-lg flex hover:bg-white/50 cursor-pointer flex-col items-center justify-center  space-y-4 w-52 h-36 border-dashed border-4 border-gray-400/20">
            <IconButton onClick={onClick} className="bg-primary text-white transition-all duration-300 shadow-main hover:scale-110" icon={<HiMiniPlus size={25} />} />
        </div>
    );
}

export default ProjectAdd;