"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Star, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

// Define the type for props
interface PostCardProps {
  email: string;
  title: string;
  body: string;
  createdAt: string;
  readTime: string;
  imageSrc: string;
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
  readTime,
  imageSrc,
}: PostCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10">{email[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{email}</span>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
          </div>
        </div>
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{"Science"}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <CardTitle className="text-xl font-bold hover:text-primary cursor-pointer">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">{body}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Member-only story
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
