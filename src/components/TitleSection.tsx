import BlurFade from "@/components/magicui/blur-fade";
import React from "react";
const BLUR_FADE_DELAY = 0.04;
type Props = {
  label: string;
  title: string;
  description: string;
};
export default function TitleSection({ label, title, description }: Props) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 11}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            {label}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
            {description}
          </p>
        </div>
      </div>
    </BlurFade>
  );
}
