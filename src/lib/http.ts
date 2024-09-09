// lib/http.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

type CustomOptions = Omit<RequestInit, 'method'> & {
    baseUrl?: string | undefined,
    queryParams?: Record<string, string>;
}
const request = async <Response>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    options?: CustomOptions | undefined
) => {
    let body: FormData | string | undefined = undefined
    if (options?.body instanceof FormData) {
        body = options.body
    } else if (options?.body) {
        body = JSON.stringify(options.body)
    }
    const baseHeaders: {
        [key: string]: string
    } = body instanceof FormData
            ? {}
            : {
                'Content-Type': 'application/json',
            }

    let fullUrl = url.startsWith("https")
        ? url : url.startsWith("/")
            ? `${BASE_URL}${url}` : `${BASE_URL}/${url}`

    if (options?.queryParams) {
        const searchParams = new URLSearchParams(options.queryParams)
        fullUrl += `?${searchParams.toString()}`
    }
    const config: RequestInit = {
        method,
        headers: {
            ...baseHeaders,
            ...options?.headers,
        } as any,
        body,
        cache: 'no-cache',
    };
    const response = await fetch(fullUrl, config);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const payload: Response = await response.json();
    const data = {
        status: response.status,
        payload
    }
    return data;
}
const http = {
    get<Response>(
        url: string,
        options?: Omit<CustomOptions, 'body'> | undefined
    ) {
        return request<Response>('GET', url, options)
    },
    post<Response>(
        url: string,
        body: any,
        options?: Omit<CustomOptions, 'body'> | undefined
    ) {
        return request<Response>('POST', url, { ...options, body })
    },
    put<Response>(
        url: string,
        body: any,
        options?: Omit<CustomOptions, 'body'> | undefined
    ) {
        return request<Response>('PUT', url, { ...options, body })
    },
    delete<Response>(
        url: string,
        options?: Omit<CustomOptions, 'body'> | undefined
    ) {
        return request<Response>('DELETE', url, options)
    }
}
export default http;