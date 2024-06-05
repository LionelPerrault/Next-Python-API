import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { DataTable } from "@/components/ui/data-table";
import { usersColumns } from "@/components/columns/users-columns";
import { getAllUsers } from "@/actions/get-all-users";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Users | Ameniti - Dashboard",
  description:
    "This is Users page for Ameniti Admin - Ameniti wind CSS Admin Dashboard",
};

const Users = async () => {
  const session = await getServerSession(authOptions)
  if(session?.user.role !=="super-admin"){
    redirect('/dashboard')
  }
  const data = await getAllUsers();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />
      <DataTable columns={usersColumns} data={data} searchKey="name" />
    </DefaultLayout>
  );
};

export default Users;
