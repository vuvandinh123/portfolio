import http from "@/lib/http";

const noteApiRequest = {
    getList: (queryParams?: any, options?: any) => http.get("note", { queryParams: queryParams, ...options }),
    get: (id: string, options?: any) => http.get(`note/${id}`, options),
    create: (data: any, options?: any) => http.post("note", data, options),
    update: (id: string, data: any, options?: any) => http.put(`admin/note/${id}`, data, options),
    delete: (id: string, options?: any) => http.delete(`admin/note/${id}`, options),
}
export default noteApiRequest;