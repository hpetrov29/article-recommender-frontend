"use client";

import React from "react";
import { Card } from "./Card";
import IconButton from "./buttons/IconButton";
import CommentIcon from "./icons/CommentIcon";
import HeartIcon from "./icons/HeartIcon";

interface CommentProps {
  comment: {
    id: string;
    text: string;
    children?: CommentProps["comment"][];
  };
  style?: React.CSSProperties;
}

const Comment: React.FC<CommentProps> = ({ comment, style }) => {
  const [showChildren, setShowChildren] = React.useState(true);
  return (
    <div className="relative w-full max-w-2xl" style={style}>
      <Card
        type="comment"
        style={{
          border: "none",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
        }}
      >
        <Card.Avatar />
        <Card.Content>
          <div className="flex flex-col gap-3">
            <div className="flex h-full flex-col gap-[0.1875rem]">
              <Card.Header author="Dan Williams" time="7d" />
              {showChildren ? (
                <Card.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Card.Body>
              ) : (
                <button
                  className="inline-block w-fit rounded-full border border-gray-300 px-2 py-1 text-sm text-gray-400 transition-colors duration-300 hover:border-gray-500 hover:bg-[rgba(238,238,238,1)] hover:text-black"
                  onClick={() => setShowChildren(!showChildren)}
                >
                  Show replies
                </button>
              )}
            </div>
          </div>
          <Card.Actions>
            <IconButton
              icon={
                <HeartIcon className="h-5 w-5 stroke-[1.25] text-gray-400 transition-colors duration-200 group-hover:text-black" />
              }
              label={"304"}
            />
            <IconButton
              icon={
                <CommentIcon className="h-5 w-5 stroke-[0.1] text-gray-400 transition-colors duration-200 group-hover:text-black" />
              }
              label={"Reply"}
            />
          </Card.Actions>
        </Card.Content>
      </Card>
      {comment.children?.map((child) => (
        <Comment
          key={child.id}
          comment={child}
          style={{
            paddingLeft: "2.25rem",
            display: showChildren ? "block" : "none",
          }}
        />
      ))}
      {comment.children && comment.children.length > 0 && showChildren && (
        <div
          className="group absolute top-[3.75rem] flex h-[calc(100%-3.75rem)] w-[2.25rem] cursor-pointer items-center justify-center"
          onClick={() => setShowChildren(!showChildren)}
        >
          <div className="h-full w-px bg-gray-300 transition duration-300 group-hover:bg-gray-400" />
        </div>
      )}
    </div>
  );
};

export default Comment;
