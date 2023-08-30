import React, { useState } from 'react';
import cards from '../../db.json';
import CardItem from '../CardItem/CardItem';
import OrderSummary from '../SideRight/OrderSummary';
import RightSidebar from '../SideRight/RightSidebar';

const Card = () => {
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToBasket = (item) => {
    const existingItem = basketItems.find(basketItem => basketItem.id === item.id);
    if (existingItem) {
      handleIncreaseQuantity(existingItem);
    } else {
      const newItem = { ...item, quantity: 1 };
      setBasketItems([...basketItems, newItem]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    const updatedItems = basketItems.map(basketItem =>
      basketItem.id === item.id ? { ...basketItem, quantity: basketItem.quantity + 1 } : basketItem
    );
    setBasketItems(updatedItems);
  };

  const handleDecreaseQuantity = (item) => {
    const updatedItems = basketItems.map(basketItem =>
      basketItem.id === item.id && basketItem.quantity > 1
        ? { ...basketItem, quantity: basketItem.quantity - 1 }
        : basketItem
    );
    setBasketItems(updatedItems);
  };

  const handleRemoveItem = (item) => {
    const updatedItems = basketItems.filter(basketItem => basketItem.id !== item.id);
    setBasketItems(updatedItems);
  };

  return (
    <div className="flex-1 flex justify-center items-start mt-10 font-roboto mx-auto">
    <div className="w-full max-w-[1200px] px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map(card => (
          <CardItem
            key={card.id}
            card={card}
            onAddToBasket={handleAddToBasket}
          />
        ))}
      </div>
    </div>
    <div className="flex flex-col ml-4 sm:ml-8 md:ml-10">
      <RightSidebar
        basketItems={basketItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <div className="mt-8">
        <OrderSummary basketItems={basketItems} />
      </div>
    </div>
  </div>
  );
}

export default Card;

