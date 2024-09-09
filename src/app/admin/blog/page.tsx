"use client";
import blogApiRequest from "@/apiRequest/blog";
import { columns } from "@/containers/admin/blog-page/columns";
import { DataTable } from "@/containers/admin/blog-page/data-table";
import { ListBlogType } from "@/types/blog";
import React from "react";
import { useQuery } from "@tanstack/react-query";
export default function BlogPageAdmin() {
  const fetchData = async (): Promise<ListBlogType[]> => {
    const { payload }: any = await blogApiRequest.getList();
    const data = payload.data as ListBlogType[];
    return data;
  };
  const { data, isLoading, error } = useQuery<ListBlogType[]>({
    queryKey: ["blogs"],
    queryFn: () => fetchData(),
  });
  return (
    <div>
      {isLoading ? (
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      ) : null}
      {!isLoading && !error && data ? (
        <DataTable columns={columns} data={data} />
      ) : null}
    </div>
  );
}
