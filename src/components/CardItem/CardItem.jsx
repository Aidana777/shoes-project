import React from 'react';

const CardItem = ({ card, onAddToBasket }) => {
  const handleAddToBasket = () => {
    onAddToBasket(card);
  };

  return (
    <div className="w-[250px] h-[300px]     font-roboto  rounded-[3px] border-[1px] border-[#E7E7E7] ">
      <div className="w-[249px] h-[180px] flex justify-center items-center">
        <img className="w-[228px] h-[130px]" src={card.image} alt="" />
      </div>
      <div className="mt-[12px] ml-[15px] flex flex-col gap-y-[12px]">
        <h2 className=" w-[193px] font-roboto text-14 font-semibold text-black leading-normal ">
          {card.name}
        </h2>
        <div className=" flex items-center gap-[15px]">
          <button
            className="w-[40px] h-[40px] xl rounded-3 bg-blue-500  rounded-[3px] flex justify-center items-center"
            onClick={handleAddToBasket}
          >
            <img className="" src="../../../Icon/Cart.svg" alt="Card" />
          </button>
          <p className="w-max text-black font-roboto  font-normal ">
            {card.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
