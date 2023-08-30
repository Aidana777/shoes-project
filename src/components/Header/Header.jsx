import React from 'react';

const Header = () => {
  return (
 <div>
     <div className='border-b h-[81px] flex justify-between items-center' >
      <div className="flex justify-between items-center w-[1580px] h-[32px] mx-auto ">
        <div className="logo">
          <img src="../../../Icon/Logo.svg" alt="" />
        </div>
        <div className="basket">
          <img src="../../../Icon/Vector.svg" alt="" />
        </div>
      </div>
    </div>
 </div>
  );
}

export default Header;

