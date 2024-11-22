import { POST } from "@/services/ApiService";

export const order = async (
    address,
    phone,
    cart_item) => {
    return await POST('/login', {
        address,
        phone,
        cart_item
    })
}
