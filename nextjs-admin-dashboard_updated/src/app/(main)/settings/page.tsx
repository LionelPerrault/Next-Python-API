import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { BsCreditCard } from "react-icons/bs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import UpdatePassword from "@/components/Settings/UpdatePassword";

export const metadata: Metadata = {
  title: "Settings | Ameniti - Admin Dashboard",
  description:
    "This is Settings page for Ameniti Admin - Ameniti CSS Admin Dashboard",
};

const Settings = async () => {
  const session = await getServerSession(authOptions)
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />
        <div className="font-bold">
          Name:
          <span className="ml-2 font-normal">
            {session?.user.name}
          </span>
          <br />
          Email:
          <span className="ml-2 font-normal">
            {session?.user.email}
          </span>
        </div>
        <UpdatePassword />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
