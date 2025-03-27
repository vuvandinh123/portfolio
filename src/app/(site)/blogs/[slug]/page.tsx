import NotFound from "@/components/NotFound";
import { getBlogPosts, getOnePost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Undo2 } from "lucide-react";

const ContentPost = dynamic(() => import("@/containers/posts/ContentPost"), {
  ssr: false,
});

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    cat?: string;
  };
};
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata | undefined> {
  if (!params || !searchParams) {
    return undefined;
  }

  const cat = (searchParams?.cat as string) || "";

  try {
    const post = await getData({ slug: params.slug, cat });

    if (!post || !post.metadata) {
      return undefined;
    }

    let {
      title,
      publishedAt: publishedTime,
      summary: description,
      image,
      keywords,
    } = post.metadata;

    let ogImage = image ? `${image}` : `${DATA.url}/og?title=${title}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime,
        url: `${DATA.url}/blog/${post.slug}`,
        images: [
          {
            url: ogImage,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
      robots: {
        index: true,
        follow: true,
      },
      keywords: keywords ? keywords.join(", ") : "blog, programming, tech", // Thêm keywords
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return undefined;
  }
}

async function getData({ slug, cat }: { slug: string; cat: string }) {
  let post = await getOnePost(slug, cat);
  if (!post) return notFound();
  return post;
}
async function getDataNext({ slug, cat }: { slug: string; cat: string }) {

  const posts = await getBlogPosts({
    limit: 10,
    page: 1,
    category: cat,
    keyword: "",
  });
  const index = posts?.data.findIndex((post: any) => post.slug === slug);
  if (index === posts.total - 1) return posts?.data[0];
  return posts?.data[index + 1];
}
export default async function Blog({ params, searchParams }: Props) {
  try {
    const cat = (searchParams?.cat as string) || "";
    if (!cat) {
      return notFound();
    }
    const post = await getData({ slug: params.slug, cat });
    const nextPost = await getDataNext({ slug: params.slug, cat });
    return (
      <section id="blog">
        <div className="flex items-center justify-between mb-8">
          <Link href="/blogs" className="flex gap-2 items-center">
            <Undo2 size={20} /> Quay lại
          </Link>
          <Link href={`/blogs/${nextPost?.slug}?cat=${cat}`} className="flex gap-2 items-center">
            Bài tiếp theo
            <ArrowRight size={20}></ArrowRight>
          </Link>
        </div>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <h1 className="title  text-3xl font-bold tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </Suspense>
        </div>
        <article className="prose dark:prose-invert pb-10">
          <Suspense fallback={<div>Loading...</div>}>
            <ContentPost source={post.source} />
          </Suspense>
        </article>
      </section>
    );
  } catch (error) {
    console.log(error);
    return <NotFound />;
  }
}
