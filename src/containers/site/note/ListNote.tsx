"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { formatDate } from "@/lib/utils";
import { ListNoteType } from "@/types/note";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import React, { useEffect } from "react";
const BLUR_FADE_DELAY = 0.04;

export default function ListNote({ source }: { source: any }) {
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  );
}
