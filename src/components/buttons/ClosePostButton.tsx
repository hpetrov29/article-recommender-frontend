"use client";

import { useRouter } from "next/navigation";

import CloseIcon from "../icons/CloseIcon";

const ClosePostButton = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <button
      onClick={handleClose}
      className="group flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-[0.5rem] bg-gray-200 transition duration-200 hover:bg-gray-300"
    >
      <CloseIcon className="h-[1rem] w-[1rem] fill-gray-600 stroke-gray-600 transition duration-200 group-hover:fill-gray-700 group-hover:stroke-gray-700" />
    </button>
  );
};

export default ClosePostButton;
