import React, { useState } from 'react';
import cards from '../../db.json';
import CardItem from '../CardItem/CardItem';
import OrderSummary from '../SideRight/OrderSummary';
import RightSidebar from '../SideRight/RightSidebar';

const Card = () => {
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToBasket = (item) => {
    const existingItem = basketItems.find(
      (basketItem) => basketItem.id === item.id
    );
    if (existingItem) {
      handleIncreaseQuantity(existingItem);
    } else {
      const newItem = { ...item, quantity: 1 };
      setBasketItems([...basketItems, newItem]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    const updatedItems = basketItems.map((basketItem) =>
      basketItem.id === item.id
        ? { ...basketItem, quantity: basketItem.quantity + 1 }
        : basketItem
    );
    setBasketItems(updatedItems);
  };

  const handleDecreaseQuantity = (item) => {
    const updatedItems = basketItems.map((basketItem) =>
      basketItem.id === item.id && basketItem.quantity > 1
        ? { ...basketItem, quantity: basketItem.quantity - 1 }
        : basketItem
    );
    setBasketItems(updatedItems);
  };

  const handleRemoveItem = (item) => {
    const updatedItems = basketItems.filter(
      (basketItem) => basketItem.id !== item.id
    );
    setBasketItems(updatedItems);
  };

  return (
    <div className="w-full  h-max flex ">
      <div className="DesktopHD:w-[1230px] pb-[230px]  pt-[60px]  flex justify-center border-r-[1px]  border-[#CFCFCF]   ">
        <div className=" DesktopHD:w-[90%] Desktop:w-[98%] h-max flex flex-wrap gap-y-[50px] gap-x-[70px] justify-center fontText ">
          {cards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              onAddToBasket={handleAddToBasket}
            />
          ))}
        </div>
      </div>
      <div className="w-[1px] h-full bg-[#CFCFCF]  Tablet:hidden " />
      <div className=" w-[410px]  Tablet:hidden">
        <RightSidebar
          basketItems={basketItems}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <div className="w-[100%] h-[1px] bg-[#CFCFCF] mb-[40px]"></div>
        <OrderSummary basketItems={basketItems} />
      </div>
    </div>
  );
};

export default Card;
