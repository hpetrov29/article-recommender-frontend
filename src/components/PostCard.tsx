"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

// Define the type for props
interface PostCardProps {
  email: string;
  title: string;
  body: string;
  createdAt: string;
}

const timeAgo = (timeStr: string): string => {
  const [datePart, timePart] = timeStr.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute, second] = timePart
    .replace("Z", "")
    .split(":")
    .map(Number);

  const timeObj = Date.UTC(year, month - 1, day, hour, minute, second);
  const now = Date.now();
  const diff = (now - timeObj) / 1000; // Difference in seconds

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 172800) return "1 day ago";

  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
};

const truncateText = (input: string): string => {
  const words = input.split(" ");
  let truncated = "";

  for (const word of words) {
    const testString = truncated ? `${truncated} ${word}` : word;

    if (testString.length > 140 - word.length) {
      return truncated ? `${truncated}...` : truncated;
    }

    truncated = testString;
  }

  return truncated;
};

export default function PostCard({
  email,
  title,
  body,
  createdAt,
}: PostCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Card className="cursor-pointer pb-0 shadow-md border-0 rounded-xl hover:shadow-lg overflow-hidden transition-shadow duration-300 bg-white">
      <CardHeader className="flex flex-row justify-between p-5 pb-4 space-y-0">
        <div className="flex flex-row">
          <Avatar className="w-9 h-9 cursor-pointer border select-none">
            <AvatarImage
              src="https://d2zp5xs5cp8zlg.cloudfront.net/image-85281-800.jpg"
              alt="User Avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <p className="cursor-pointer hover:underline content-center font-medium text-base ml-2">
            {email}
          </p>
        </div>
        <div className="content-center">
          <span className="text-sm text-gray-500">{timeAgo(createdAt)}</span>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="flex flex-row justify-between">
          <div className="w-[32rem]">
            <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </CardTitle>
            <p className="max-h-[3rem] line-clamp-2 overflow-hidden whitespace-normal text-gray-700">
              {truncateText(body)}
            </p>
          </div>
          <div className="w-[10rem]">
            <Image
              src={
                "https://t4.ftcdn.net/jpg/07/18/12/87/360_F_718128776_nJReWqPkf5qF4Y5na8ZqGWAbdCJTpczZ.jpg"
              }
              alt={"parrot"}
              width={160}
              height={106.66}
              className="rounded-sm"
            />
          </div>
        </div>
        <Button className="mt-4 " onClick={() => setClicked((prev) => !prev)}>
          {clicked ? "Clicked!" : "Read"}
        </Button>
      </CardContent>
    </Card>
  );
}
