"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarRoutes = () => {
    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About AVA',
            path: '/about'
        },
        {
            name: 'Events',
            path: '/events'
        },
        {
            name: 'Gallary',
            path: '/gallary'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ]
    const pathname = usePathname()

    return (
        <div className="flex items-center gap-3 font-bold">
            {routes.map((route, index) => (
                <Link key={index} href={route.path}>
                    <p className={cn(pathname === route.path ? "text-[#C9004F]" : "text-black","dark:text-white hover:text-[#C9004F] dark:hover:text-[#C9004F] text-sm sm:text-base")}>{route.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default NavbarRoutes;