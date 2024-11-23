'use client'
import React, { useState } from 'react'
import useCartStore from '@/stores/cartStore'
import formatMoney from '@/utils/formatMoney';
import InputForm from '@/app/components/InputForm';
import notificationStore from '@/stores/notificationStore';
import DialogNotification from '@/app/components/DialogNotification';
import { order } from '../service/order';
import { useRouter } from "next/navigation";


function PayNow() {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const { cartList, totalPrice, clearCart } = useCartStore();
    const { setNotification } = notificationStore();
    const router = useRouter()



    const itemOrder = () => {
        if (cartList.length === 0) return null;
        return {
            address: address,
            phone: phone,
            cart_item:cartList.map((item) => ({
                product_id: item.id,
                quantity: item.quantity,
                price: item.price,
                name: item.name,
            })),
        };
    };
    const validateInput = () => {
        if (!phone.match(/^\d{10,11}$/)) {
            setNotification({
                text: '"Please fill in all required fields',
                title: 'WARNING!!!!',
                imgUrl: 'https://media.istockphoto.com/id/1407160246/vector/danger-triangle-icon.jpg?s=612x612&w=0&k=20&c=BS5mwULONmoEG9qPnpAxjb6zhVzHYBNOYsc7S5vdzYI=',
                textBtn:'Cancel'
            });
            return false;
        }
        if (address.trim() === '') {
            setNotification({
                text: '"Please fill in all required fields',
                title: 'WARNING!!!!',
                imgUrl: 'https://media.istockphoto.com/id/1407160246/vector/danger-triangle-icon.jpg?s=612x612&w=0&k=20&c=BS5mwULONmoEG9qPnpAxjb6zhVzHYBNOYsc7S5vdzYI=',
                textBtn:'Cancel'
            });
            return false;
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInput()) return;

        const orderData = itemOrder();

        if (!orderData) {
            setNotification({
                text: '"Please fill in all required fields',
                title: 'WARNING!!!!',
                imgUrl: 'https://media.istockphoto.com/id/1407160246/vector/danger-triangle-icon.jpg?s=612x612&w=0&k=20&c=BS5mwULONmoEG9qPnpAxjb6zhVzHYBNOYsc7S5vdzYI=',
                textBtn:'Cancel'
            });
            
            return;
        }

        try {
            await order(orderData.address, orderData.phone, orderData.cart_item);
            clearCart()
            setNotification({
                text: 'Your order has been placed successfully',
                title: 'Successful',
                imgUrl: 'https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png',
                textBtn:'OK'
            });
            router.push('/order-history')


        } catch (error) {
            setNotification({
                text: '"Please fill in all required fields',
                title: 'ERROR!!!!',
                imgUrl: 'https://media.istockphoto.com/id/1407160246/vector/danger-triangle-icon.jpg?s=612x612&w=0&k=20&c=BS5mwULONmoEG9qPnpAxjb6zhVzHYBNOYsc7S5vdzYI=',
                textBtn:'Cancel'
            });
        }
    };

    return (
        <div className="bg-gray-200 p-8 antialiased md:py-16">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Payment</h2>
                <div className="mt-6 sm:mt-8 flex flex-col lg:items-start lg:gap-12">
                    <form onSubmit={handleSubmit} className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
                        <div className="col-span-2 sm:col-span-1">
                            <label className="mb-2 block text-sm font-medium text-gray-900">Phone</label>
                            <InputForm
                                value={phone}
                                setValue={setPhone}
                                type="text"
                                placeholder="Phone..." />
                        </div>
                        <div>
                            <label
                                className="mb-2 mt-4 flex items-center gap-1 text-sm font-medium text-gray-900">Address</label>
                            <InputForm
                                value={address}
                                setValue={setAddress}
                                type="text"
                                placeholder="Address..." />
                        </div>
                        <button type="button"
                            onClick={handleSubmit}
                            className={`w-full flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white ${cartList.length > 0
                                ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300"
                                : "bg-gray-400 cursor-not-allowed"
                                } focus:outline-none focus:ring-4 transition-all duration-200`}
                            disabled={cartList.length <= 0}
                        >
                            Pay Now
                        </button>
                        <DialogNotification />
                    </form>
                    <div className="mt-6 w-full grow sm:mt-8 lg:mt-0">
                        <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6">
                            <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                                <div className="text-base font-bold text-gray-900">Total</div>
                                <div className="text-base font-bold text-gray-900">
                                   {formatMoney(totalPrice())} 
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-8"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayNow



