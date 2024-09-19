"use client";
import { ForwardRefEditor } from "@/components/ForwardRefEditor";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import http from "@/lib/http";
import { useForm } from "react-hook-form";
import { CreateBlogBodyType, CreateBlogBodySchema } from "@/types/blog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import blogApiRequest from "@/apiRequest/blog";

export default function FormBlog({ blog }: { blog?: CreateBlogBodyType }) {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const form = useForm<CreateBlogBodyType>({
    resolver: zodResolver(CreateBlogBodySchema),
    defaultValues: {
      title: blog?.title || "",
      description: blog?.description || "",
      content: blog?.content || "",
    },
  });
  const fnCreateBlog = async (values: CreateBlogBodyType) => {
    setLoading(true);
    try {
      const { payload }: any = await http.post("/admin/blogs", values);
      if (payload.status === 201) {
        form.reset();
        form.setValue("content", "");
        toast({
          title: "Thành công",
          description: payload?.message || "Tạo bài viết thành công",
        });
        router.push("/admin/blog");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const fnEditBlog = async (values: CreateBlogBodyType) => {
    try {
      const { payload }: any = await blogApiRequest.update(
        blog?._id || "",
        values
      );
      if (payload.status === 200) {
        toast({
          title: "Thành công",
          description: payload.message || "Cập nhật bài viết thành công",
        });
        router.push("/admin/blog");
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra",
      });
    }
  };
  const onSubmit = async (values: CreateBlogBodyType) => {
    if (loading) return;
    if (!blog) {
      await fnCreateBlog(values);
      return;
    }
    await fnEditBlog(values);
  };
  return (
    <div className="">
      <div className="relative col-span-1 hidden flex-col items-start gap-8 md:flex">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full items-start gap-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tiêu đề</FormLabel>
                  <FormControl>
                    <Input placeholder="Tiêu đề" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder="Nhập mô tả cho bài viết."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nội Dung</FormLabel>
                  <FormControl>
                    <ForwardRefEditor
                      onChange={(value) => {
                        form.setValue("content", value);
                        form.clearErrors("content");
                      }}
                      onBlur={field.onBlur}
                      ref={field.ref}
                      className=" text-white  bg-gray-50 rounded-md w-full border"
                      markdown={field.value}
                    ></ForwardRefEditor>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="">
              Lưu
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
