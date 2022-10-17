import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import search from "../public/assets/icons/search.svg";
import dropdown from "../public/assets/icons/dropdown.svg";
import basket from "../public/assets/icons/basket.svg";
import ABD from "../public/assets/icons/abd-flag.svg";
import dropdownCouple from "../public/assets/icons/dropdown-couple.svg";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="p-10 flex justify-between items-center">
        <div className="flex">
          <div className={`${styles.burger} mr-5 hidden md:flex`}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <ul className="navigation flex mr-auto hidden lg:flex">
          <li className="nav-item text-sm xl:text-base px-3 xl:px-4">
            Men wear
            <Image src={dropdown} alt="dropdown-svg" />
          </li>
          <li className="nav-item text-sm xl:text-base px-3 xl:px-4">
            Women wear
            <Image src={dropdown} alt="dropdown-svg" />
          </li>
          <li className="nav-item text-sm xl:text-base px-3 xl:px-4">Search</li>
          <li className="nav-item text-sm xl:text-base px-3 xl:px-4">Shops</li>
        </ul>
        <div className="language flex items-center gap-x-2 border rounded-lg border-gray-300 p-2">
          <Image src={ABD} alt="ABD-svg" />
          English-EN
          <Image src={dropdownCouple} alt="dropdown-svg" />
        </div>
        <div className="navbar-right flex items-center hidden md:flex">
          <div className="search px-3">
            <Image src={search} alt="search-svg" />
          </div>
          <div className="sign-in px-3">Sign-in</div>
          <div className="basket px-3">
            <Image src={basket} alt="basket-svg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
