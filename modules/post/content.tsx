"use client";

import Post from "@/components/post";
import { useParams, useRouter } from "next/navigation";
//import useQueryPost from "@/hooks/use-query-post";

const mockPost: Post = {
  id: "1",
  title: "Post 1",
  content: "Content 1",
  createdAt: 0,
};

const Content = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      {/*<Post post={data} />*/}
    </div>
  );
};

export default Content;
