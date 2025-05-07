"use client";

import HeartIcon from "./icons/HeartIcon";
import IconButton from "./buttons/IconButton";
import CommentIcon from "./icons/CommentIcon";
import { Card } from "./Card";

const PostCard = () => {
  return (
    <div className="w-full max-w-[35.5rem]">
      <Card type="post">
        <Card.Avatar />
        <Card.Content>
          <div className="flex flex-col gap-3">
            <div className="flex h-full flex-col gap-[0.1875rem]">
              <Card.Header author="Dan Williams" time="7d" />
              <Card.Body>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Card.Body>
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
              label={"304"}
            />
          </Card.Actions>
        </Card.Content>
      </Card>
    </div>
  );
};

export default PostCard;
