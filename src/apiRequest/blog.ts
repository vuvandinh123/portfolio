import http from "@/lib/http";

const blogApiRequest = {
    getList: (queryParams?: any) => http.get("blogs", { queryParams: queryParams }),
}
export default blogApiRequest;