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

