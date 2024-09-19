// `middleware.ts`

import { NextRequest, NextResponse } from 'next/server';
import { JwtPayload } from 'jsonwebtoken';
import { jwtVerify } from 'jose';

const privateApi = ["/api/admin"]
const privatePaths = ["/admin"]
const authPaths = ["/login"]
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('token')?.value || '';
    const response = NextResponse.next() as NextResponse<unknown> & { user: JwtPayload };
    // Thiết lập CORS headers
    if (privateApi.some(api => pathname.includes(api))) {
        if (!token) {
            return NextResponse.json({ message: "Không có quyền truy cập" }, { status: 401 });
        }
        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            const { payload } = await jwtVerify(token, secret);
            response.user = payload as JwtPayload;
            return response;
        } catch (error) {
            console.error('Token verification error:', error);
            return NextResponse.json({ message: "Không có quyền truy cập" }, { status: 401 });
        }
    }
    // chuaw đăng nhập
    if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    // đã đăng nhập
    if (authPaths.some((path) => pathname.startsWith(path)) && token) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }
    return NextResponse.next();
}

// Cấu hình middleware để áp dụng cho các route yêu cầu xác thực
export const config = {
    matcher: ['/api/:path*', '/login', '/admin/:path*'],
};
