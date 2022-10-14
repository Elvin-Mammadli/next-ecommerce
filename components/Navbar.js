import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
      <nav className="w-full">
        <div className="p-10 flex justify-between items-center">
          <div className={`${styles.burger} mr-5`}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className="logo">
            <Image src={logo} alt="logo"/>
          </div>
          <ul className="navigation flex mr-auto hidden lg:flex">
            <li className="nav-item text-sm xl:text-base px-3 xl:px-4">Men wear</li>
            <li className="nav-item text-sm xl:text-base px-3 xl:px-4">Women wear</li>
            <li className="nav-item text-sm xl:text-base px-3 xl:px-4">Search</li>
            <li className="nav-item text-sm xl:text-base px-3 xl:px-4">Shops</li>
          </ul>
            <div className="language">
              English
            </div>
          <div className="navbar-right flex">
            <div className="search">
              <i>search</i>
            </div>
            <div className="sign-in">
              Sign-in
            </div>
            <div className="basket">
              <i>basket</i>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
