import React from "react";
import MenuStarters from "../../../assets/images/homepage/MenuStarters.jpg";
import MenuMains from "../../../assets/images/homepage/MenuMains.jpg";
import MenuSoups from "../../../assets/images/homepage/MenuSoups.jpg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const CaloriesSection = () => {
  return (
    <div className=" py-10">
      <div className=" container mx-auto">
        <div className=" text-center">
          <h2 className=" mb-3 text-[28px] sm:text-[32px] md:text-[48px]">
            Calories Energy Balance
          </h2>
          <p className=" mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className=" grid grid-cols-1 justify-items-center gap-10  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className=" group relative overflow-hidden">
              <img
                className=" max-w-[200px] transition-all duration-500 group-hover:scale-125 sm:max-w-[300px]"
                src={MenuStarters}
                alt="Menu Starters"
              />
              <div className=" absolute left-5 top-5 z-10 sm:left-10">
                <h4 className=" text-[22px] font-bold">Starters</h4>
              </div>
              <div className=" absolute right-8 top-7 z-10 sm:right-12">
                <Link
                  to="/menu"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <img
                    className=" w-[30px] text-black"
                    src={arrowRight}
                    alt="Arrow Right"
                  />
                </Link>
              </div>
            </div>

            <div className=" group relative overflow-hidden">
              <img
                className=" max-w-[200px] transition-all duration-500 group-hover:scale-125 sm:max-w-[300px]"
                src={MenuMains}
                alt="Menu Starters"
              />
              <div className=" absolute left-5 top-5 z-10 sm:left-10">
                <h4 className=" text-[22px] font-bold">Mains</h4>
              </div>
              <div className=" absolute right-8 top-7 z-10 sm:right-12">
                <Link
                  to="/menu"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <img
                    className=" w-[30px] text-black"
                    src={arrowRight}
                    alt="Arrow Right"
                  />
                </Link>
              </div>
            </div>

            <div className=" group relative overflow-hidden">
              <img
                className=" max-w-[200px] transition-all duration-500 group-hover:scale-125 sm:max-w-[300px]"
                src={MenuSoups}
                alt="Menu Starters"
              />
              <div className=" absolute left-5 top-5 z-10 sm:left-10">
                <h4 className=" text-[22px] font-bold">Soups</h4>
              </div>
              <div className=" absolute right-8 top-7 z-10 sm:right-12">
                <Link
                  to="/menu"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <img
                    className=" w-[30px] text-black"
                    src={arrowRight}
                    alt="Arrow Right"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesSection;
