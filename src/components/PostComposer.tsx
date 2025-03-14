"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Image, Video, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

const PostComposer = () => {
  const [postContent, setPostContent] = useState("");

  const handlePostContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostContent(e.target.value);
  };

  const handleSaveClick = () => {};

  return (
    <Card className="w-full max-w-xl mx-auto bg-white rounded-lg p-4 border-none shadow-lg">
      <div className="flex gap-3 mb-1">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://d2zp5xs5cp8zlg.cloudfront.net/image-85281-800.jpg"
            alt="Profile"
          />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <div className="w-full flex flex-col justify-between items-center px-3">
          <Textarea
            placeholder="What's on your mind?"
            className="px-0 resize-none min-h-[60px] focus-visible:ring-0 border-0 shadow-none text-lg placeholder:text-gray-400"
            value={postContent}
            onChange={handlePostContentChange}
          />
          <Separator className="my-4" />
          <div className="w-full flex justify-between">
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-gray-600"
              >
                <Image className="!w-5 !h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-gray-600"
              >
                <Video className="!w-5 !h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-gray-600"
              >
                <MoreHorizontal className="!w-5 !h-5" />
              </Button>
            </div>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                className="text-gray-600"
                disabled={!postContent}
                onClick={handleSaveClick}
              >
                Save Draft
              </Button>
              <Button
                className={cn(
                  "rounded-full px-8 font-medium",
                  !postContent ? "bg-gray-900/80" : "bg-gray-900"
                )}
                disabled={!postContent}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostComposer;
