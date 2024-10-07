"use client";
import { MDXRemote } from "next-mdx-remote";
import React from "react";

export default function ContentPost({ source }: any) {
  return <div>{source && <MDXRemote {...source} />}</div>;
}
