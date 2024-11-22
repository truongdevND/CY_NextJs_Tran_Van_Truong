"use client";
import useCartStore from "@/stores/cartStore";
import formatMoney from "@/utils/formatMoney";

export default function ItemProduct({ product }) {
    const { cartList, addToCart } = useCartStore();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
            image: product.preview_img_path,
        });
    };

    const availableStock = () => {
        const inCart = cartList.find((cartItem) => cartItem.id === product.id)?.quantity || 0;
        return  product.stock - inCart;
    };
    const stockStatus = () => {
        const stock = availableStock();
        if (stock <= 0) {
            return { text: 'Out of stock', class: 'text-red-600' };
        }
        return { text: 'In stock', class: 'text-green-600' };
    };

    return (
        <div className="cursor-pointer flex w-full justify-between flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="relative mx-3 mt-3 flex h-60 z-1 overflow-hidden rounded-xl">
                <img
                    src={product.preview_img_path}
                    alt={product.name}
                    className="rounded-xl w-full"
                />
                <div className="absolute top-2 right-2">
                    <span
                        className={`${stockStatus().class} px-2 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm shadow-sm`}
                    >
                        {stockStatus().text}
                    </span>
                </div>
            </div>

            <div className="mt-4 px-5 pb-5">
                <div>
                    <h5 className="text-xl tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
                        {product?.name || "Product Name"}
                    </h5>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-600 font-medium">
                        Stock: <span className={stockStatus().class}>{availableStock()}</span>
                    </p>
                    {cartList.find(cartItem => cartItem.id === product.id) && (
                        <p className="text-sm text-blue-600 font-medium">
                            In Cart: {cartList.find(cartItem => cartItem.id === product.id).quantity}
                        </p>
                    )}
                </div>


                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-red-700">
                            {product?.price ? `${formatMoney(product.price)}` : "Contact"}
                        </span>
                    </p>
                </div>

                <button
                    className={`w-full flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white ${availableStock() > 0
                        ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300"
                        : "bg-gray-400 cursor-not-allowed"
                        } focus:outline-none focus:ring-4 transition-all duration-200`}
                    onClick={handleAddToCart}
                    disabled={availableStock() <= 0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    {availableStock() <= 0 ? "Out of stock" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}
