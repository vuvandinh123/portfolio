import { CREATED_SUCCESS } from "@/data/constants";
import database from "@/lib/mongodb";
import { ResponseSuccess, ResponseError } from "@/lib/responseHelper";
import BlogModels from "@/models/blogs";

export async function GET(request: Request) {
    try {
        await database();
        const { searchParams } = new URL(request.url);
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 10;
        const skip = (page - 1) * limit;
        // Đếm tổng số tài liệu trong BlogModels
        const totalDocuments = await BlogModels.countDocuments({});
        // Tính tổng số trang
        const pageCount = Math.ceil(totalDocuments / limit);
        const options = {
            total: totalDocuments,
            pageCount,
            page,
            limit,
        }
        const posts = await BlogModels.find({}).select('-content').skip(skip).limit(limit).sort({date: -1}).exec();
        return ResponseSuccess({ data: posts, message: "Lấy dữ liệu thành công", options });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}

export async function POST(request: Request) {
    try {
        // Lấy token từ cookie
        const token = (request as any).cookies.get('token')?.value; 
        if(!token) {
            return ResponseError({ message: "Token không hợp lệ", status: 401 });
        }
        await database();
        const body = await request.json();

        body["authorId"] = 1;
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