import React from 'react';
import formatDate from '@/utils/formatDate';
import formatMoney from '@/utils/formatMoney';

function ItemOrder(itemOrder) {
  return (
    <div className="mt-6 border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Order ID: <span className="text-indigo-600">#{itemOrder.id}</span>
          </h2>
          <p className="text-sm text-gray-500">{formatDate(itemOrder.created_at)}</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <p className="text-gray-700">
            <span className="font-medium">Address:</span> {itemOrder.address}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Phone:</span> {itemOrder.phone}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      {itemOrder.order_items.map((item) => (
        <div key={item.id} className="py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h3 className="font-semibold text-gray-800">{item.name}</h3>
            <div className="mt-2 md:mt-0 flex flex-col md:flex-row items-start md:items-center gap-4">
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              <p className="font-semibold text-gray-800">{formatMoney(item.price)}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-green-600">Payment Is Successful</p>
        <p className="font-medium text-gray-800">
          <span className="text-gray-500">Total Price:</span> {formatMoney(itemOrder.sub_total)}
        </p>
      </div>
    </div>
  );
}

export default ItemOrder;
