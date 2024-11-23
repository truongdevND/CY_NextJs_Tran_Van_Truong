import { GET } from "@/services/ApiService";

export const getProducts = async () => {
    return await GET('/products')
}

export const getProductsbyFilter = async (
    currentPage,
    name,
    category_id,
    min_price,
    max_price,
    category_slug
) => {
    const queryParams = {
        page: currentPage,
        name: name || '',
        category_id: category_id || '',
        min_price: min_price || '',
        max_price: max_price || '',
        category_slug: category_slug || ''
    }
    const queryString = new URLSearchParams(queryParams).toString();

    const url = `/products?${queryString}`;

    return await GET(url);

}
