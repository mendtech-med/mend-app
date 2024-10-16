"use client"
import { Refer, columns } from "@/app/trust-bucket/_ui/table/columns";
import { DataTable } from "@/app/trust-bucket/_ui/table/data-table";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface IRefer {
    id: string
    content: string
    sourceUrl: string
    createdAt: string
}

export default function AgentPage({ params }: { params: { projectid: string } }) {

    const [refers, setRefers] = useState<IRefer[]>([]);
    const router = useRouter();


    useEffect(() => {

        const fetchTest = async () => {
            const response = await fetch('/api/projects/' + params.projectid + '/refers', {
                credentials: 'include',
                method: 'GET',
            });
            if (!response.ok) {
                console.log('Error');
                toast.error('Error');
                return;
            }
            const data = await response.json() as IRefer[];
            toast.success('Projects Loaded');
            console.log(data);
            setRefers(data);
        }

        fetchTest();
        return () => {
            console.log('Test Page Unmounted');
        }
    }, []);

    return (
        <div className="py-2 w-full">
            <DataTable columns={columns} data={refers} />
        </div>
    );
}

