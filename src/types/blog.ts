// types/Blog.ts
import z from "zod";

export const CreateBlogBodySchema = z.object({
  title: z.string().min(5, {
    message: 'Tiêu đề phải có ít nhất 5 ký tự'
  }).max(255, {
    message: 'Tiêu đề không vượt quá 255 ký tự'
  }),
  description: z.string().min(5, "Mô tả ít nhất 5 ký tự").max(500, "Mô tả không vượt quá 500 ký tự"),
  content: z.string().min(5, "Nội dung ít nhất 5 ký tự"),
})
export type CreateBlogBodyType = z.TypeOf<typeof CreateBlogBodySchema>



export type ListBlogType = {
  _id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}
export type BlogType = {
  _id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}