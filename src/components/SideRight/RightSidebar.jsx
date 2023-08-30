import React from 'react';

const RightSidebar = ({ basketItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
  const formatPrice = (price) => {
    return ` ${price}`;
  };

  return (
    <div className="w-[500px] ml-[170px] pr-[40px] pl-[40px] mt-4 border-l  border-gray-300 ">
    <h2 className='font-roboto text-18 font-bold text-black'>My basket</h2>
    <div >
      {basketItems.map(item => (
        <div key={item.id} className='flex items-center justify-between mt-[40px]'>
            <img className='w-[90px] h-[51px]' src={item.image} alt='' />
            <div className='flex flex-col ml-2'>
              <div className='flex items-center justify-between mb-1'>
                <span className='w-[202.815px]  font-roboto text-14 font-normal text-black'>{item.name}</span>
                <button className='border-none bg-transparent' onClick={() => onRemoveItem(item)}>
                  <img src="../../../Icon/delete.svg" alt="" />
                </button>
              </div>
              <div className='flex items-center '>
                <button className='border-none bg-transparent' onClick={() => onDecreaseQuantity(item)}> 
                <img className='bg-transparent' src="../../../Icon/minus.svg" alt="" />
                 </button>
                <span className='mx-2'>{item.quantity}</span>
                <button className='border-none bg-transparent' onClick={() => onIncreaseQuantity(item)}> 
                <img className='bg-transparent' src="../../../Icon/plus.svg" alt="" />
                 </button>
                <span className='font-roboto text-14 font-normal text-black ml-[14px] '>{formatPrice(item.price)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;

