"use client";
import Sidebar from "@/containers/admin/blog-page/sidebar";
import HeaderAdmin from "@/containers/admin/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid h-screen w-full pl-[53px]">
        <Sidebar></Sidebar>
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col ">
            <HeaderAdmin></HeaderAdmin>
            <main className="px-5">{children}</main>
          </div>
        </QueryClientProvider>
      </div>
    </>
  );
}
