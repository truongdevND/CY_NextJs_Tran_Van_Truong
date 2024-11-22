import React from 'react'
import useCartStore from '@/stores/cartStore'
import formatMoney from '@/utils/formatMoney';

function ItemCart({ item }) {
    const { updateQuantity, removeFromCart } = useCartStore();
    return (
        <div className="p-6 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] mt-3 border border-gray-400  rounded-md relative">


            <div className="flex items-center max-sm:flex-col gap-4 max-sm:gap-6">
                <div className="w-52 shrink-0">
                    <img src={item.image} className="w-full h-full object-contain" />
                </div>
                <div className="sm:border-l sm:pl-4 sm:border-gray-300 w-full">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>

                    <p className="mt-4 text-xl font-medium text-gray-800 space-y-2">
                        Price: <span className="text-red-400 text-xl font-medium">{formatMoney(item.price)}</span></p>


                    <hr className="border-gray-300 my-4" />


                    <div className="flex items-center justify-between flex-wrap gap-4">

                        <div className="flex items-center gap-3">
                            <button type="button"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                                    <path
                                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                        data-original="#000000"></path>
                                </svg>
                            </button>
                            <span className="font-bold text-sm leading-[16px]">{item.quantity}</span>
                            <button
                                type="button"
                                onClick={() => updateQuantity(item.id, 1)}
                                className={`${item.stockAvailable > 0
                                    ? 'flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full'
                                    : 'bg-gray-400 cursor-not-allowed flex items-center justify-center w-5 h-5 outline-none rounded-full'
                                    }`}
                                disabled={item.stockAvailable <= 0}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                                    <path
                                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                        data-original="#000000"
                                    ></path>
                                </svg>
                            </button>

                        </div>

                        <div className="flex items-center">
                            <h4 className="text-lg font-bold text-gray-800">{formatMoney(item.total)}</h4>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                onClick={()=>{removeFromCart(item.id)}}
                                className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 absolute top-3.5 right-3.5"
                                viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart