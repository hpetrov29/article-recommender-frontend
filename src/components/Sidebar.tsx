import BellIcon from "./icons/BellIcon";
import HomeSmileIcon from "./icons/HomeSmileIcon";
import PlusIcon from "./icons/PlusIcon";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-[4.5rem] flex h-[calc(100%-4.5rem)] w-[4.5rem] flex-col border-r border-gray-200 bg-white">
      <div className="flex grow flex-col items-center justify-center gap-2">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link href="/posts">
                <button className="group flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-[0.75rem] transition duration-200 hover:bg-slate-100">
                  <HomeSmileIcon className="h-[2rem] w-[2rem] fill-slate-400 transition duration-200 group-hover:fill-blue-500" />
                </button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={8} className="max-w-xs">
              {"Home"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link href="/user">
                <button className="group flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-[0.75rem] transition duration-200 hover:bg-slate-100">
                  <BellIcon className="h-[2rem] w-[2rem] fill-slate-400 stroke-slate-400 transition duration-200 group-hover:fill-blue-500 group-hover:stroke-blue-500" />
                </button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={8} className="max-w-xs">
              {"Activity"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link href="/write">
                <button className="my-[0.5rem] flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-[0.75rem] bg-slate-400 transition duration-200 hover:bg-blue-500">
                  <PlusIcon className="h-[1.375rem] w-[1.375rem] fill-white stroke-white stroke-[3]" />
                </button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={14} className="max-w-xs">
              {"New Post"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="h-[4.5rem] w-[4.5rem] bg-slate-300"></div>
    </div>
  );
};

export default Sidebar;
