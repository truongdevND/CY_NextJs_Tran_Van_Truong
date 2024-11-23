'use client';
import React, { useEffect, useState } from 'react';
import ItemOrder from './components/ItemOrder';
import { orders } from './service/orderHistory';

function OrderHistory() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await orders();
        console.log('Order data:', res.data);
        setOrder(res.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
              Order History
            </h2>
          </div>
        </div>

        <section className="relative">
          <div className="h-[550px] overflow-y-auto">
            {order.length > 0 ? (
              order.map((item) => (
                <ItemOrder key={item.id} {...item} />
              ))
            ) : (
              <p className="text-gray-500 text-center">No orders found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default OrderHistory;
