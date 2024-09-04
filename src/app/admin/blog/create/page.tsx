import FormBlog from "@/containers/admin/blog-page/form-blog";
import React from "react";

export default function BlogCreateAdmin() {
  return (
    <div>
      <h2 className="py-5 text-xl font-bold uppercase">Thêm bài viết</h2>
      <FormBlog></FormBlog>
    </div>
  );
}
