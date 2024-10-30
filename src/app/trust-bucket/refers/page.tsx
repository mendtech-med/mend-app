"use client";

import { columns } from "../_ui/table/columns";
import { DataTable } from "../_ui/table/data-table";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Spinner from "../../_ui/common/spinner";
import { useSearchParams } from 'next/navigation'


interface IRefer {
    id: string;
    content: string;
    sourceUrl: string;
    project: {
        id: string;
        title: string;
    }
    createdAt: string;
}



export default function AgentPage() {
    const searchParams = useSearchParams()
    const projectId = searchParams.get('projectId')

    // Define the fetch function
    const fetchRefers = async (): Promise<IRefer[]> => {
        const response = await fetch(`/api/refers`, {
            credentials: 'include',
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch refers');
        }

        const data: IRefer[] = await response.json();
        const filteredData = data.filter(refer => refer.project.id === projectId)
        return filteredData;
    };

    // Use react-query's useQuery hook
    const {
        data: refers,
        isLoading,
        isError,
        error,
    } = useQuery<IRefer[], Error>(
        ['refers'],
        fetchRefers,
        {
            // Optional: Refetch on window focus
            refetchOnWindowFocus: false,

            // Handle side effects
            onSuccess: () => {
                toast.success('Projects Loaded');
            },
            onError: (err: Error) => {
                toast.error(err.message || 'An error occurred');
            },
        }
    );

    // Optional: Redirect or handle specific error scenarios
    // useEffect(() => {
    //   if (isError && error?.message === 'Unauthorized') {
    //     router.push('/login');
    //   }
    // }, [isError, error, router]);

    return (
        <div className="py-2 w-full max-h-screen overflow-y-scroll pb-10">
            {/* Loading State */}
            {isLoading && (
                <div className="w-full h-screen bg-transparent grid place-items-center">
                    <Spinner />
                </div>
            )}

            {/* Error State */}
            {isError && (
                <div className="text-red-500 text-center">
                    {error?.message || 'An unexpected error occurred'}
                </div>
            )}

            {/* Data Table */}
            {!isLoading && !isError && refers && (
                <div className="px-6">
                    <DataTable columns={columns} data={refers.map(project => {
                        return {
                            ...project,
                            project: project.project.title
                        } as {
                            id: string
                            content: string
                            sourceUrl: string
                            project: string
                            createdAt: string
                        }
                    })} />
                </div>

            )}
        </div>
    );
}
