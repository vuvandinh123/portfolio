import React from "react";
import FormBlog from "@/containers/admin/blog-page/form-blog";
import { redirect } from "next/navigation";

export default function page() {
  redirect('/admin/blog')
  return (
    <>
      <h2 className="py-5 text-xl font-bold uppercase">Thêm bài viết</h2>
      <FormBlog></FormBlog>
    </>
  );
}
