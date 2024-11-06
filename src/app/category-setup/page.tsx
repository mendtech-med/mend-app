'use client';
import React, { useState, useEffect } from 'react';
import CategorySetupForm from './_components/category-setup/category-setup-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const CategorySetupPage = () => {
    const [isCategorySetupModalOpen, setIsCategorySetupModalOpen] = useState<boolean>(false);
    const router = useRouter();

    // You can fetch existing categories or perform other side effects here

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button
                onClick={() => setIsCategorySetupModalOpen(true)}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
                Create Category
            </button>

            <Dialog open={isCategorySetupModalOpen} onOpenChange={() => setIsCategorySetupModalOpen(!isCategorySetupModalOpen)}>
                <DialogContent className="min-w-[700px] bg-slate-50">
                    <CategorySetupForm onClose={() => setIsCategorySetupModalOpen(false)} />
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default CategorySetupPage;
