import fs from "fs";
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import remarkParse from "remark-parse";

interface Metadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  category: string;
};

export async function getPost(filePath: string, slug: string) {
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const compiledSource = await serialize(rawContent, {
    mdxOptions: {
      remarkPlugins: [
        remarkParse,
      ],
      rehypePlugins: [
        [rehypePrettyCode, {
          theme: "github-dark-dimmed",
          keepBackground: false,
        }],
      ],
    },
  });
  return {
    source: compiledSource,
    metadata,
    slug,
  };
}
export async function getOnePost(slug: string, category: string, fd?: string) {
  const dir = path.join(process.cwd(), fd ? fd : "content")
  const categoryPath = path.join(dir, category);
  const stat = fs.statSync(categoryPath);
  // Kiểm tra nếu là thư mục
  if (stat.isDirectory()) {
    const filePath = path.join(categoryPath, slug + ".mdx");
    return await getPost(filePath, slug);
  }
  return null
}
// Hàm lấy tất cả file MDX từ các thư mục con (các danh mục) của thư mục `dir`
function getMDXFiles(dir: string): { filePath: string, category: string }[] {
  let mdxFiles: { filePath: string, category: string }[] = [];

  const categories = fs.readdirSync(dir); // Lấy tất cả các thư mục con
  categories.forEach((category) => {
    const categoryPath = path.join(dir, category);

    const stat = fs.statSync(categoryPath);

    // Kiểm tra nếu là thư mục
    if (stat.isDirectory()) {
      const files = fs.readdirSync(categoryPath); // Lấy tất cả các file trong thư mục
      files.forEach((file) => {
        if (file.endsWith('.mdx')) { // Chỉ lấy file .mdx
          mdxFiles.push({
            filePath: path.join(categoryPath, file),
            category, // Gán tên thư mục làm danh mục
          });
        }
      });
    }
  });

  return mdxFiles;
}
// Hàm lấy tất cả danh mục (tên thư mục chứa file MDX)
export function getAllCategories(): string[] {
  const dir = path.join(process.cwd(), "content")
  let categories = new Set<string>(); // Sử dụng Set để tránh trùng lặp danh mục
  function traverseDirectory(directory: string) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        categories.add(file); // Thêm tên thư mục vào danh sách danh mục
        traverseDirectory(filePath); // Tiếp tục duyệt nếu có thư mục con
      }
    });
  }
  traverseDirectory(dir);
  return Array.from(categories); // Chuyển Set thành mảng
}
type Query = {
  page?: number;
  limit?: number;
  category?: string;
  keyword?: string;
}
const cache = new Map();
async function getAllPosts(
  dir: string,
  {
    page = 1,
    limit = 10,
    category,
    keyword,
  }: Query = {}
) {
  const mdxFiles = getMDXFiles(dir);
  const cacheKey = `${dir}-${page}-${category}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const { filePath, category } = file;
      let slug = path.basename(filePath, path.extname(filePath));
      const { metadata, source } = await getPost(filePath, slug);
      return { metadata: { ...metadata, category } as Metadata, slug };
    })
  );
  let filteredPosts = posts;
  if (category) {
    filteredPosts = filteredPosts.filter(
      (post) => post.metadata.category === category
    );
  }

  if (keyword) {
    filteredPosts = filteredPosts.filter(
      (post) => (post.metadata as Metadata).title.includes(keyword)
    );
  }

  filteredPosts = filteredPosts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const totalPage = Math.ceil(filteredPosts.length / limit);
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const response = {
    total: filteredPosts.length,
    totalPage,
    page,
    limit,
    data: paginatedPosts,
  }
  cache.set(cacheKey, response);

  return response;
}
export async function getBlogPosts(query: { page: number, limit: number, category: string, keyword: string }) {
  return getAllPosts(path.join(process.cwd(), "content"), query);
}
