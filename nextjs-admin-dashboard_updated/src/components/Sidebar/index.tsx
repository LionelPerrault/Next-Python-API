import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import SidebarRoute from "./SidebarRoute";
import { CreditCard } from "lucide-react";

const Sidebar = async () => {
  const session = await getServerSession(authOptions)

  const siderBarRoutes = session?.user.role !== "super-admin" ?
    [
      {
        name: "chat",
        icon: <BsChatLeft size={'1.3em'} />,
        path: "/chat",
      }
    ]
    :
      [
        {
          name: "dashboard",
          icon: <BiHomeAlt size={'1.5em'} />,
          path: "/dashboard",
        },
        {
          name: "profile",
          icon: <BiUser size={'1.5em'} />,
          path: "/users",
        },
        {
          name:"transactions",
          icon: <CreditCard size={'1.5em'} />,
          path: "/transactions",
        },
        {
          name: "chat",
          icon: <BsChatLeft size={'1.3em'} />,
          path: "/chat",
        },
      ]

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen flex-col overflow-y-hidden bg-black dark:bg-boxdark`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto ">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-4 py-4 lg:mt-7">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="flex flex-col gap-1.5 text-white">
              <li className="mb-4">
                <Link
                  href="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark`}
                >
                  <RxDashboard style={{ transform: 'rotate(45deg)' }} size={'1.5em'} />
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}
              {siderBarRoutes.map((route, index) => (
                <li key={index}>
                  <SidebarRoute route={route} />
                </li>
              ))}
              {/* <!-- Menu Item Chat --> */}
            </ul>
          </div>
          <div className="absolute bottom-0 pb-5">
            {/* <!-- Menu Item Settings --> */}
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <SidebarRoute
                  route={{
                    name: "settings",
                    icon: <FiSettings size={'1.5em'} />,
                    path: "/settings",
                  }}
                />
              </li>
            </ul>
            {/* <!-- Menu Item Settings --> */}
          </div>


        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
