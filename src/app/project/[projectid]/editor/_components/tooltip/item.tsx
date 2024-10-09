"use client";
import React from 'react';

const ListItem = ({ title, description, onSelect }: { title: string, description: string, onSelect: () => void }) => {
    return (
        <div className="w-full py-4 cursor-pointer hover:bg-slate-50 px-2 rounded-lg bg-white" onClick={onSelect}>
            <h3 className="text-md p-0 m-0 font-semibold">{description.length > 20 ? description.substring(0, 20) + "..." : description}</h3>
            <p className="text-gray-600 p-0 m-0 text-sm">{title.length > 20 ? title.substring(0, 20) + "..." : title}</p>
        </div>
    );
};

export default ListItem;
