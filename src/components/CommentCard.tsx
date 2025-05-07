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
    <div className="w-full max-w-2xl relative" style={style}>
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
            <div className="flex flex-col gap-[0.1875rem] h-full">
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
                  className="w-fit inline-block text-sm text-gray-400 border border-gray-300 rounded-full px-2 py-1 hover:bg-[rgba(238,238,238,1)] hover:border-gray-500 hover:text-black transition-colors duration-300"
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
                <HeartIcon className="w-5 h-5 stroke-[1.25] text-gray-400 group-hover:text-black transition-colors duration-200" />
              }
              label={"304"}
            />
            <IconButton
              icon={
                <CommentIcon className="w-5 h-5 stroke-[0.1] text-gray-400 group-hover:text-black transition-colors duration-200" />
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
          className="absolute top-[3.75rem] h-[calc(100%-3.75rem)] w-[2.25rem] flex items-center justify-center group cursor-pointer"
          onClick={() => setShowChildren(!showChildren)}
        >
          <div className="w-px h-full bg-gray-300 group-hover:bg-gray-400 transition duration-300" />
        </div>
      )}
    </div>
  );
};

export default Comment;
