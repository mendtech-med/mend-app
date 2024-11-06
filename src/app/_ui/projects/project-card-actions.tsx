// components/ProjectCardActions.tsx
'use client';

import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { MdDeleteForever } from 'react-icons/md';
import { IoArchive } from 'react-icons/io5';
import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import ProjectCardAction from './project-card-action';
import Spinner from '..//spinner';
import { MdCheck } from 'react-icons/md';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

interface ProjectCardActionsProps {
    projectId: string;
    onArchive?: () => void; // Optional: Implement similarly
}

const ProjectCardActions: React.FC<ProjectCardActionsProps> = ({ projectId, onArchive }) => {
    const queryClient = useQueryClient();
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    // Mutation for deleting the project
    const deleteMutation = useMutation(
        async () => {
            const response = await fetch('/api/projects/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ id: projectId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete the project.');
            }

            return response.json();
        },
        {
            onSuccess: () => {
                toast.success('Project deleted successfully!');
                // Invalidate and refetch queries related to projects if necessary
                queryClient.invalidateQueries(['projects']);
                setDeleteDialogOpen(false);
            },
            onError: (error: any) => {
                toast.error(error.message || 'An error occurred while deleting the project.');
            },
        }
    );

    // Handle Delete Click
    const handleDelete = () => {
        setDeleteDialogOpen(true);
    };

    // Confirm Delete
    const confirmDelete = () => {
        deleteMutation.mutate();
    };


    // Handle Archive Click (Optional)
    const handleArchive = () => {
        console.log('Archive clicked');
    };

    return (
        <nav className="mb-2 space-y-2">
            <h1 className="text-black text-[16px] font-semibold py-2 pb-0 px-2 m-0 p-0 leading-3">Actions</h1>

            {/* Delete Action with Confirmation Dialog */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogTrigger asChild>
                    <ProjectCardAction
                        name="Delete"
                        color="black"
                        size={25}
                        onClick={handleDelete}
                        icon={MdDeleteForever}
                        isLoading={deleteMutation.isLoading}
                        isSuccess={deleteMutation.isSuccess}
                    />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Deletion</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this project? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <button
                            onClick={() => setDeleteDialogOpen(false)}
                            className="px-4 py-2 bg-gray-200 rounded-md mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={confirmDelete}
                            className="px-4 py-2 bg-primary text-white rounded-md"
                            disabled={deleteMutation.isLoading}
                        >
                            {deleteMutation.isLoading ? <Spinner size={16} /> : 'Delete'}
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Archive Action (Optional) */}
            <ProjectCardAction
                name="Archive"
                color="black"
                size={20}
                onClick={handleArchive}
                icon={IoArchive}
                isLoading={deleteMutation.isLoading}
                isSuccess={deleteMutation.isSuccess}
            />
        </nav>
    );
};

export default ProjectCardActions;
