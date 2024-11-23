import { POST } from "@/services/ApiService";

export const order = async (
    address,
    phone,
    cart_item) => {
    return await POST('/order', {
        address,
        phone,
        cart_item
    })
}
