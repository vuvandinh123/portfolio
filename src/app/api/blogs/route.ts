import { CREATED_SUCCESS } from "@/data/constants";
import database from "@/lib/mongodb";
import { ResponseSuccess, ResponseError } from "@/lib/responseHelper";
import BlogModels from "@/models/blogs";

export async function GET() {
    try {
        await database();
        const posts = await BlogModels.find({});
        return ResponseSuccess({ data: posts, message: "Lấy dữ liệu thành công" });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}
export async function POST(request: Request) {
    try {
        await database();
        const body = await request.json();

        body["authorId"] = 1;
        console.log(body);

        const result = await BlogModels.insertMany([body]);
        return ResponseSuccess({ data: result, message: "Tạo mới thành công", status: CREATED_SUCCESS });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });

    }
}
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        await database();
        const body = await request.json();
        const result = await BlogModels.updateOne({ _id: params.id }, { $set: body });
        return ResponseSuccess({ data: result, message: "Cập nhật thành công" });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });

    }
}
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await database();
        const result = await BlogModels.deleteOne({ _id: params.id });
        return ResponseSuccess({ data: result, message: "Xóa thành công" });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}