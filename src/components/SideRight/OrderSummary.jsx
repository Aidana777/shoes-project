import React from 'react';

const OrderSummary = ({ subtotal, tax, shipping, total }) => {
  return (
    <div className="w-[500px] ml-[170px] pr-[40px] pl-[40px]">
      <h2 className="text-base font-medium mb-4">Order Summary</h2>
      <div className="bg-transparent">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax</span>
          <span>{tax}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>{shipping}</span>
        </div>
        <div className="border-t border-gray-300 py-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
