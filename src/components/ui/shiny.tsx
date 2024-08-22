import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Link from "next/link";

export function AnimatedShinyTextCV({ text }: { text: string }) {
  return (
    <div
      className={cn(
        "group w-max relative z-10 rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      )}
    >
      <Link target="_blank" href="https://www.canva.com/design/DAF54BDeb4s/K8V0wfZJifhDokhFX8SuxQ/view?utm_content=DAF54BDeb4s&utm_campaign=designshare&utm_medium=link&utm_source=editor">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ {text}</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </Link>
    </div>
  );
}
