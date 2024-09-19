import blogApiRequest from "@/apiRequest/blog";
import BlurFade from "@/components/magicui/blur-fade";
import { formatDate } from "@/lib/utils";
import { ListBlogType } from "@/types/blog";
import Link from "next/link";

export const metadata = {
  title: "Bài viết",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  try {
    const { payload, status }: any = await blogApiRequest.getList({ limit: 5 });
    if (status !== 200) {
      return <div>Failed to load posts</div>;
    }
    const posts = payload.data as ListBlogType[];
    return (
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter">Bài viết</h1>
        </BlurFade>
        {posts?.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post._id}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post._id}`}
            >
              <div className="w-full flex flex-col">
                <h2 className="tracking-tight hover:underline text-md">
                  {post.title}
                </h2>
                <p className="h-6 text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </p>
                <p className="text-xs text_ecl-2 text-gray-400 text_ecl-2">
                  {post.description}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </section>
    );
  } catch (error) {
    return <div>Failed to load posts</div>;
  }
}
