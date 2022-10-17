import Image from "next/image";
import shoes from "../public/assets/images/shoes.webp";

const FlashSale = () => {
  return (
    <div className="flashSaleBox ">
      <div class="flashSaleBox--top mb-3 md:mb-3.5">
        <Image src={shoes} className="rounded-md" />
      </div>
      <div class="flashSaleBox--bottom">
        <h2 className="font-semibold mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">Adidas Shoes Black</h2>
        <p className="text-xs lg:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px] text-slate-500">Men Black top sleeveless gown</p>
        <div class="price text-sm sm:text-base mt-1.5 space-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3">
          <span className="inline-block">$45.00</span>
          <del className="sm:text-base font-normal text-slate-500">$99.99</del>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
