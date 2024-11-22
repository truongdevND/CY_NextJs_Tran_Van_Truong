import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartList: [],

      checkStock: (item) => {
        return item?.stock > 0;
      },

      addToCart: (item) => {
        const { cartList, checkStock } = get();
        const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          if (!checkStock(item)) {
            return false;
          }
          set((state) => ({
            cartList: state.cartList.map((cartItem) =>
              cartItem.id === item.id
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                    total: (cartItem.quantity + 1) * cartItem.price,
                    stockAvailable: cartItem.stockAvailable - 1,
                  }
                : cartItem
            ),
          }));
        } else {
          if (!checkStock(item)) {
            return false;
          }
          set((state) => ({
            cartList: [
              ...state.cartList,
              {
                ...item,
                quantity: 1,
                total: item.price,
                stockAvailable: item.stock - 1,
              },
            ],
          }));
        }
        return true;
      },

      

      updateQuantity: (itemId, change) => {
        const { cartList, checkStock, removeFromCart } = get();
        const item = cartList.find((cartItem) => cartItem.id === itemId);

        if (item) {
          const newQuantity = item.quantity + change;

          if (change < 0) {
            if (newQuantity > 0) {
              set((state) => ({
                cartList: state.cartList.map((cartItem) =>
                  cartItem.id === itemId
                    ? {
                        ...cartItem,
                        quantity: newQuantity,
                        total: newQuantity * cartItem.price,
                        stockAvailable: cartItem.stockAvailable + 1,
                      }
                    : cartItem
                ),
              }));
            } else {
              removeFromCart(itemId);
            }
            return true;
          }
          if (!checkStock(item)) {
            return false;
          }
          set((state) => ({
            cartList: state.cartList.map((cartItem) =>
              cartItem.id === itemId
                ? {
                    ...cartItem,
                    quantity: newQuantity,
                    total: newQuantity * cartItem.price,
                    stockAvailable: cartItem.stockAvailable - 1,
                  }
                : cartItem
            ),
          }));
          return true;
        }
      },

      removeFromCart: (itemId) => {
        set((state) => ({
          cartList: state.cartList.filter((item) => item.id !== itemId),
        }));
      },

      totalPrice: () =>
        get()
          .cartList.reduce((sum, item) => sum + item.total, 0)
          .toFixed(2),

      clearCart: () => {
        set({ cartList: [] });
      },
    }),
    {
      name: "my-cart", 
    }
  )
);

export default useCartStore;
