import React from 'react'

const CardItem = ({ card, onAddToBasket }) => {

  const handleAddToBasket = () => {
    onAddToBasket(card);
  };

  
  return (
    <div className='border rounded-3 border-gray-300  w-[250px] h-[300px]  font-roboto '>
      <img className='pt-[29px] pr-[10px] pb-[29px] pl-[10px]' src={card.image} alt="" />
      <h2 className='font-roboto text-14 font-semibold text-black leading-normal ml-[15px] w-[165px] mt-[12px] h-[32px]'>{card.name}</h2>
      <div className='flex mt-[13px] items-center ml-[15px]'>
        <p className='w-[75px] text-black font-roboto text-14 font-normal '>{card.price}</p>
        <button className="w-[40px] h-[40px] rounded-3 bg-blue-500 flex justify-center items-center ml-[15px]"
          onClick={handleAddToBasket}
        >
          <img className="" src="../../../Icon/Cart.svg" alt="Card" />
          
        </button>
      </div>

    </div>
  )
}

export default CardItem