import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CreditCard, LogOutIcon, MessageSquareIcon, SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";

const DropdownUser = () => {
  const session = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-4">
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {session?.data?.user?.name || ""}
          </span>
        </span>

        <Avatar>
          <AvatarFallback>{session.data?.user.name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {session.data?.user.role == "super-admin" &&
          <>
            <Link href="/users">
              <DropdownMenuItem>
                <UserIcon className="w-4 h-4 mr-2" />
                Users
              </DropdownMenuItem>
            </Link>
            <Link href="/transactions">
              <DropdownMenuItem>
                <CreditCard className="w-4 h-4 mr-2" />
                Transactions
              </DropdownMenuItem>
            </Link>
          </>
        }
        <Link href="/chat">
          <DropdownMenuItem>
            <MessageSquareIcon className="w-4 h-4 mr-2" />
            Chat
          </DropdownMenuItem>
        </Link>
        <Link href="/settings">
          <DropdownMenuItem>
            <SettingsIcon className="w-4 h-4 mr-2" />
            Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button className="flex items-center gap-1" onClick={() => signOut({
            redirect: true,
            callbackUrl: "/"
          })}>
            <LogOutIcon className="w-4 h-4 mr-2" />
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
};

export default DropdownUser;
