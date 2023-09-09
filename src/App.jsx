import React, { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

const App = () => {
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

  const totalItems = basketItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className=" w-full h-screen">
      <Header totalItems={totalItems} />
      <Card
        basketItems={basketItems}
        handleAddToBasket={handleAddToBasket}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default App;
