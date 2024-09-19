import blogApiRequest from "@/apiRequest/blog";
import FormBlog from "@/containers/admin/blog-page/form-blog";
import React from "react";

export default async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { payload }: any = await blogApiRequest.getOne(params.id);
  const data = payload.data;

  return (
    <div>
      <h2 className="py-5 text-xl font-bold uppercase">Sửa bài viết</h2>
      <FormBlog blog={data}></FormBlog>
    </div>
  );
}
