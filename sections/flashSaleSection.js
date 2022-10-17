import React from "react";
import FlashSale from "../components/flashSale";

const FlashSaleSection = () => {
  return (
    <div class="flashSale w-full mx-auto px-4 md:px-8 2xl:px-16">
      <div className="w-full mx-auto p-5 lg:p-7 border rounded-md mb-12 md:mb-14 xl:mb-16">
        <div class="flex justify-between mb-6">
          <h3 className="text-heading text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold">
            Flash Sale
          </h3>
          <div class="countdown flex items-center space-x-2.5 md:space-x-1.5">
            <div class="flex flex-col text-10px md:text-xs md:leading-4 text-center uppercase">
              <span className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-md bg-black text-xs text-white md:text-sm mb-1">
                134
              </span>
              days
            </div>
            <div class="flex flex-col text-10px md:text-xs md:leading-4 text-center uppercase">
              <span className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-md bg-black text-xs text-white md:text-sm mb-1">
                13
              </span>
              hours
            </div>
            <div class="flex flex-col text-10px md:text-xs md:leading-4 text-center uppercase">
              <span className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-md bg-black text-xs text-white md:text-sm mb-1">
                48
              </span>
              mins
            </div>
            <div class="flex flex-col text-10px md:text-xs md:leading-4 text-center uppercase">
              <span className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-md bg-black text-xs text-white md:text-sm mb-1">
                37
              </span>
              secs
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:lg:gap-y-6 2xl:gap-y-8">
          <FlashSale />
          <FlashSale />
          <FlashSale />
          <FlashSale />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
