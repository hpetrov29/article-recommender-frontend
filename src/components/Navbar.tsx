import { headers } from "next/headers";

import LoginButton from "./buttons/LoginButton";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import UserIcon from "./icons/UserIcon";
import SettingsIcon from "./icons/SettingsIcon";
import { SearchBar } from "./SearchBar";
import { Flame } from "lucide-react";
import LogoutDialog from "./LogoutDialog";
import LogoutIcon from "./icons/LogoutIcon";

const menuItems = [
  { label: "Profile", icon: UserIcon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Logout", icon: LogoutIcon },
];

async function Navbar() {
  const headersList = await headers();
  const userHeader = headersList.get("X-User");
  const user = userHeader ? JSON.parse(userHeader) : null;
  return (
    <nav className="fixed left-[4.5rem] top-0 z-50 h-[4.5rem] w-[calc(100%-4.5rem)] border-b border-gray-200 bg-white p-2.5 text-black">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-2">
        <h1 className="text-xl">Home</h1>
        <div className="flex">
          <SearchBar />
        </div>
        <div>
          {user ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="focus:outline-none" asChild>
                <Avatar className="h-9 w-9 cursor-pointer border">
                  <AvatarImage
                    src="https://d2zp5xs5cp8zlg.cloudfront.net/image-85281-800.jpg"
                    alt="User Avatar"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="mt-2 w-40 rounded-lg bg-white shadow-lg"
              >
                {menuItems.map((menuItem, id) => {
                  return menuItem.label === "Logout" ? (
                    <LogoutDialog />
                  ) : (
                    <Link href={`/${menuItem.label.toLowerCase()}`}>
                      <DropdownMenuItem
                        className="group flex cursor-pointer px-3 py-2 hover:bg-gray-100"
                        key={id}
                      >
                        <menuItem.icon className="h-5 w-5 text-gray-500 transition-colors duration-500 group-hover:text-black" />

                        <span className="ml-2 whitespace-nowrap text-gray-700 transition-colors duration-500 group-hover:text-black">
                          {menuItem.label}
                        </span>
                      </DropdownMenuItem>
                    </Link>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <LoginButton />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
