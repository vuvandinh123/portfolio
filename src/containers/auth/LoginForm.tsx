"use client";
import authApiRequest from "@/apiRequest/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { LoginBodySchema, LoginBodyType } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBodySchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const fnLoginSubmit = async (values: LoginBodyType) => {
    setLoading(true);
    const { payload }: any = await authApiRequest.login(values);
    if (payload.status === 201) {
      toast({
        title: "Thành công",
        description: payload?.message || "Đăng nhập thành công",
      });
      router.push("/admin");
    } else {
      toast({
        title: "Thất bại",
        description: payload?.message,
      });
    }
    setLoading(false);
  };
  const onSubmit = async (values: LoginBodyType) => {
    if (loading) return;
    await fnLoginSubmit(values);
  };
  return (
    <div className="flex-center h-screen">
      <Form {...form}>
        <form
          className="lg:w-[500px] w-full p-3 shadow-lg rounded-lg border py-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <h2 className="uppercase text-xl font-bold text-center mb-5">
              Đăng nhập
            </h2>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập mật khẩu"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-3" variant="default">
            Đăng nhập
          </Button>
        </form>
      </Form>
    </div>
  );
}
