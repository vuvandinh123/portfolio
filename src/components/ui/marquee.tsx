import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as NextLink } from "lucide-react";
import Link from "next/link";
import http from "@/lib/http";
// import Link from "next/link";
// import Link from ""
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  id,
  description,
  url,
  created_at,
  language,
  avatar,
  username,
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
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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
      <blockquote className="mt-2 text-sm">{description}</blockquote>
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
          avatar: repo.owner.avatar_url,
          username: repo.owner.login,
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
