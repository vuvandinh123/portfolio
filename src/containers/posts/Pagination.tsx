import Link from "next/link";
import React from "react";

export default function Pagination({ posts, handleQueryChange }: any) {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex justify-center items-center space-x-4">
        <Link
          href={handleQueryChange(
            { page: (posts.page - 1).toString() },
            posts.page,
            posts.totalPage
          )}
          className="border rounded-md  px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
          passHref
        >
          &lt;
        </Link>
        <div className="text-slate-500">
          <span className="text-white font-bold">{posts.page}</span> /{" "}
          {posts.totalPage}
        </div>
        <Link
          href={handleQueryChange(
            { page: (posts.page + 1).toString() },
            posts.page,
            posts.totalPage
          )}
          className="border rounded-md  px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          &gt;
        </Link>
      </div>
    </div>
  );
}
