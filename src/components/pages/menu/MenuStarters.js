import React from "react";
import menuStartersImg from "../../../assets/images/menupage/menuStarters.jpg";

const MenuStarters = () => {
  return (
    <React.Fragment>
      <div id="starters" className=" relative py-10">
        <div className="container mx-auto">
          <div className=" absolute right-0 top-[-40px] -z-10 h-[150px] w-[150px] bg-blueberryBg bg-contain bg-no-repeat md:h-[220px] md:w-[220px]"></div>
          <h2 className=" text-center text-[32px] sm:text-[48px]">Starters</h2>
          <p className=" text-center">
            This is a section of your menu. Give your section a brief
            description
          </p>

          <div className=" mt-10 grid grid-cols-1 justify-items-center gap-10 self-center sm:grid-cols-2 ">
            <div className=" self-center justify-self-center">
              <div className=" max-w-[280px] overflow-hidden lg:max-w-[400px]">
                <img
                  className=" max-w-[280px] transition-all duration-500 hover:scale-125 lg:max-w-[400px]"
                  src={menuStartersImg}
                  alt="Starters"
                />
              </div>
            </div>
            <div className=" flex max-w-[380px] flex-col items-center justify-between">
              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $20
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Grilled Okra and Tomatoes
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $18
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Cucumber Salad
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>

              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $12
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Basil Pancakes
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuStarters;
