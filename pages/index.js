import Head from "next/head";
import Image from "next/image";
import DiscountCarouselSection from "../sections/discountCarouselSection";
import FlashSaleSection from "../sections/flashSaleSection";

export default function Home() {
  return (
    <>
      <FlashSaleSection />
      <DiscountCarouselSection />
    </>
  );
}
