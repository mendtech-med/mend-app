'use client';
import React from 'react';
import ListItem from './item';


interface IRefer {
    id: string
    content: string
    sourceUrl: string
    createdAt: Date
}

interface IReferTooltipProps {
    refers: IRefer[],
    isLoading?: boolean,
    onSelection: (ReferId: string) => void
}



const orderRefersByDate = (refers: IRefer[]) => {
    return refers.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

const ReferTooltip = ({ refers, isLoading , onSelection }: IReferTooltipProps) => {

    console.log("projets refers :", refers);

    return (
        <div className="relative mx-auto bg-white shadow-lg rounded-lg">
            {/* Tooltip */}
            <div className=" px-4 m-0 h-14 text-black font-bold text-lg text-center py-4 bg-slate-100 rounded-t-lg">
                Re-Write with this refer
            </div>
            {
                isLoading ? (
                    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 grid place-items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-slate-400"></div>
                    </div>) : (
                    <div className="space-y-0 p-2">
                        {
                            orderRefersByDate(refers).slice(0, 3).map(refer => (
                                <ListItem key={refer.id} description={refer.content} title={refer.sourceUrl} onSelect={() => onSelection(refer.id)} />
                            ))
                        }
                    </div>)
            }
        </div>
    );
};

export default ReferTooltip;
