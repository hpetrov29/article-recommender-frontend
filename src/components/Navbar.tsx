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
    <nav className="p-2.5 bg-white shadow-sm border-b border-gray-200 text-black fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center mx-auto max-w-screen-2xl w-full px-2">
        <h1 className="text-xl">My App</h1>
        <div className="flex">
          <SearchBar />
          <Button variant="ghost" size="sm" className="gap-2 hidden md:flex">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="hidden sm:inline">Trending</span>
          </Button>
        </div>
        <div>
          {user ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="focus:outline-none" asChild>
                <Avatar className="w-9 h-9 cursor-pointer border">
                  <AvatarImage
                    src="https://d2zp5xs5cp8zlg.cloudfront.net/image-85281-800.jpg"
                    alt="User Avatar"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 mt-2 bg-white shadow-lg rounded-lg"
              >
                {menuItems.map((menuItem, id) => {
                  return menuItem.label === "Logout" ? (
                    <LogoutDialog />
                  ) : (
                    <Link href={`/${menuItem.label.toLowerCase()}`}>
                      <DropdownMenuItem
                        className="flex cursor-pointer hover:bg-gray-100 px-3 py-2 group"
                        key={id}
                      >
                        <menuItem.icon className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors duration-500 " />

                        <span className="text-gray-700 whitespace-nowrap ml-2 group-hover:text-black transition-colors duration-500">
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
