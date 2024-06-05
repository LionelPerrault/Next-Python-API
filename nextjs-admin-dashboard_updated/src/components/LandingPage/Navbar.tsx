import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MessagesSquare } from "lucide-react";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = async () => {
    const session = await getServerSession(authOptions)

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
                    <Link href={'sms:+17163375144'}>
                        <Button variant={"outline"} size={"lg"} className="border-2 border-black rounded-full py-6 hover:bg-black hover:text-white duration-500 font-bold">
                            <MessagesSquare className="text-[#C9004F] w-4 h-4 mr-2" /> TEXT AVA +1.716.337.5144
                        </Button>
                    </Link>
                </div>
                <NavbarRoutes />
                <div className="flex items-center gap-3 2xsm:gap-7 left-0">
                    <Link href={'/become-a-partner'}>
                        <Button variant={"outline"} size={"lg"} className="border-2 border-black rounded-full py-6 hover:bg-black hover:text-white duration-500 font-bold">
                            BECOME A PARTNER ✋🏾
                        </Button>
                    </Link>
                    <Link href={'/donate'}>
                        <Button variant={"outline"} size={"lg"} className="border-2 border-black rounded-full py-6 hover:bg-black hover:text-white duration-500 font-bold">
                            DONATE NOW ❤️
                        </Button>
                    </Link>
                    {session?.user ?
                        <Link href="/dashboard">
                            <Button variant={"outline"} size={"lg"} className="border-2 border-black rounded-full py-6 hover:bg-black hover:text-white duration-500 font-bold">
                                DASHBOARD
                            </Button>
                        </Link>
                        :
                        <Link href="/signup">
                            <Button variant={"outline"} size={"lg"} className="border-2 border-black rounded-full py-6 hover:bg-black hover:text-white duration-500 font-bold">
                                GET STARTED
                            </Button>
                        </Link>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;