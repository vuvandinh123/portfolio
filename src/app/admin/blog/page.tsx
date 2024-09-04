"use client";
import blogApiRequest from "@/apiRequest/blog";
import { columns } from "@/containers/admin/blog-page/columns";
import { DataTable } from "@/containers/admin/blog-page/data-table";
import { ListBlogType } from "@/types/blog";
import React from "react";
import { useQuery } from "@tanstack/react-query";
export default function BlogPageAdmin() {
  const [filters, setFilters] = React.useState({
    pagination: {
      page: 1,
      limit: 5,
      pageCount: 0,
    },
  });
  const fetchData = async (filters: any): Promise<ListBlogType[]> => {
    const { payload }: any = await blogApiRequest.getList({
      ...filters.pagination,
    });
    const data = payload.data as ListBlogType[];
    const options = payload.options;
    setFilters((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        pageCount: options.pageCount,
      },
    }));
    return data;
  };
  const { data, isLoading, error } = useQuery<ListBlogType[]>({
    queryKey: ["blogs", filters.pagination.page, filters.pagination.limit],
    queryFn: () => fetchData(filters),
  });
  return (
    <div>
      {isLoading ? (
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      ) : null}
      {!isLoading && !error && data ? (
        <DataTable columns={columns} data={data} setFilters={setFilters} pageCount={filters.pagination.pageCount} />
      ) : null}
    </div>
  );
}
