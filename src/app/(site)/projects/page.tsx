import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import TitleSection from "@/components/TitleSection";
import { ReviewCard } from "@/components/ui/marquee";
import GithubProject from "@/containers/projects/GithubProject";
import { DATA } from "@/data/resume";
import React from "react";
const BLUR_FADE_DELAY = 0.04;
export default function page() {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <TitleSection
          label="Dự án của tôi"
          title="Xem các dự án mới nhất của tôi"
          description="Tôi đã làm việc trên nhiều dự án khác nhau, từ các trang web đơn
                giản đến các ứng dụng web phức tạp. Dưới đây là một vài trong số
                yêu thích của tôi."
        ></TitleSection>
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
        <TitleSection
          label="Github Projects"
          title="Các dự án mã nguồn mở của tôi"
          description="Tôi đã xây dựng hơn 30 repository public trên github"
        ></TitleSection>
        <GithubProject />
      </div>
    </section>
  );
}
