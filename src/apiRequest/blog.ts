import http from "@/lib/http";

const blogApiRequest = {
    getList: (queryParams?: any, options?: any) => http.get("blogs", { queryParams: queryParams, ...options }),
    create: (body: any) => http.post("/admin/blogs", body),
    update: (id: string, body: any) => http.put(`/admin/blogs/${id}`, body),
    getOne: (id: string) => http.get(`blogs/${id}`),
    delete: (id: string) => http.delete(`/admin/blogs/${id}`),
}
export default blogApiRequest;