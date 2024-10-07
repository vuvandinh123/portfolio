import BlurFade from "@/components/magicui/blur-fade";
import TitleSection from "@/components/TitleSection";
import { getOnePost } from "@/data/blog";
import dynamic from "next/dynamic";

const ContentPost = dynamic(() => import("@/containers/posts/ContentPost"), {
  ssr: false, // Disable SSR for this component
});
const BLUR_FADE_DELAY = 0.04;
export const metadata = {
  title: "Ghi chú - Vũ Văn Định",
  description:
    "Những suy nghĩ của tôi về phát triển phần mềm, cuộc sống, và nhiều hơn thế nữa.",
  keywords: "phát triển phần mềm, lập trình, cuộc sống, blog, Vũ Văn Định",
  openGraph: {
    title: "Ghi chú - Vũ Văn Định",
    description:
      "Khám phá những bài viết về phát triển phần mềm và cuộc sống từ Vũ Văn Định.",
    url: "https://vuvandinh.id.vn/note",
    siteName: "Vũ Văn Định Blog",
    images: [
      {
        url: "https://codecungtui.github.io/images/tao-blog-don-gian-voi-hugo-va-github/cover.jpg",
        width: 800,
        height: 600,
        alt: "Preview Blog Image",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Ghi chú - Vũ Văn Định",
    description: "Những suy nghĩ của tôi về phát triển phần mềm và cuộc sống.",
    image:
      "https://codecungtui.github.io/images/tao-blog-don-gian-voi-hugo-va-github/cover.jpg",
  },
};
export default async function page() {
  const data = await getOnePost("notes", "", "notes");
  return (
    <section>
      <TitleSection
        label="Ghi chú"
        title="Tôi thích học"
        description="Tôi thích học những thứ mới và ghi chú lại những thứ mình đã học và đang học để phát triển bản thân."
      ></TitleSection>
      <BlurFade
        delay={BLUR_FADE_DELAY * 20}
        className="prose dark:prose-invert pb-10"
      >
        <article className="prose dark:prose-invert pb-10">
          {data?.source && <ContentPost source={data?.source}></ContentPost>}
        </article>
      </BlurFade>
    </section>
  );
}
