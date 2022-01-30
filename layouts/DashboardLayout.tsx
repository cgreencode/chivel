import Link from "next/link";
import { BiCode, BiNavigation } from "react-icons/bi";
import { FiSettings, FiInbox } from "react-icons/fi";
import { VscGraphLine } from "react-icons/vsc";
import clsx from "clsx";

const DashboardLayout: React.FC<{
  heading: string;
  description: string;
  page: "setup" | "analytics" | "navbar" | "settings" | "snippet";
}> = ({ page, heading, description, ...props }) => {
  return (
    <div className="flex text-white bg-black">
      <div className="w-1/5 h-screen px-8 pt-24 border-r border-gray-800">
        <div className="space-y-4">
          <Link href="/dashboard">
            <a
              className={clsx(
                "block w-full px-4 py-2 text-gray-300 rounded hover:bg-gray-900 hover:text-gray-50",
                page === "setup" && "bg-gray-900 text-gray-50"
              )}>
              <FiInbox className="relative inline-block mr-3 bottom-px" />
              Setup
            </a>
          </Link>
          <Link href="/dashboard/snippet">
            <a
              className={clsx(
                "block w-full px-4 py-2 text-gray-300 rounded hover:bg-gray-900 hover:text-gray-50",
                page === "snippet" && "bg-gray-900 text-gray-50"
              )}>
              <BiCode className="relative inline-block mr-3 bottom-px" />
              Snippet Injection
            </a>
          </Link>
          <Link href="/dashboard/reviews">
            <a
              className={clsx(
                "block w-full px-4 py-2 text-gray-300 rounded hover:bg-gray-900 hover:text-gray-50",
                page === "navbar" && "bg-gray-900 text-gray-50"
              )}>
              <BiNavigation className="relative inline-block mr-3 bottom-px" />
              Navbar
            </a>
          </Link>
          <Link href="/dashboard/analytics">
            <a
              className={clsx(
                "block w-full px-4 py-2 text-gray-300 rounded hover:bg-gray-900 hover:text-gray-50",
                page === "analytics" && "bg-gray-900 text-gray-50"
              )}>
              <VscGraphLine className="relative inline-block mr-3 bottom-px" />
              Analytics
            </a>
          </Link>
          <Link href="/dashboard/settings">
            <a
              className={clsx(
                "block w-full px-4 py-2 text-gray-300 rounded hover:bg-gray-900 hover:text-gray-50",
                page === "settings" && "bg-gray-900 text-gray-50"
              )}>
              <FiSettings className="relative inline-block mr-3 bottom-px" />
              Settings
            </a>
          </Link>
        </div>
      </div>
      <div className="pt-24 pl-20">
        <h1 className="text-4xl font-extrabold font-cal">{heading}</h1>
        <p className="mt-5 text-gray-300 mb-14">{description}</p>
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
