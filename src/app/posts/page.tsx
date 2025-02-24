import PostCard from "@/components/PostCard";
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
  const response = await fetch("http://localhost:8000/v1/posts");
  const res = await response.json();
  const posts = res.payload as Post[];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>
      <div className="flex flex-col items-center gap-4">
        {" "}
        {user && user.email}
        {posts.map((post: Post) => (
          <div className="w-full max-w-3xl" key={post.id}>
            <PostCard
              email={"awesomeuser"}
              title={post.title}
              body={post.description}
              createdAt={post.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(PostsPage);
