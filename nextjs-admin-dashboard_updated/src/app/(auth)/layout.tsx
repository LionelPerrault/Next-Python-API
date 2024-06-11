import Navbar from "@/components/LandingPage/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp Page | Ameniti - Dashboard",
  description: "This is SignUp Page Ameniti Admin Dashboard",
  // other metadata
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
