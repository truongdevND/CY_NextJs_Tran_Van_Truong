import React from 'react';
import formatDate from '@/utils/formatDate';
import formatMoney from '@/utils/formatMoney';

function ItemOrder(itemOrder) {
  return (
    <div>
      <div className="mt-6 border border-gray-900 pt-5">
        <div className="flex max-md:flex-col items-center justify-between px-3 md:px-11">
          <div className="flex justify-between w-full">
            <div>
              <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">
                Order ID: #{itemOrder.id}
              </p>
              <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">
                {formatDate(itemOrder.created_at)}
              </p>
            </div>
            <div>
              <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">
                Address: {itemOrder.address}
              </p>
              <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">
                Phone: {itemOrder.phone}
              </p>
            </div>
          </div>
        </div>

        <svg
          className="my-6 w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="1216"
          height="2"
          viewBox="0 0 1216 2"
          fill="none"
        >
          <path d="M0 1H1216" stroke="#D1D5DB" />
        </svg>

        {itemOrder.order_items.map((item) => (
          <div key={item.id}>
            <div className="flex max-lg:flex-col items-center justify-between px-3">
              <div className="w-full">
                <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                  <h6 className="font-manrope font-semibold text-2xl leading-9 text-black mb-3 whitespace-nowrap">
                    {item.name}
                  </h6>
                  <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                    <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                      Qty: {item.quantity}
                    </span>
                    <p className="font-semibold text-xl leading-8 text-black whitespace-nowrap">
                      Price: {formatMoney(item.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <svg
              className="mt-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1216"
              height="2"
              viewBox="0 0 1216 2"
              fill="none"
            >
              <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>
          </div>
        ))}

        <div className="px-3 md:px-11 flex items-center justify-between max-sm:flex-col-reverse">
          <div className="flex h-[60px] max-sm:flex-col-reverse items-center">
            <p className="font-normal text-xl leading-8 text-gray-500 sm:pl-8">
              Payment Is Successful
            </p>
          </div>
          <p className="font-medium text-xl leading-8 text-black max-sm:py-4">
            <span className="text-gray-500">Total Price: </span>
            {formatMoney(itemOrder.sub_total)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemOrder;
