import database from "@/lib/mongodb";
import { ResponseError, ResponseSuccess } from '@/lib/responseHelper';
import { CREATED_SUCCESS } from '@/data/constants';
import UserModel from '@/models/users';
import bcrypt from 'bcrypt'
import { createPrivateKeyAndPublicKey, createTokenPeir, getInfoData } from "@/lib/utils";
import { headers } from "next/headers";
// đăng nhập
export async function POST(request: Request) {
    try {
        await database();
        const body = await request.json();
        const { email, password } = body;
        // Kiểm tra xem email đã tồn tại chưa
        const user: any = await UserModel.findOne({ email })
        if (!user) {
            return ResponseError({ message: "Email không tồn tại", status: 404 });
        }
        // Kiểm tra mật khẩu
        const passwordMatches = await bcrypt.compare(password, user.password)

        if (!passwordMatches) {
            return ResponseError({ message: "Mật khẩu không đúng", status: 400 })
        }
        const payload = {
            _id: user._id,
            email: user.email,
            name: user.name,
            date: user.date
        }
        const token = await createTokenPeir(payload)
        // trả về token và user
        const data = {
            user: getInfoData({
                fileds: ['_id', 'email', 'name', 'date'],
                object: user
            }),
            token
        }
        const response = {
            data,
            message: "Đăng nhập thành công",
            status: CREATED_SUCCESS,
            headers: {
                "Set-Cookie": [
                    `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`, // Access token
                ]
            }
        }
        return ResponseSuccess(response);
    } catch (error) {
        console.error(error);
        return ResponseError({ message: (error as Error).message });
    }
}