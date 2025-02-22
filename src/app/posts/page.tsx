import PostCard from "@/components/PostCard";
import { headers } from "next/headers";

export default async function PostsPage() {
  // Fetch posts from the API and limit to 20
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: { id: number; title: string; body: string }[] =
    await response.json();
  const limitedPosts = posts.slice(0, 20);

  const headersList = await headers();
  const userHeader = headersList.get("X-User");
  const user = userHeader ? JSON.parse(userHeader) : null;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>
      <div className="flex flex-col items-center gap-4">
        {" "}
        {user && user.email}
        {limitedPosts.map((post) => (
          <div className="w-full max-w-lg" key={post.id}>
            {" "}
            <PostCard title={post.title} body={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
}
