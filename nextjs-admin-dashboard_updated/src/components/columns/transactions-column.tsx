"use client"
import { ColumnDef } from "@tanstack/react-table";

interface Transaction {
    name: string;
    email: string;
    amount: string;
    foundation: string;
    status: string;
    created_at: string;
}

export const transactionsColumns: ColumnDef<Transaction>[] = [
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'Email',
        accessorKey: 'email',
    },
    {
        header: 'Amount',
        accessorKey: 'amount',
    },
    {
        header: 'Foundation',
        accessorKey: 'foundation',
    },
    {
        header: 'Status',
        accessorKey: 'status',
    },
    {
        header: 'Created At',
        accessorKey: 'created_at',
    }
];