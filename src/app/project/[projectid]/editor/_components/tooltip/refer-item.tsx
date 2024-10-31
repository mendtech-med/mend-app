"use client";
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const ReferListItem = ({ title, description, onSelect }: { title: string, description: string, onSelect: () => void }) => {
    return (
        <div className='flex w-full cursor-pointer hover:bg-slate-200 p-2 px-2 rounded-lg bg-white'>
            <div className="flex-1" onClick={onSelect}>
                <h3 className="text-md !p-0 !m-0 font-semibold  leading-5">{description.length > 20 ? description.substring(0, 20) + "..." : description}</h3>
                <p className="text-primary/20 !p-0 !m-0 text-sm -mt-4 ">{title.length > 20 ? title.substring(0, 20) + "..." : title}</p>
            </div>
            <div className='w-5 h-full grid place-items-center'>
                <MdOutlineKeyboardArrowRight className="text-gray-400 mt-3" />
            </div>
        </div>

    );
};

export default ReferListItem;
