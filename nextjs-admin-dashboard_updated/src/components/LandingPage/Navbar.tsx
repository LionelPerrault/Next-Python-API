import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MessagesSquare } from "lucide-react";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="top-0 z-1 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-5">
          <Link className="my-3 inline-block sm:hidden" href="/">
            <Image
              src={"/images/logo/logo.png"}
              alt="Logo"
              width={100}
              height={20}
            />
          </Link>
          <Link className="my-3 hidden sm:block" href="/">
            <Image
              src={"/images/logo/logo.png"}
              alt="Logo"
              width={176}
              height={32}
            />
          </Link>
          <Link href={"sms:+17163375144"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="rounded-full border-2 border-black py-6 font-bold duration-500 hover:bg-black hover:text-white"
            >
              <MessagesSquare className="mr-2 h-4 w-4 text-[#C9004F]" /> TEXT
              AVA +1.716.337.5144
            </Button>
          </Link>
        </div>
        {/* <NavbarRoutes /> */}
        <div className="2xsm:gap-7 left-0 flex items-center gap-3">
          <Link href={"/become-a-partner"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="rounded-full border-2 border-black py-6 font-bold duration-500 hover:bg-black hover:text-white"
            >
              BECOME A PARTNER ✋🏾
            </Button>
          </Link>
          <Link href={"/donate"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="rounded-full border-2 border-black py-6 font-bold duration-500 hover:bg-black hover:text-white"
            >
              DONATE NOW ❤️
            </Button>
          </Link>
          {session?.user ? (
            <Link href="/dashboard">
              <Button
                variant={"outline"}
                size={"lg"}
                className="rounded-full border-2 border-black py-6 font-bold duration-500 hover:bg-black hover:text-white"
              >
                DASHBOARD
              </Button>
            </Link>
          ) : (
            <Link href="/signup">
              <Button
                variant={"outline"}
                size={"lg"}
                className="rounded-full border-2 border-black py-6 font-bold duration-500 hover:bg-black hover:text-white"
              >
                GET STARTED
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
