// types/Blog.ts
import z from "zod";

export const CreateNoteBodySchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, {
    message: 'Tiêu đề phải có ít nhất 5 ký tự'
  }).max(255, {
    message: 'Tiêu đề không vượt quá 255 ký tự'
  }),
  description: z.string().min(5, "Mô tả ít nhất 5 ký tự").max(500, "Mô tả không vượt quá 500 ký tự"),
  content: z.string().min(5, "Nội dung ít nhất 5 ký tự"),
})
export type CreateNoteBodyType = z.TypeOf<typeof CreateNoteBodySchema>



export type ListNoteType = {
  _id: number;
  title: string;
  description: string;
  link: string;
  date: string;
}
export type NoteType = {
  _id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}