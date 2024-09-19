"use client";
import blogApiRequest from "@/apiRequest/blog";
import { DataTable } from "@/containers/admin/blog-page/data-table";
import { ListBlogType } from "@/types/blog";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { columnsTable } from "@/containers/admin/blog-page/columns";
import { toast } from "@/components/ui/use-toast";
import Loading from "@/components/Loading";
export default function BlogPageAdmin() {
  const fetchData = async (): Promise<ListBlogType[]> => {
    const { payload }: any = await blogApiRequest.getList();
    const data = payload.data as ListBlogType[];
    return data;
  };
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<ListBlogType[]>({
    queryKey: ["blogs"],
    queryFn: () => fetchData(),
  });
  const handleDelete = async (id: string) => {
    try {
      const { payload }: any = await blogApiRequest.delete(id);
      if (payload.status === 200) {
        queryClient.invalidateQueries("blogs" as any);
        toast({
          title: "Success",
          description: payload.message || "Delete blog success",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  };
  const columns = columnsTable(handleDelete);
  return (
    <div>
      {isLoading ? <Loading></Loading> : null}
      {!isLoading && !error && data ? (
        <DataTable columns={columns} data={data} />
      ) : null}
    </div>
  );
}
