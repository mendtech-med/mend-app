'use client';
import React, { useEffect, useState } from 'react';
import ReferListItem from './refer-item';
import FindListItem from './find-refer';
import { HiMagnifyingGlassPlus, HiArrowPathRoundedSquare } from "react-icons/hi2";

interface IRefer {
    id: string;
    content: string;
    sourceUrl: string;
    createdAt: Date;
}

interface IFind {
    id: string;
    title: string;
}

interface IReferTooltipProps {
    refers: IRefer[];
    finds: IFind[]; // Updated to use IFind instead of IRefer
    isLoading?: boolean;
    onSelection: (itemId: string, type: 'refer' | 'find') => void;
    refetch: () => void;
    isHiden: boolean;
}

const orderRefersByDate = (refers: IRefer[]) => {
    return [...refers].sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
};

const ReferTooltip = ({ refers, finds, isLoading, onSelection, refetch, isHiden }: IReferTooltipProps) => {
    // State to track active view: 'initial', 'refer', or 'find'
    const [activeView, setActiveView] = useState<'initial' | 'refer' | 'find'>('initial');

    useEffect(() => {
        // Reset to initial view on refetch
        setActiveView('initial');
        refetch();
        return () => {
            setActiveView('initial');
        };
    }, [refetch]);

    useEffect(() => {
        if (isHiden) {
            setActiveView('initial');
        }
    }, [isHiden]);

    // Handler to switch views
    const handleShowView = (view: 'refer' | 'find') => {
        setActiveView(view);
    };

    // Handler for selection within tooltips
    const handleSelection = (id: string, type: 'refer' | 'find') => {
        onSelection(id, type);
    };

    return (
        <div className="relative mx-auto bg-white shadow-lg rounded-lg w-80">
            {activeView === 'initial' && (
                // Initial Layer with Two Buttons
                <div className="flex flex-col items-center p-4 space-y-1 bg-slate-50 rounded-lg">
                    <button
                        onClick={() => handleShowView('refer')}
                        className="flex items-center space-x-2 w-full px-4 py-2 rounded hover:bg-slate-100 transition"
                    >
                        <HiArrowPathRoundedSquare className="w-5 h-5" />
                        <span>Refer</span>
                    </button>
                    <button
                        onClick={() => handleShowView('find')}
                        className="flex items-center space-x-2 w-full px-4 py-2 rounded hover:bg-slate-100 transition"
                    >
                        <HiMagnifyingGlassPlus className="w-5 h-5" />
                        <span>Find</span>
                    </button>
                </div>
            )}

            {(activeView === 'refer' || activeView === 'find') && (
                <>
                    {/* Tooltip Header */}
                    <div className="px-4 py-4 bg-slate-100 rounded-t-lg text-center">
                        <span className="text-black font-normal text-lg">
                            {activeView === 'refer' ? 'Re-Write with this Refer' : 'Re-Write with this Find'}
                        </span>
                    </div>
                    {/* Tooltip Body */}
                    {isLoading ? (
                        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-slate-400"></div>
                        </div>
                    ) : (
                        <div className="p-2 py-4 space-y-1 max-h-52 overflow-y-scroll">
                            {activeView === 'refer'
                                ? orderRefersByDate(refers).map(item => (
                                    <ReferListItem
                                        key={item.id}
                                        description={item.content}
                                        title={item.sourceUrl}
                                        onSelect={() => handleSelection(item.id, 'refer')}
                                    />
                                ))
                                : finds.map(item => (
                                    <FindListItem
                                        key={item.id}
                                        title={item.title}
                                        onSelect={() => handleSelection(item.id, 'find')}
                                    />
                                ))
                            }
                            {activeView === 'refer' ? (
                                refers.length === 0 && (
                                    <div className="text-center text-gray-500">No refers found</div>
                                )
                            ) : (
                                finds.length === 0 && (
                                    <div className="text-center text-gray-500">No finds found</div>
                                )
                            )}
                        </div>
                    )}
                    {/* Back Button */}
                    <div className="px-4 py-2 bg-slate-50 rounded-b-lg text-center">
                        <button
                            onClick={() => setActiveView('initial')}
                            className="text-blue-500 hover:underline"
                        >
                            Back
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReferTooltip;
