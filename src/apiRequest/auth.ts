import http from "@/lib/http";
import { LoginBodyType } from "@/types/user";

const authApiRequest = {
    login: (body?: LoginBodyType) => http.post("login", body),
    // signup: (id: string) => http.get(`blogs/${id}`),
}
export default authApiRequest;