import BlurFade from "@/components/magicui/blur-fade";
import ListBlog from "@/containers/site/blogs/ListBlog";
import ListNote from "@/containers/site/note/ListNote";

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

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Ghi chú</h1>
      </BlurFade>
      <ListNote />
    </section>
  );
}
