'use client';
import React from 'react';
import ListItem from './item';

const ReferTooltip = () => {
    return (
        <div className="relative mx-auto bg-white shadow-lg rounded-lg">
            {/* Tooltip */}
            <div className=" px-4 m-0 h-14 text-black font-bold text-lg text-center py-4 bg-slate-100 rounded-t-lg">
                Re-Write with this refer
            </div>
            <div className="space-y-0 p-2">
                <ListItem
                    title="Heading 1"
                    description="This is a short description for item 1."
                />
                <ListItem
                    title="Heading 2"
                    description="This is a short description for item 2."
                />
                <ListItem
                    title="Heading 3"
                    description="This is a short description for item 3."
                />
            </div>
        </div>
    );
};

export default ReferTooltip;
