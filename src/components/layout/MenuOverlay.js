import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed left-0 top-0 z-20 flex h-screen w-full transform items-center justify-around bg-opacity-100 bg-overlayBg bg-cover bg-center bg-no-repeat p-10 pt-10 text-white transition-all delay-100 duration-300 sm:pt-28 ${
        navbarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <ul className="flex flex-col items-start">
        <Link
          className=" mb-3 font-primary text-[26px] hover:text-[#9CAA00] sm:mb-5 sm:text-[32px] "
          to="/"
          onClick={() => {
            setNavbarOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          className=" mb-3 font-primary text-[26px] hover:text-[#9CAA00] sm:mb-5 sm:text-[32px]"
          to="/menu"
          onClick={() => {
            setNavbarOpen(false);
          }}
        >
          Menu
        </Link>
        <Link
          className=" mb-3 font-primary text-[26px] hover:text-[#9CAA00] sm:mb-5 sm:text-[32px]"
          to="/contact"
          onClick={() => {
            setNavbarOpen(false);
          }}
        >
          Contact
        </Link>
        <Link
          className=" mb-3 font-primary text-[26px] hover:text-[#9CAA00] sm:mb-5 sm:text-[32px]"
          to="/about"
          onClick={() => {
            setNavbarOpen(false);
          }}
        >
          About
        </Link>
      </ul>
      <div className=" hidden sm:block">
        <div className=" mb-5 max-w-[210px]">
          <h5 className=" mb-3 text-[22px]">Contact</h5>
          <p className=" text-[18px]">+1+86 852 346 000</p>
          <p className=" mb-2 text-[18px] ">info@foodzero.com</p>
          <p className=" text-[18px]">
            1959 Sepulveda Blvd. Culver City, CA, 90230
          </p>
        </div>
        <div className=" flex items-center gap-7">
          <a
            target="blank"
            className=" hover:opacity-60"
            href="https://www.instagram.com/"
          >
            <img width={28} src={instagram} alt="Instagram" />
          </a>
          <a
            target="blank"
            className=" hover:opacity-60"
            href="https://twitter.com/"
          >
            <img width={28} src={twitter} alt="Twitter" />
          </a>
          <a
            target="blank"
            className=" hover:opacity-60"
            href="https://www.facebook.com/"
          >
            <img width={28} src={facebook} alt="Facebook" />
          </a>
          <a
            target="blank"
            className=" hover:opacity-60"
            href="https://www.youtube.com/"
          >
            <img width={28} src={youtube} alt="YouTube" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MenuOverlay;
