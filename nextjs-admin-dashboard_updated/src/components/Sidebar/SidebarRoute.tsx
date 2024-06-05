"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarRoute = ({
    route: {
        name,
        icon,
        path
    }}:{
        route: {
            name: string,
            icon: JSX.Element,
            path: string
        } }) => {
    const pathname = usePathname();
    return (
        <Link
            href={path}
            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out dark:hover:bg-meta-4 ${(pathname === "/" ||
                pathname.includes(name)) &&
                "bg-graydark dark:bg-meta-4"
                }`}
        >
            {icon}
        </Link>
    );
}

export default SidebarRoute;