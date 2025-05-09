import PostCard from "@/components/PostCard";
import Comment from "@/components/CommentCard";
import PostComposer from "@/components/PostComposer";
import posts from "@/constants/posts";
import comments from "@/constants/comments";
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

type Comment = {
  id: string;
  text: string;
  children: Comment[];
};

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
        {comments.map((comment: Comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default withAuth(PostsPage);
