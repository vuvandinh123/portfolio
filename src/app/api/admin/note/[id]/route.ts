import database from "@/lib/mongodb";
import { ResponseError, ResponseSuccess } from '@/lib/responseHelper';
import mongoose from 'mongoose';
import NoteModel from '@/models/notes';

export async function GET(request: Request) {
    try {
        await database();
        const id: string = request.url.split('/').pop() || "";
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return ResponseError({ message: "Id không hợp lệ", status: 400 });
        }
        const posts = await NoteModel.findById(id).exec();
        if (!posts) {
            return ResponseError({ message: "Không tìm thấy bài viết", status: 404 });
        }
        return ResponseSuccess({ data: posts, message: "Lấy dữ liệu thành công" });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        await database();
        const body = await request.json();
        const result = await NoteModel.updateOne({ _id: params.id }, { $set: body });
        return ResponseSuccess({ data: result, message: "Cập nhật thành công" });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await database();
        const result = await NoteModel.deleteOne({ _id: params.id });
        return ResponseSuccess({ data: result, message: "Xóa thành công" });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}