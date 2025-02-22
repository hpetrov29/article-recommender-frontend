"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Define the type for props
interface PostCardProps {
  title: string;
  body: string;
}

export default function PostCard({ title, body }: PostCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Card className="shadow-lg border rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
      {" "}
      {/* Add border, padding, and hover effect */}
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{body}</p>
        <Button className="mt-4" onClick={() => setClicked((prev) => !prev)}>
          {clicked ? "Clicked!" : "Click Me"}
        </Button>
      </CardContent>
    </Card>
  );
}
