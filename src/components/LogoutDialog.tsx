"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import LogoutIcon from "./icons/LogoutIcon";

export default function LogoutDialog() {
  const [showDialog, setShowDialog] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
    window.location.href = "/login"; // Forces a full reload
  };

  return (
    <>
      <DropdownMenuItem
        onSelect={(e) => {
          e.preventDefault(); // Prevent dropdown from closing
          setShowDialog(true);
        }}
        className="flex cursor-pointer hover:bg-gray-100 px-3 py-2 group"
        key={"logout"}
      >
        <LogoutIcon className="w-5 h-5 text-red-400 group-hover:text-red-500 transition-colors duration-500 " />

        <span className="text-red-400 whitespace-nowrap ml-2 group-hover:text-red-500 transition-colors duration-500">
          {"Logout"}
        </span>
      </DropdownMenuItem>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent aria-label="Custom Dialog">
          <DialogHeader style={{ position: "absolute", left: "-9999px" }}>
            <DialogTitle>New family</DialogTitle>
            <DialogDescription>Add a new family</DialogDescription>
          </DialogHeader>
          <h2 className="text-lg font-semibold">
            Are you sure you want to log out?
          </h2>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
