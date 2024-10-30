'use client';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FindListItem = ({ title, onSelect }: { title: string, onSelect: () => void }) => {
    return (
        <div className='flex w-full cursor-pointer hover:bg-slate-200 p-2 px-2 rounded-lg bg-white'>
            <div className="flex-1" onClick={onSelect}>
                <p className="text-gray-600 !p-0 !m-0 text-sm -mt-4 ">
                    {title.length > 20 ? title.substring(0, 20) + "..." : title}
                </p>
            </div>
            <div className='w-5 h-full grid place-items-center'>
                <MdOutlineKeyboardArrowRight className="text-gray-400 " />
            </div>
        </div>
    );
};

export default FindListItem;
