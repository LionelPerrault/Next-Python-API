import Navbar from "@/components/LandingPage/Navbar";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/signin");
  }
  return <div>{children}</div>;
};

export default layout;
