"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Define the type for props
interface PostCardProps {
  title: string;
  body: string;
  createdAt: string;
}

export default function PostCard({ title, body, createdAt }: PostCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Card className="shadow-lg border rounded-xl p-5 hover:shadow-xl transition-shadow duration-300 bg-white">
      <CardHeader className="flex justify-between items-start">
        <div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {title}
          </CardTitle>
        </div>
        <span className="text-sm text-gray-500">{createdAt}</span>
      </CardHeader>
      <CardContent className="mt-2">
        <p className="text-gray-700">{body}</p>
        <Button
          className="mt-4 "
          onClick={() => setClicked((prev) => !prev)}
        >
          {clicked ? "Clicked!" : "Click Me"}
        </Button>
      </CardContent>
    </Card>
  );
}
