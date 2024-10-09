"use client";
import React from 'react';

const ListItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="w-full py-4 cursor-pointer hover:bg-slate-50 px-2 rounded-lg bg-white">
            <h3 className="text-md p-0 m-0 font-semibold">{title}</h3>
            <p className="text-gray-600 p-0 m-0 text-sm">{description}</p>
        </div>
    );
};

export default ListItem;
