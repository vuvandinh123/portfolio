"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as NextLink, Star } from "lucide-react";
import Link from "next/link";
import http from "@/lib/http";
export const ReviewCard = ({
  name,
  id,
  description,
  url,
  created_at,
  language,
  avatar,
  username,
  start,
  forks,
  className,
}: {
  name: string;
  username: string;
  body: string;
  id: string;
  description: string;
  url: string;
  created_at: string;
  language: string;
  avatar: string;
  start: number;
  forks: number;
  className?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        // className
        className
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={avatar}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            <Link
              href={url}
              className="hover:underline flex gap-2 items-center"
              target="_blank"
            >
              <NextLink size={10}></NextLink> {name}
            </Link>
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">@{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm min-h-[4rem] text_ecl-2">
        {description}
      </blockquote>
      <div>
        <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
          <div className="flex flex-grow">
            <span className="mr-3 flex items-center">
              <Star size={15} className="mr-2" />
              <span>{start}</span>
            </span>
            <span className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className="mr-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z" />
              </svg>
              <span>{forks}</span>
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-1 opacity-60"
                style={{ backgroundColor: "rgb(241, 224, 90)" }}
              />
              <span>{language}</span>
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
};
interface RepoType {
  id: number;
  name: string;
  description: string;
  url: string;
  created_at: string;
  language: string;
  avatar: string;
  username: string;
  start: number;
  forks: number;
}
export function MarqueeGithub() {
  const [repos, setRepos] = useState([] as Array<any>);
  useEffect(() => {
    (async () => {
      try {
        const { payload }: any = await http.get(
          "https://api.github.com/users/vuvandinh123/repos"
        );
        const newData = payload.map((repo: any) => ({
          name: repo.name,
          id: repo.id,
          description: repo.description,
          url: repo.html_url,
          created_at: repo.created_at,
          language: repo.language,
          start: repo.stargazers_count,
          avatar: repo.owner.avatar_url,
          username: repo.owner.login,
          forks: repo.forks_count,
        }));
        setRepos(newData);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:100s]">
        {repos?.map((repo: any) => (
          <ReviewCard key={repo.id} {...repo} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:130s]">
        {repos?.map((repo) => (
          <ReviewCard key={repo.id} {...repo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
