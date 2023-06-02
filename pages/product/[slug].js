import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import ProductShow from '@/components/Productdetails';
import Wrapping from '@/components/Wrapping';
import RelatedProduct from '@/components/RelatedProduct';

const ProductDetails = () => {
  return (
    <div className="w-full md:py-10">
      <Wrapping>
        <div className="flex flex-col lg:flex-row md:px-10 lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductShow />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">Jordar Retro</div>
            <div className="text-lg font-semibold mb-5">Men's Golf Shoes</div>
            <div className="text-lg font-semibold">MRP: $50.00</div>
            <div className="text-md font-medium text-black/[0.5]">inc. of taxes</div>
            <div className="text-md font-medium text-black/[0.5]">(Also inc. of applicable duties)</div>
            <div className="mb-20 mt-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5]">Select Guide</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 11
                </div>
              </div>
              <button className="w-full mt-10 py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}
              {/* WISHLIST BUTTON START */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* WISHLIST BUTTON END */}
            </div>
          </div>
        </div>
        <RelatedProduct />
      </Wrapping>
    </div>
  );
};

export default ProductDetails;
