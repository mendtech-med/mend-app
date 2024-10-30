"use client"

import { ColumnDef } from "@tanstack/react-table"


export type Refer = {
    id: string
    content: string
    sourceUrl: string
    project: string
    createdAt: string
}

export const columns: ColumnDef<Refer>[] = [{
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => {
        return <div className="font-medium rounded-lg flex-1  py-4">
            {row.getValue("project")}
        </div>
    },
},
{
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
        return <div className="rounded-lg flex-1 bg-gray-200 py-4 font-medium">
            <textarea className="bg-transparent p-4 py-0 outline-none w-full h-full" value={row.getValue("content")} readOnly />
        </div>
    },
},
{
    accessorKey: "sourceUrl",
    header: "Source URL",
    cell: ({ row }) => {
        const content = row.getValue("sourceUrl") as string
        return <a href={content} target="_blank" rel="noreferrer" className="text-primary underline">
            {content.length > 50 ? content.slice(0, 50) + "..." : content}
        </a>
    }
},

{
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"))
        return date.toLocaleDateString("en-US", {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
        })
    }
},
    // {
    //     id: "actions",
    //     // cell: ({ row }) => {
    //     //     const payment = row.original

    //     //     return (
    //     //         <DropdownMenu>
    //     //             <DropdownMenuTrigger asChild>
    //     //                 <Button variant="ghost" className="h-8 w-4 p-0">
    //     //                     <span className="sr-only">Open menu</span>
    //     //                     <MoreHorizontal className="h-4 w-4" />
    //     //                 </Button>
    //     //             </DropdownMenuTrigger>
    //     //             <DropdownMenuContent align="end" className="bg-white">
    //     //                 <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //     //                 <DropdownMenuItem
    //     //                     onClick={() => navigator.clipboard.writeText(payment.content)}
    //     //                 >
    //     //                     Copy Content
    //     //                 </DropdownMenuItem>
    //     //                 <DropdownMenuSeparator />
    //     //                 <DropdownMenuItem>Delete</DropdownMenuItem>
    //     //             </DropdownMenuContent>
    //     //         </DropdownMenu>
    //     //     )
    //     // },
    // },
]
