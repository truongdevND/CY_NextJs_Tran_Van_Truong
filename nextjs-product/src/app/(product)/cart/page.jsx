'use client'
import React from 'react'
import useCartStore from '@/stores/cartStore'
import ItemCart from './components/ItemCart';
import PayNow from './components/PayNow'

function Cart() {  
  const { cartList } = useCartStore();
  
  return (
    <div className="py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
            Cart
          </h2>
        </div>
        <div className="font-sans">
          <div className="grid lg:grid-cols-3 gap-4 max-lg:max-w-3xl mx-auto">
            <div className="lg:col-span-2 bg-white divide-y divide-gray-300 px-4">
              {cartList.length === 0 ? (
                <p className="text-center text-gray-600 py-4 uppercase">Cart is empty!!!!!!!</p>
              ) : (
                <div className="max-h-[550px] p-3 overflow-y-auto">
                  {cartList.map(cart => (  
                    <ItemCart key={cart.id} item={cart} />
                  ))}
                </div>
              )}
            
            </div>
            <PayNow/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart