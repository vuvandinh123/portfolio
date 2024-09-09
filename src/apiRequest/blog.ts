import http from "@/lib/http";

const blogApiRequest = {
    getList: (queryParams?: any, options?: any) => http.get("blogs", { queryParams: queryParams, ...options }),
    getOne: (id: string) => http.get(`blogs/${id}`),
}
export default blogApiRequest;