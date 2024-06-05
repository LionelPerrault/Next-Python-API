import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp Page | Ameniti - Dashboard",
  description: "This is SignUp Page Ameniti Admin Dashboard",
  // other metadata
};

const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default AuthLayout;