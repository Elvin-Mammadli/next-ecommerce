import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import sw1 from "../public/assets/images/sw1.webp";
import sw2 from "../public/assets/images/sw2.webp";
import sw3 from "../public/assets/images/sw3.webp";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const DiscountCarouselSection = () => {
  return (
    <div class="discountSlider mb-12 md:mb-14 xl:mb-16">
      <Swiper
        spaceBetween={25}
        loop={true}
        modules={[Pagination]}
        pagination={true}
        centeredSlides={true}
        slidesPerView={2}
      >
        <SwiperSlide>
          <Image src={sw1} alt="travel baggage 60% off" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sw2} alt="travel baggage 60% off" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sw3} alt="travel baggage 60% off" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscountCarouselSection;
