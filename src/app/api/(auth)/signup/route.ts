import database from "@/lib/mongodb";
import { ResponseError, ResponseSuccess } from '@/lib/responseHelper';
import { CREATED_SUCCESS } from '@/data/constants';
import UserModel from '@/models/users';
import bcrypt from 'bcrypt'
export async function POST(request: Request) {
    try {
        await database();
        const body = await request.json();
        const { email, password, name } = body;
        // Kiểm tra xem email đã tồn tại chưa
        const hashedPassword = await bcrypt.hash(password, 10)
        const user: any = UserModel.create({ email, password: hashedPassword, name })
        return ResponseSuccess({ data: user, message: "Đăng ký thành công", status: CREATED_SUCCESS });
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });

    }
}