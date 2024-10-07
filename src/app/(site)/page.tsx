"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Particles from "@/components/magicui/particles";
import SparklesText from "@/components/magicui/sparkles-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MarqueeGithub } from "@/components/ui/marquee";
import { AnimatedShinyTextCV } from "@/components/ui/shiny";
import { DATA } from "@/data/resume";
import { ArrowRightIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <main className="flex flex-col  min-h-[100dvh] space-y-10">
      <div className="w-full overflow-hidden h-screen fixed left-0 right-0">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <AnimatedShinyTextCV text="Xem thêm về tôi với CV"></AnimatedShinyTextCV>
          </BlurFade>
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <SparklesText className="text-[35px] sm:text-[40px]" text="Xin chào, Tôi là Định 👋" />
              </BlurFade>
              <BlurFadeText
                className="max-w-[600px] text-justify sm:text-start mt-2 md:text-md"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade className="after:bg-gray-300 after:sm:hidden after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[50%] after:z-[-1] z-10 after:w-[2px] after:h-1/2 relative after:rounded-full" delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name}   src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl capitalize mb-2 font-bold">
            Tóm Tắt Bản Thân
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-justify text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl mb-2 capitalize font-bold">Kỹ năng</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold capitalize mb-2">
              Kinh nghiệm làm việc
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold capitalize mb-2">Giáo dục</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                description={education.description}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Dự án của tôi
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Xem các dự án mới nhất của tôi
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                  Tôi đã làm việc trên nhiều dự án khác nhau, từ các trang web
                  đơn giản đến các ứng dụng web phức tạp. Dưới đây là một vài
                  trong số yêu thích của tôi.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
     
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Github Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Các dự án mã nguồn mở của tôi
                </h2>
                <p className="text-muted-foreground md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                  Tôi đã xây dựng hơn 30 repository public trên github
                </p>
              </div>
            </div>
          </BlurFade>
          <div className=" max-w-[800px] mx-auto">
            <MarqueeGithub></MarqueeGithub>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="capitalize inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Liên hệ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Nhắn Tin Với Tôi
              </h2>
              <p className="text-center text-sm text-gray-600">
                Nếu bạn có bất kỳ câu hỏi nào hoặc muốn trao đổi về cơ hội hợp
                tác, vui lòng liên hệ với tôi qua các kênh sau:
              </p>
              <div className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <Markdown className="text-pretty text-center leading-7 font-sans text-sm  dark:prose-invert">
                  {DATA.contact.text}
                </Markdown>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
