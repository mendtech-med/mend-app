'use client';
import React, { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HiMiniPlus } from "react-icons/hi2";
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
import { MdDeleteForever } from "react-icons/md";
import { IoArchive } from "react-icons/io5";


interface SidebarItemProps {
    name: string;
    path: string;
    icon: IconType;
    isActive?: boolean;
}


interface ClickableSidebarItemProps {
    name: string;
    onClick: () => void;
    icon: IconType;
    color?: string;
    size?: number;
}


const ProjectCardAction: React.FC<ClickableSidebarItemProps> = ({ name, onClick, icon: Icon, color, size }) => {
    return (
        <div onClick={onClick}>
            <div className={cn(`flex items-center px-3 h-10 py-2 bg-slate-50 text-black cursor-pointer transition-all duration-300 rounded-md hover:bg-slate-100`)}>
                <span className={`text-black text-[14px] text-${color}`}
                    style={{
                        color: color
                    }}
                >{name}</span>
                <div className="flex-1 grid place-content-end">
                    <Icon size={size} className={`text-${color}`} style={{
                        color: color
                    }} />
                </div>
            </div>
        </div>
    );
};

const ProjectCardActions = () => {


    return (
        <nav className="mb-2 space-y-2">
            <h1 className="text-black text-[16px] font-semibold py-2 pb-0 px-2">Actions</h1>
            <ProjectCardAction name="Delete" color='red' size={25} onClick={() => { }} icon={MdDeleteForever} />
            <ProjectCardAction name="Archive" onClick={() => { }} size={20} icon={IoArchive} />
        </nav>
    );
};

export default ProjectCardActions;
