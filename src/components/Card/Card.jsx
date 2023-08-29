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

  // Рассчитываем суммы на основе содержимого корзины
  const calculateSubtotal = () => {
    return basketItems.reduce((total, item) => total + (item.quantity * parseInt(item.price.replace(/\$| /g, ''))), 0);
  };

  const tax = 100;
  const shipping = 150;
  const total = calculateSubtotal() + tax + shipping;

  return (
    <div className='flex justify-center items-start mt-[50px]'>
      <div className='h-[650px] w-[890px]'>
        <div className='grid grid-cols-3 gap-4'>
          {cards.map(card => (
            <CardItem
              key={card.id}
              card={card}
              onAddToBasket={handleAddToBasket}
            />
          ))}
        </div>
      </div>
      <div className=''>
        <RightSidebar
          basketItems={basketItems}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <OrderSummary
          subtotal={calculateSubtotal()}
          tax={tax}
          shipping={shipping}
          total={total}
        />
      </div>
    </div>
  );
}

export default Card;


