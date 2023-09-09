import React from 'react';

const Header = ({ totalItems }) => {
  return (
    <div className="w-full h-[81px] flex justify-center items-center border-b-[1px] border-b-[#CFCFCF]">
      <div className="flex justify-between items-center w-[90%] h-[32px]">
        <div className="logo">
          <img src="../../../Icon/Logo.svg" alt="" />
        </div>
        <div className="basket relative">
          <div className="flex gap-x-[32px]">
            <img src="../../../Icon/Vector.svg" alt="" />
            <svg
              className=" DesktopHD:hidden  Desktop:hidden  Tablet:block Mobile:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
            >
              <rect width="29" height="2" fill="black" />
              <rect y="10" width="29" height="2" fill="black" />
              <rect
                x="0.5"
                y="20.5"
                width="28"
                height="1"
                fill="black"
                stroke="black"
              />
            </svg>
          </div>
          {totalItems > 0 && (
            <div className="rounded-full bg-blue-500 text-white text-xs w-6 h-6 flex items-center justify-center absolute -top-1 -right-1">
              {totalItems}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
