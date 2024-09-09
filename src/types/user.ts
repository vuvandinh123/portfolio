import { z } from "zod";

// Type definition for Account
export interface User {
    _id?: string;
    password: string;
    email: string;
    date: string;
}
export type UserType = {
    _id?: string;
    email: string;
    date: string;
}

export const LoginBodySchema = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(1, "Mật khẩu không được để trống"),
  })
  export type LoginBodyType = z.TypeOf<typeof LoginBodySchema>