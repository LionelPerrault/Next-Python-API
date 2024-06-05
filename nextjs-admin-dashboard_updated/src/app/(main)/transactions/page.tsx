import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { DataTable } from "@/components/ui/data-table";
import { getAllTransactions } from "@/actions/get-all-transactions";
import { transactionsColumns } from "@/components/columns/transactions-column";

const page = async () => {
    const session = await getServerSession(authOptions)
    if (session?.user?.role !== 'super-admin') {
        redirect('/chat')
    }
    const data = await getAllTransactions();
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Transactions" />
            <DataTable columns={transactionsColumns} data={data} searchKey="name" />
        </DefaultLayout>
    );
}

export default page;