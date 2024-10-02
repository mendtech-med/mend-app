import Header from "../_ui/global/header";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-background min-h-screen w-full">
            <div className="w-screen min-h-screen box-border">
                <div className="px-12 pt-4">
                    <Header />
                    <div className="pb-8 text-gray-500">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="text-[17px] text-gray-500" href="/">Project</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-[17px] text-gray-500" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-[17px]"  >Moun Project</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="">
                        {children}
                    </div>
                </div>
            </div>
        </main >
    );
}



