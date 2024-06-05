"use client"
import Link from "next/link";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none inset-x-0">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-15">
        <div>
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
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7 left-0">
          {/* <!-- User Area --> */}
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
