import Article from "@/components/Article";
import ClosePostButton from "@/components/buttons/ClosePostButton";
import article from "@/constants/article";

const Post = () => {
  return (
    <div className="bg-[rgb(249, 250, 251)] flex h-full w-full items-center justify-center p-4 text-2xl font-bold text-slate-500">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-white px-4 shadow-md">
        <div className="flex h-[4.5rem] w-full items-center border-b py-4">
          <ClosePostButton />
        </div>
        <div className="flex h-full w-full flex-col overflow-auto scrollbar-thin scrollbar-webkit">
          <Article body={article.body} />
        </div>
      </div>
    </div>
  );
};

export default Post;
