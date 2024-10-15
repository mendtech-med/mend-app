'use client';
import React, { useState } from "react";
import Link from "next/link";
import Routes from "./routes"; // Importing the routes
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
import {
    clerkMiddleware,
    createRouteMatcher,
} from '@clerk/nextjs/server';

import { SignOutButton } from '@clerk/nextjs'


interface SidebarItemProps {
    name: string;
    path: string;
    icon: IconType;
    isActive?: boolean;
}




const SidebarItem: React.FC<SidebarItemProps> = ({ name, path, icon: Icon, isActive }) => {
    return (
        <Link href={path}>
            <div className={cn("flex items-center px-3 py-3 mb-2 text-slate-900 cursor-pointer hover:bg-[#6869AC]/20 transition-all duration-300 rounded-lg group", {
                "bg-[#6869AC]/20": isActive,
                "text-white cursor-pointer bg-[#6869AC]": path === "/"
            })}>
                <Icon size={20} className={cn("mr-3 group-hover:text-primary", {
                    "text-primary": isActive,
                    "text-white  ": path === "/"

                })} />
                <span className={cn("group-hover:text-primary", {
                    "text-primary": isActive,
                    "text-white ": path === "/"

                })}>{name}</span>
                <div className="flex-1 grid place-content-end">
                    <MdKeyboardArrowRight className={cn("group-hover:text-primary", {
                        "text-primary": isActive,
                        "text-white  ": path === "/"

                    })} />
                </div>
            </div>
        </Link>
    );
};


const LogOut = () => {
    return (
        <SignOutButton>
            <div className={"flex items-center px-3 py-3 mb-2 text-black cursor-pointer hover:bg-slate-100 bg-transparent transition-all duration-300 rounded-lg group"} >
                <RiLogoutCircleRLine size={20} className={cn("mr-3 text-black")} />
                <span className={cn("text-black text-[14px] ")}>
                    Log Out
                </span>
                <div className="flex-1 grid place-content-end">
                    <MdKeyboardArrowRight className={cn("text-black")} />
                </div>
            </div>
        </SignOutButton>

    );
};

const Sidebar = () => {
    const routes = Routes(); // Fetch routes dynamically
    const currentPath = usePathname();

    const [isCreateBlogModalOpen, setIsCreateBlogModalOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col justify-between h-screen w-80 px-6 bg-white shadow-lg">


            <Dialog open={isCreateBlogModalOpen} onOpenChange={() => setIsCreateBlogModalOpen(!isCreateBlogModalOpen)}>
                <DialogContent className=" bg-slate-50">
                    <CreateBlogForm onClose={() => setIsCreateBlogModalOpen(false)} />
                </DialogContent>
            </Dialog>


            {/* Top Section */}
            <div>
                <div className="flex items-center justify-center h-24">
                    {/* Replace 'your-logo.png' with your actual logo file */}
                    <img src="/brand/logo.svg" alt="Logo" className="h-16" />
                </div>
                <nav className="mt-6">

                    {routes.map((route, index) => (
                        <SidebarItem
                            key={index}
                            name={route.name}
                            path={route.path}
                            icon={route.icon}
                            isActive={currentPath === route.path}
                        />
                    ))}
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="mb-6">
                <LogOut />
            </div>
        </div>
    );
};

export default Sidebar;
