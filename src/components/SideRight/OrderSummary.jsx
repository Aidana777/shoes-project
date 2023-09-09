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
    <div className="flex flex-col  text-center px-[41px]  gap-y-[34px] font-roboto text-14">
      <div className="flex justify-between">
        <span className="w-max">Subtotal</span>
        <span className="w-max">{formatPrice(subtotal)}</span>
      </div>
      <div className="flex  justify-between">
        <span className="w-max">Tax</span>
        <span className="w-max ">{formatPrice(tax)}</span>
      </div>
      <div className="flex justify-between ">
        <span>Shipping</span>
        <span>{formatPrice(shippingCost)}</span>
      </div>
      <div className="flex justify-between text-black font-roboto text-18 font-bold leading-34">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
