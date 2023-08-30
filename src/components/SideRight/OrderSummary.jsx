import React from 'react';

const OrderSummary = ({ basketItems }) => {
  const formatPrice = (price) => {
    return `$ ${price.toFixed(2)}`;
  };

  const calculateSubtotal = () => {
    return basketItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(/\$| /g, ''));
      return total + item.quantity * itemPrice;
    }, 0);
  };

  const tax = 100; 
  const shippingCost = 150; 
  const subtotal = calculateSubtotal();
  const total = subtotal + tax + shippingCost;

  return (
    <div className="ml-[170px] pr-[40px] pl-[40px] border-t ">
      <h2 className="text-base font-medium mb-4">Order Summary</h2>
      <div className="bg-transparent">
        <div className="flex justify-between mb-2 text-black font-roboto text-14 font-normal leading-34">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between mb-2 text-black font-roboto text-14 font-normal leading-34">
          <span className='text-black font-roboto text-14 font-normal leading-34'>Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between mb-2 text-black font-roboto text-14 font-normal leading-34">
          <span>Shipping</span>
          <span>{formatPrice(shippingCost)}</span>
        </div>
        <div className="flex justify-between text-black font-roboto text-18 font-bold leading-34">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

