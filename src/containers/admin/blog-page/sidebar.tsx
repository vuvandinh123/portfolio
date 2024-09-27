import NavLink from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              href="/admin/blog"
              classActive="bg-muted"
              className="rounded-lg p-2  block"
            >
              <span>
                <SquareTerminal className="size-5" />
              </span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Bài viết
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              aria-label="Documentation"
              href="/admin/note"
              classActive="bg-muted"
              className="rounded-lg p-2"
            >
              <Book className="size-5" />
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Note
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Settings"
            >
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
