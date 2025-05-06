"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Heart, Star, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import HeartIcon from "./icons/HeartIcon";
import CommentIcon from "./icons/CommentIcon";
import IconButton from "./buttons/IconButton";

// Define the type for props
interface PostCardProps {
  email: string;
  title: string;
  body: string;
  createdAt: string;
  readTime: string;
  imageSrc: string;
}

export default function PostCard({
  email,
  title,
  body,
  createdAt,
  readTime,
  imageSrc,
}: PostCardProps) {
  return (
    <div className="w-full max-w-[35.5rem] flex gap-3 border-t border-[rgb(0,0,0,.1)] py-[1.5rem] cursor-pointer">
      <div className="flex-1 w-full max-w-[2.25rem] h-full bg-gray-100">
        <div className="w-[2.25rem] h-[2.25rem] bg-blue-500 rounded-full"></div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-[0.1875rem] h-full">
            <div className="w-full h-[1.25rem] flex gap-2 items-center">
              <div className="flex-1 gap-[0.375rem] leading-5 flex items-center">
                <span className="font-medium text-[0.9375rem] leading-5 cursor-pointer hover:underline">
                  <a>Dan Williams</a>
                </span>
                <div className="w-[0.75rem] h-[0.75rem] bg-gray-50"></div>
                <span className="h-full">
                  <a className="leading-none font-normal text-[0.8125rem] text-[rgb(119,119,119)] cursor-pointer hover:underline">
                    7d
                  </a>
                </span>
              </div>
              <button className="h-[1.75rem] px-[0.75rem] rounded-full text-[0.8125rem] font-semibold text-[rgb(255,103,25)] select-none hover:bg-[rgb(255,103,25,0.1)] transition duration-250">
                Follow
              </button>
              <div className="w-[1.25rem] h-[1.25rem] bg-gray-50"></div>
            </div>
            <div className="w-full h-full">
              <p className="text-[0.9375rem] leading-[1.3125rem] text-[rgb(54,55,55)]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          {false && <div />}
        </div>
        <div className="h-[2rem] flex justify-start gap-2">
          <IconButton
            icon={
              <HeartIcon className="w-5 h-5 stroke-[1.25] text-gray-400 group-hover:text-black transition-colors duration-200" />
            }
            label={"304"}
          />
          <IconButton
            icon={
              <CommentIcon className="w-5 h-5 stroke-[0.1] text-gray-400 group-hover:text-black transition-colors duration-200" />
            }
            label={"304"}
          />
        </div>
      </div>
    </div>
  );
}
