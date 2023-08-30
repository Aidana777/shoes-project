import React from 'react';

const Header = ({ totalItems }) => {
  return (
    <div>
      <div className="border-b h-[81px] flex justify-between items-center">
        <div className="flex justify-between items-center w-[1580px] h-[32px] mx-auto ">
          <div className="logo">
            <img src="../../../Icon/Logo.svg" alt="" />
          </div>
          <div className="basket relative">
            <img src="../../../Icon/Vector.svg" alt="" />
            {totalItems > 0 && (
              <div className="rounded-full bg-blue-500 text-white text-xs w-6 h-6 flex items-center justify-center absolute -top-1 -right-1">
                {totalItems}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
