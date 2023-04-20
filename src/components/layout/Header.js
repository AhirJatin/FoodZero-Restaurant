import React from "react";
import Logo from "../../assets/images/homepage/Logo.svg";
import { Link } from "react-router-dom";

const Header = ({ navbarOpen, setNavbarOpen, reservationElement }) => {
  return (
    <React.Fragment>
      <div className=" flex items-center justify-between bg-[#233000] px-5 py-5 text-white">
        <div>
          <Link to="/">
            <img
              className=" max-w-[100px] sm:max-w-[200px]"
              src={Logo}
              alt="FoodZero Logo"
            />
          </Link>
        </div>

        <button
          className="relative z-50 flex h-10 w-10 text-white focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="absolute left-1/2 top-1/2 flex w-10 -translate-x-1/2 -translate-y-1/2 transform gap-2">
            <span
              className={` absolute h-1 w-10 transform bg-white transition duration-300 ease-in-out ${
                navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={` absolute h-1 transform bg-white transition-all duration-200 ease-in-out ${
                navbarOpen ? "w-0 opacity-50" : "w-10 opacity-100 delay-200"
              }`}
            ></span>
            <span
              className={`absolute h-1 w-10 transform bg-white transition duration-300 ease-in-out ${
                navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        <div className=" flex items-center gap-5">
          <p className=" hidden text-[18px] sm:block">+86 8*2 *** 000</p>
          <button
            onClick={() => {
              reservationElement &&
                reservationElement.scrollIntoView({ behavior: "smooth" });
            }}
            className=" border-2 border-white px-3 py-1 text-[12px] hover:bg-[#5E6600] sm:px-5 sm:py-3 sm:text-[16px]"
          >
            Reservations
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
