import BlurFade from "@/components/magicui/blur-fade";
import TitleSection from "@/components/TitleSection";
import { Badge } from "@/components/ui/badge";
import CardPost from "@/containers/posts/CardPost";
import Pagination from "@/containers/posts/Pagination";
import { getAllCategories, getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Bài viết - Vũ Văn Định",
  description:
    "Những suy nghĩ của tôi về phát triển phần mềm, cuộc sống, và nhiều hơn thế nữa.",
  keywords: "phát triển phần mềm, lập trình, cuộc sống, blog, Vũ Văn Định",
  openGraph: {
    title: "Bài viết - Vũ Văn Định",
    description:
      "Khám phá những bài viết về phát triển phần mềm và cuộc sống từ Vũ Văn Định.",
    url: "https://vuvandinh.id.vn/blog",
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
    title: "Bài viết - Vũ Văn Định",
    description: "Những suy nghĩ của tôi về phát triển phần mềm và cuộc sống.",
    image:
      "https://codecungtui.github.io/images/tao-blog-don-gian-voi-hugo-va-github/cover.jpg",
  },
};

const BLUR_FADE_DELAY = 0.04;

interface BlogPageProps {
  searchParams: {
    page?: string;
    cat?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = parseInt(searchParams.page as string) || 1;
  const cate = (searchParams?.cat as string) || "";
  const categories = getAllCategories();
  const handleQueryChange = (
    newParams: Record<string, string>,
    page: string,
    totalPage: string
  ) => {
    const params = new URLSearchParams(searchParams as Record<string, string>);
    if (Number(newParams?.page) > Number(totalPage) || page == "0") {
      return `/blog?${params.toString()}`;
    }
    // Cập nhật các tham số query
    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value);
    });
    if (newParams.cat === "") {
      params.delete("cat");
    }
    if (newParams.page === "" || newParams.page === "0" || newParams.cat) {
      params.delete("page");
    }
    // Trả về URL mới
    return `/blog?${params.toString()}`;
  };

  const posts = await getBlogPosts({
    limit: 10,
    page: page,
    category: cate,
    keyword: "",
  });

  return (
    <section className="mb-20">
      <TitleSection
        label="Bài viết"
        title="Những bài viết về lập trình"
        description="Mỗi ngày tôi sẽ viết một bài viết về một chủ đề kiến thức tôi đã
              học trong ngày hôm đó."
      ></TitleSection>
      <section className="my-5">
        <div className="flex min-h-0 flex-col gap-y-3">
          <div className="flex flex-wrap gap-1">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <Link href={"/blog"} passHref>
                <Badge
                  className={`${
                    "" === cate
                      ? "bg-white"
                      : "bg-gray-800 bg-opacity-80 hover:text-black hover:bg-white text-gray-50 border-2"
                  }`}
                >
                  Tất cả
                </Badge>
              </Link>
            </BlurFade>
            {categories.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Link
                  href={handleQueryChange(
                    { cat: skill },
                    posts.page,
                    posts.totalPage
                  )}
                  passHref
                >
                  <Badge
                    className={`${
                      skill === cate
                        ? "bg-white"
                        : "bg-gray-800 bg-opacity-80 hover:text-black hover:bg-white text-gray-50 border-2"
                    }`}
                    key={skill}
                  >
                    {skill}
                  </Badge>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 20}>
        <section className="mt-10">
          {posts.data?.map((post: any, id: number) => (
            <CardPost key={id} post={post} id={id} />
          ))}
          {posts.data?.length === 0 && (
            <div className="text-center">
              <p className="text-lg">Không tìm thấy bài viết</p>
            </div>
          )}
        </section>
      </BlurFade>
      {posts.totalPage > 1 && (
        <BlurFade className="mt-10" delay={BLUR_FADE_DELAY * 30}>
          <Pagination
            posts={posts}
            handleQueryChange={handleQueryChange}
          ></Pagination>
        </BlurFade>
      )}
    </section>
  );
}
