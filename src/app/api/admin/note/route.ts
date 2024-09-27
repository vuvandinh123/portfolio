import { CREATED_SUCCESS } from "@/data/constants";
import database from "@/lib/mongodb";
import { ResponseSuccess, ResponseError } from "@/lib/responseHelper";
import NoteModel from "@/models/notes";
export async function POST(request: Request) {
    try {
        // Lấy token từ cookie
        const token = (request as any).cookies.get('token')?.value; 
        if(!token) {
            return ResponseError({ message: "Token không hợp lệ", status: 401 });
        }
        await database();
        const body = await request.json();
        const result = await NoteModel.insertMany([body]);
        return ResponseSuccess({ data: result, message: "Tạo mới thành công", status: CREATED_SUCCESS });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });

    }
}
