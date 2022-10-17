import Link from "next/link";
import Image from "next/Image";
import styles from "../styles/banner.module.css";
import banner1 from "../public/assets/images/banner-1.webp";
import banner2 from "../public/assets/images/banner-2.webp";
import banner3 from "../public/assets/images/banner-3.webp";
import banner4 from "../public/assets/images/banner-4.webp";
import banner5 from "../public/assets/images/banner-5.webp";
import banner6 from "../public/assets/images/banner-6.webp";

function Banner() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5">
        <div className="col-span-full sm:col-span-5 relative overflow-hidden">
          <Link href="/">
            <Image src={banner1} alt="banner-1" />
          </Link>
          <div className="absolute -start-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 hover:animate-shine"></div>
        </div>
        <div className="col-span-1 sm:col-span-2 relative overflow-hidden  hover:animate-shine">
          <Link href="/">
            <Image src={banner2} alt="banner-2" />
          </Link>
          <div className="absolute -start-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40"></div>
        </div>
        <div className="col-span-1 sm:col-span-2 relative overflow-hidden">
          <Link href="/">
            <Image src={banner3} alt="banner-3" />
          </Link>
          <div className="absolute -start-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40"></div>
        </div>
        <div className="col-span-1 sm:col-span-2 relative overflow-hidden">
          <Link href="/">
            <Image src={banner4} alt="banner-4" />
          </Link>
          <div className="absolute -start-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40"></div>
        </div>
        <div className="col-span-1 sm:col-span-2 relative overflow-hidden">
          <Link href="/">
            <Image src={banner5} alt="banner-5" />
          </Link>
          <div className="absolute -start-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40"></div>
        </div>
        <div className="col-span-full sm:col-span-5 relative overflow-hidden">
          <Link href="/">
            <Image src={banner6} alt="banner-6" />
          </Link>
          <div className="absolute -start-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
