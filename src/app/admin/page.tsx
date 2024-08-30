import Sidebar from "@/containers/admin/blog-page/sidebar";
import HeaderAdmin from "@/containers/admin/header";
import React from "react";
import FormBlog from "@/containers/admin/blog-page/form-blog";

export default function Dashboard() {
  return (
    <div className="grid h-screen w-full pl-[53px]">
      <Sidebar></Sidebar>
      <div className="flex flex-col ">
        <HeaderAdmin></HeaderAdmin>
        <main className="px-5">
          <h2 className="py-5 text-xl font-bold uppercase">Thêm bài viết</h2>
          <FormBlog></FormBlog>
        </main>
      </div>
    </div>
  );
}
