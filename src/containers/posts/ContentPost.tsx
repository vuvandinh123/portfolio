"use client";
import { MDXRemote } from "next-mdx-remote";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

// Function to generate a URL-friendly ID from text
const generateId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export default function ContentPost({ source }: any) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the content
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocItems: TocItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName[1]),
    }));
    setToc(tocItems);

    // Handle scroll and update active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!source) return null;

  return (
    <div className="">
      <div className="prose dark:prose-invert max-w-none flex-1">
        <MDXRemote
          {...source}
          components={{
            h1: ({ children }) => {
              const id = generateId(children as string);
              return (
                <h1
                  id={id}
                  className="text-3xl font-bold mt-8 mb-4 scroll-mt-20 group"
                >
                  <span className="mr-2">{children}</span>
                  <a
                    href={`#${id}`}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    #
                  </a>
                </h1>
              );
            },
            h2: ({ children }) => {
              const id = generateId(children as string);
              return (
                <h2
                  id={id}
                  className="text-2xl font-bold mt-6 mb-3 scroll-mt-20 group"
                >
                  <span className="mr-2">{children}</span>
                  <a
                    href={`#${id}`}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    #
                  </a>
                </h2>
              );
            },
            h3: ({ children }) => {
              const id = generateId(children as string);
              return (
                <h3
                  id={id}
                  className="text-xl font-bold mt-4 mb-2 scroll-mt-20 group"
                >
                  <span className="mr-2">{children}</span>
                  <a
                    href={`#${id}`}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    #
                  </a>
                </h3>
              );
            },
            h4: ({ children }) => {
              const id = generateId(children as string);
              return (
                <h4
                  id={id}
                  className="text-lg font-bold mt-3 mb-2 scroll-mt-20 group"
                >
                  <span className="mr-2">{children}</span>
                  <a
                    href={`#${id}`}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    #
                  </a>
                </h4>
              );
            },
            h5: ({ children }) => {
              const id = generateId(children as string);
              return (
                <h5
                  id={id}
                  className="text-base font-bold mt-2 mb-2 scroll-mt-20 group"
                >
                  <span className="mr-2">{children}</span>
                  <a
                    href={`#${id}`}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    #
                  </a>
                </h5>
              );
            },
            h6: ({ children }) => {
              const id = generateId(children as string);
              return (
                <h6
                  id={id}
                  className="text-sm font-bold mt-2 mb-2 scroll-mt-20 group"
                >
                  <span className="mr-2">{children}</span>
                  <a
                    href={`#${id}`}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    #
                  </a>
                </h6>
              );
            },
            p: ({ children }) => (
              <p className="my-4 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 my-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 my-4">{children}</ol>
            ),
            li: ({ children }) => <li className="my-1">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic">
                {children}
              </blockquote>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 my-4 overflow-x-auto">
                {children}
              </pre>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                  {children}
                </table>
              </div>
            ),
            th: ({ children }) => (
              <th className="px-3 py-2 text-left text-sm font-semibold bg-gray-100 dark:bg-gray-800">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-3 py-2 text-sm border-b border-gray-300 dark:border-gray-700">
                {children}
              </td>
            ),
          }}
        />
      </div>

      {/* Table of Contents */}
      <div className="hidden fixed  right-20 top-0 lg:block w-72 flex-shrink-0">
        <div className="sticky top-8 py-6">
          {/* Tiêu đề TOC */}
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-tight">
            Table of Contents
          </h2>
          {/* Danh sách TOC */}
          <nav className="space-y-1.5 max-h-[calc(100vh-200px)] overflow-y-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-800">
            {toc.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeId === item.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/70 hover:text-gray-900 dark:hover:text-white"
                }`}
                style={{ paddingLeft: `${(item.level - 1) * 16 + 12}px` }} // Tăng thụt đầu dòng cho rõ ràng hơn
              >
                {/* Thêm dấu chấm phân cấp cho các level sâu hơn */}
                <span className="flex items-center">
                  {item.level > 1 && (
                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-2" />
                  )}
                  {item.text}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
