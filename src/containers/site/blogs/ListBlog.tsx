"use client";
import blogApiRequest from "@/apiRequest/blog";
import BlurFade from "@/components/magicui/blur-fade";
import { formatDate } from "@/lib/utils";
import { ListBlogType } from "@/types/blog";
import Link from "next/link";
import React, { useEffect } from "react";
const BLUR_FADE_DELAY = 0.04;
export default function ListBlog() {
  const [data, setData] = React.useState<ListBlogType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [pagination, setPagination] = React.useState({
    page: 1,
    limit: 10,
    pageCount: 1,
    total: 0,
  });
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { payload, status }: any = await blogApiRequest.getList({
          limit: pagination.limit,
          page: pagination.page,
        });
        if (status !== 200) {
          setError(payload.message);
          return;
        }
        setPagination({ ...payload.options });
        setData(payload.data as ListBlogType[]);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, [pagination.page]);
  const handlePageChange = (page: number) => {
    if (
      pagination.page + page < 1 ||
      pagination.page + page > pagination.pageCount
    )
      return;
    setPagination({ ...pagination, page: pagination.page + page });
  };
  return (
    <div>
      {!loading &&
        data?.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post?._id}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post?._id}`}
            >
              <div className="w-full flex flex-col">
                <h2 className="tracking-tight hover:underline text-md">
                  {post.title}
                </h2>
                <p className="h-6 text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </p>
                <p className="text-xs text_ecl-2 text-gray-400 text_ecl-2">
                  {post.description}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      {!loading && data?.length === 0 && (
        <div className="text-center text-gray-400">No posts found</div>
      )}
      {
        <div className="text-center text-gray-400">
          {error ? error : ""}
        </div>
      }
      {!loading && pagination.pageCount > 1 && (
        <div className="flex items-center justify-center ">
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(-1)}
              className="border rounded-md  px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
            >
              &lt;
            </button>
            <div className="text-slate-500">
              {pagination.page} / {pagination.pageCount}
            </div>
            <button
              onClick={() => handlePageChange(1)}
              className="border rounded-md  px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
