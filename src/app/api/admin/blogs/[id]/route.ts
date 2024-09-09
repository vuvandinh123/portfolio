import BlogModels from '@/models/blogs';
import database from "@/lib/mongodb";
import { ResponseError, ResponseSuccess } from '@/lib/responseHelper';
import mongoose from 'mongoose';

export async function GET(request: Request) {
    try {
        await database();
        const id: string = request.url.split('/').pop() || "";
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return ResponseError({ message: "Id không hợp lệ", status: 400 });
        }
        const posts = await BlogModels.findById(id).exec();
        if (!posts) {
            return ResponseError({ message: "Không tìm thấy bài viết", status: 404 });
        }
        return ResponseSuccess({ data: posts, message: "Lấy dữ liệu thành công" });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}