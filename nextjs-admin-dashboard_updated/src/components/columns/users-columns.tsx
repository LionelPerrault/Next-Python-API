"use client"
import { ColumnDef } from "@tanstack/react-table";
import { MessagesSquare } from 'lucide-react';
import { Button } from "../ui/button";
import Link from "next/link";

interface IUsers {
    _id:string;
    request: number;
    chats: number;
    number: string;
    name: string;
    age: number;
    updated_at: Date;
}

export const usersColumns: ColumnDef<IUsers>[] = [
    // {
    //     header: 'Request',
    //     accessorKey: 'request',
    //     cell: ({ row }) => <Button variant={"outline"} size={"sm"} className="border-blue-500 text-blue-500 hover:text-blue-600">Request</Button>
    // },
    {
        header: 'Chats',
        accessorKey: 'chats',
        cell: ({ row }) =>
            <Link href={`/chat?user=${row.original._id}`} className="flex items-end gap-[2px]">
                <span className="shadow-lg border rounded-full p-2 text-blue-600">
                    <MessagesSquare className="w-4 h-4"/>
                </span>
                <p className="text-xs">{row.original.chats}</p>
            </Link>,
    },
    {
        header: 'Phone',
        accessorKey: 'number',
    },
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'Age',
        accessorKey: 'age',
    },
    {
        header: 'Last Engaged on',
        accessorKey: 'updated_at',
    },
];