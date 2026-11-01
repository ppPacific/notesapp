"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
// import useQueryPostList from "@/hooks/use-query-post-list";
const posts = [
  {
    id: "1",
    title: "Post 1",
    content: "Content 1",
    createdAt: 0,
  },
];
const PostList = () => {
  // const { data, isLoading, error } = useQueryPostList();
  //const { posts = [], totalPages } = data || {};
  return (
    <div className="mt-8">
      {/*{isLoading && <div>Loading...</div>}*/}
      {/*{error && <div>Error: {error.message}</div>}*/}
      {/*{!isLoading && posts.length === 0 && <div>No posts</div>}*/}
      {/*{!isLoading &&*/}
      {/*  posts.map((post: Post) => (*/}
      {/*    <Link key={post.id} href={`/post/${post.id}`}>*/}
      {/*      <Post post={post} />*/}
      {/*    </Link>*/}
      {/*  ))}*/}
      {posts.length > 0 &&
        posts.map((post: Post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Post post={post} />
          </Link>
        ))}
      <div className="mt-8">{/*<Pagination totalPages={totalPages} />*/}</div>
    </div>
  );
};

export default PostList;
