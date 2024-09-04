// lib/responseHelper.ts

import { SERVER_ERROR, SUCCESS } from "@/data/constants";
import { NextResponse } from "next/server";

export interface ApiResponse<T> {
  status?: number;
  data: T;
  options?: any;
  message?: string; // Default message is "Thành công"
}

export function ResponseSuccess<T>({
  data,
  message = "Thành công",
  options,
  status = SUCCESS
}: ApiResponse<T>) {
  return NextResponse.json({
    status: status,
    data,
    options,
    message,
  });
}
export function ResponseError({
  message = "Có lỗi xảy ra",
  status = SERVER_ERROR
}: { message?: string, status?: number }) {
  return NextResponse.json({
    status,
    message,
  }, { status });
}
