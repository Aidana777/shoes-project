import React from 'react';

const RightSidebar = ({
  basketItems,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) => {
  const formatPrice = (price) => {
    return ` ${price}`;
  };

  return (
    <div className=" w-full flex flex-col px-[40px] py-[40px]">
      <h2 className=" w-full pl-[40px] font-roboto text-18 font-bold text-black  ">
        My basket
      </h2>
      {basketItems.map((item) => (
        <div
          key={item.id}
          className=" w-[330x] h-[100px] flex gap-[11px]   mb-[40px] "
        >
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <img className="w-[90px] h-[51px]" src={item.image} alt="" />
          </div>

          <div className="flex flex-col">
            <div className="flex w-max gap-x-[6px] mb-[15px]">
              <span className="w-[202.815px]  font-roboto text-14 font-normal text-black">
                {item.name}
              </span>
              <button
                className="border-none bg-transparent h-max w-max"
                onClick={() => onRemoveItem(item)}
              >
                <img src="../../../Icon/delete.svg " alt="" />
              </button>
            </div>
            <div className="flex items-center mb-[33px] ">
              <button
                className="border-none bg-transparent "
                onClick={() => onDecreaseQuantity(item)}
              >
                <img
                  className="bg-transparent"
                  src="../../../Icon/minus.svg"
                  alt=""
                />
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="border-none bg-transparent"
                onClick={() => onIncreaseQuantity(item)}
              >
                <img
                  className="bg-transparent"
                  src="../../../Icon/plus.svg"
                  alt=""
                />
              </button>
              <span className="font-roboto text-14 font-normal text-black ml-[14px] ">
                {formatPrice(item.price)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
