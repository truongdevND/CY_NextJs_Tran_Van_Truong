import { GET } from "@/services/ApiService";

export const orders = async () => {
    return await GET('/orders')
}
