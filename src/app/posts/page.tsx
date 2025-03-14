import PostCard from "@/components/PostCard";
import PostComposer from "@/components/PostComposer";
import { QuickTemplates } from "@/components/QuickTemplates";
import posts from "@/constants/posts";
import { withAuth, WithAuthProps } from "@/lib/WithAuth";

type Post = {
  id: string;
  userId: string;
  title: string;
  description: string;
  frontImage: string;
  createdAt: string;
};

async function PostsPage({ user }: WithAuthProps) {
  //const response = await fetch("http://localhost:8000/v1/posts");
  //const res = await response.json();
  //const posts = res.payload as Post[];

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center gap-4">
        <PostComposer />
        <QuickTemplates />
        {posts.map((post: any) => (
          <div className="w-full max-w-xl" key={post.title}>
            <PostCard
              email={post.author}
              title={post.title}
              body={post.description}
              createdAt={post.date}
              readTime={post.readTime}
              imageSrc={post.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(PostsPage);
