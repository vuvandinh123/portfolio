import { CREATED_SUCCESS } from "@/data/constants";
import database from "@/lib/mongodb";
import { ResponseSuccess, ResponseError } from "@/lib/responseHelper";
import NoteModel from "@/models/notes";

export async function GET(request: Request) {
    try {
        await database();
        const { searchParams } = new URL(request.url);
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 10;
        const skip = (page - 1) * limit;
        // Đếm tổng số tài liệu trong BlogModels
        const totalDocuments = await NoteModel.countDocuments({});
        // Tính tổng số trang
        const pageCount = Math.ceil(totalDocuments / limit);
        const options = {
            total: totalDocuments,
            pageCount,
            page,
            limit,
        }
        const posts = await NoteModel.find({}).skip(skip).limit(limit).sort({date: -1}).exec();
        return ResponseSuccess({ data: posts, message: "Lấy dữ liệu thành công", options });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}

export async function POST(request: Request) {
    try {
        await database();
        
        const body = await request.json();
        const result = await NoteModel.insertMany([body]);
        return ResponseSuccess({ data: result, message: "Tạo mới thành công", status: CREATED_SUCCESS });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}

