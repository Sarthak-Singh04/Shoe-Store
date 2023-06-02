import React from "react";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp"></img>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            let's go
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377; $32
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    p.subtitle
                </div>
      </div>
    </div>
  );
};

export default CartItem;
