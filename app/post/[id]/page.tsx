"use client";
import Layout from "@/components/layout";
import Content from "@/modules/post/content";
import { useParams } from "next/navigation";

const Post = () => {
  const { id } = useParams();

  return (
    <Layout>
      page of id {id}
      <Content />
    </Layout>
  );
};

export default Post;
