import blogApiRequest from "@/apiRequest/blog";
import NotFound from "@/components/NotFound";
import { convertMdxToHtml } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { BlogType } from "@/types/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let { payload }: { payload: any } = await blogApiRequest.getOne(params.slug);
  const post = payload?.data as BlogType;
  if (!post) return;
  let { title, description, date: publishedTime } = post;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post._id}`,
      images: [
        {
          url: "https://codecungtui.github.io/images/tao-blog-don-gian-voi-hugo-va-github/cover.jpg",
          width: 800,
          height: 600,
          alt: "Preview Blog Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "https://codecungtui.github.io/images/tao-blog-don-gian-voi-hugo-va-github/cover.jpg",
          width: 800,
          height: 600,
          alt: "Preview Blog Image",
        },
      ],
    },
  };
}
async function getData({ id }: { id: string }) {
  let { payload }: { payload: any } = await blogApiRequest.getOne(id);
  const post = payload?.data as BlogType;
  console.log(post);

  if (!post) return notFound();
  return post;
}
export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  try {
    const post = await getData({ id: params.slug });
    const content = await convertMdxToHtml(post.content);
    return (
      <section id="blog">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.date,
              dateModified: post.date,
              description: post.description,
              image: `${DATA.url}/og?title=${post.title}`,
              url: `${DATA.url}/blog/${post._id}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <h1 className=" font-bold text-4xl  tracking-tighter max-w-[650px]">
          {post.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.date)}
            </p>
          </Suspense>
        </div>
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </section>
    );
  } catch (error) {
    return <NotFound />;
  }
}
