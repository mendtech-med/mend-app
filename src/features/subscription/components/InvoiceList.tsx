import React from "react";
import { IInvoice } from "../../../types/index.types";
import { DownloadIcon } from "@radix-ui/react-icons";

type InvoiceListProps = {
    invoices: IInvoice[];
};

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
    console.log(invoices);
    
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-theme-accent/20 bg-white text-sm text-theme-main">
                <thead className="bg-white text-theme-base font-thin">
                    <tr>
                        <th className="px-4 py-2 border border-theme-accent/20 font-thin text-left">Invoice ID</th>
                        <th className="px-4 py-2 border border-theme-accent/20 font-thin text-left">Amount Due</th>
                        <th className="px-4 py-2 border border-theme-accent/20 font-thin text-left">Currency</th>
                        <th className="px-4 py-2 border border-theme-accent/20 font-thin text-left">Status</th>
                        <th className="px-4 py-2 border border-theme-accent/20 font-thin text-left">Created</th>
                        <th className="px-4 py-2 border border-theme-accent/20 font-thin text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr
                            key={invoice.id}
                            className="odd:bg-white hover:bg-theme-accent/20"
                        >
                            <td className="px-4 py-2 border border-theme-accent/20">{index + 1}</td>
                            <td className="px-4 py-2 border border-theme-accent/20">
                                {invoice.amount_due.toFixed(2)}
                            </td>
                            <td className="px-4 py-2 border border-theme-accent/20">{invoice.currency.toUpperCase()}</td>
                            <td className="px-4 py-2 border border-theme-accent/20 capitalize">
                                {invoice.status}
                            </td>
                            <td className="px-4 py-2 border border-theme-accent/20">
                                {new Date(invoice.created).toLocaleDateString()}
                            </td>
                            <td className="px-4 border border-theme-accent/20 text-center">
                                <a
                                    href={invoice.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-theme-main py-1 px-4 rounded-md text-sm inline-flex items-center gap-2 text-white hover:underline"
                                >
                                    <DownloadIcon />
                                    PDF
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceList;
