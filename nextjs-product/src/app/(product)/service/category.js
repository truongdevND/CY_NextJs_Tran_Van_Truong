import { GET } from "@/services/ApiService";

export const getCategory = async () => {
    return await GET('/categories')
}
