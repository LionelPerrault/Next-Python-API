import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { getDashboardHeaders } from "@/actions/get-dashboard-headers";
import { Building2, Eye, HandCoins, HeartHandshake, ShoppingBag, Users } from "lucide-react";
import CardDataStats from "@/components/CardDataStats";

export const metadata: Metadata = {
  title:
    "E-commerce Dashboard | TailAdmin - Dashboard",
  description: "This is Home for TailAdmin Dashboard",
};

const page = async () => {
  const session = await getServerSession(authOptions)
  if (session?.user.role !== "super-admin") {
    redirect('/chat')
  }
  const data = await getDashboardHeaders()
  return (
    <>
      <DefaultLayout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats title="Charities" total="17" rate="">
            <HeartHandshake />
          </CardDataStats>
          <CardDataStats title="Organizations" total="0" rate="">
            <Building2 />
          </CardDataStats>
          <CardDataStats title="After Ava Fee" total={`$${data.ava_fees}`} rate="10%">
            <HandCoins />
          </CardDataStats>
          <CardDataStats title="Total Users" total={`${data.total_users}`} rate="">
            <Users />
          </CardDataStats>
        </div>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}

export default page;
