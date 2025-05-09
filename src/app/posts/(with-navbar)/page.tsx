import PostCard from "@/components/PostCard";
import Comment from "@/components/CommentCard";
import PostComposer from "@/components/PostComposer";
import posts from "@/constants/posts";
import { withAuth } from "@/lib/WithAuth";

import Link from "next/link";

type Post = {
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  category: string;
  image: string;
};

const comments = [
  {
    id: "1",
    text: "Parent comment",
    children: [
      {
        id: "2",
        text: "Child comment 1",
        children: [
          {
            id: "3",
            text: "Grandchild 1 of child 1",
            children: [],
          },
          {
            id: "4",
            text: "Grandchild 2 of child 1",
            children: [
              {
                id: "5",
                text: "Great-grandchild of grandchild 2",
                children: [],
              },
              {
                id: "6",
                text: "Another great-grandchild of grandchild 2",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "7",
        text: "Child comment 2",
        children: [],
      },
      {
        id: "8",
        text: "Child comment 3",
        children: [
          {
            id: "9",
            text: "Grandchild 1 of child 3",
            children: [
              {
                id: "10",
                text: "Great-grandchild 1",
                children: [],
              },
              {
                id: "11",
                text: "Great-grandchild 2",
                children: [
                  {
                    id: "12",
                    text: "Great-great-grandchild",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: "13",
            text: "Grandchild 2 of child 3",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "14",
    text: "Second parent comment",
    children: [
      {
        id: "15",
        text: "Child 1 of second parent",
        children: [],
      },
      {
        id: "16",
        text: "Child 2 of second parent",
        children: [
          {
            id: "17",
            text: "Grandchild 1",
            children: [],
          },
          {
            id: "18",
            text: "Grandchild 2",
            children: [
              {
                id: "19",
                text: "Great-grandchild",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "20",
    text: "Third top-level comment",
    children: [],
  },
  {
    id: "21",
    text: "Fourth top-level comment",
    children: [
      {
        id: "22",
        text: "Child of fourth top-level",
        children: [],
      },
    ],
  },
  {
    id: "23",
    text: "Fifth top-level comment",
    children: [
      {
        id: "24",
        text: "Nested child 1",
        children: [
          {
            id: "25",
            text: "Nested grandchild",
            children: [
              {
                id: "26",
                text: "Deep branch node",
                children: [
                  {
                    id: "27",
                    text: "Deeper still",
                    children: [
                      {
                        id: "28",
                        text: "Even deeper",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "29",
        text: "Nested child 2",
        children: [],
      },
    ],
  },
  {
    id: "30",
    text: "Sixth top-level comment with no children",
    children: [],
  },
];

async function PostsPage() {
  //const response = await fetch("http://localhost:8000/v1/posts");
  //const res = await response.json();
  //const posts = res.payload as Post[];

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <PostComposer />
        {posts.map((post: Post) => (
          <div className="w-full max-w-xl" key={post.title}>
            <Link href="/posts/post/1">
              <PostCard />
            </Link>
          </div>
        ))}
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default withAuth(PostsPage);
