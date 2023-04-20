import React from "react";
import menuDrinksImg from "../../../assets/images/menupage/menudrinks.jpg";

const MenuDrinks = () => {
  return (
    <React.Fragment>
      <div id="drinks" className=" relative py-10">
        <div className="container mx-auto">
          <div className=" absolute left-[40%] top-[0] -z-10 h-[150px] w-[150px] bg-avocadoBg bg-contain bg-no-repeat md:h-[150px] md:w-[150px]"></div>
          <h2 className=" text-center text-[32px] sm:text-[48px]">
            Pastries & Drinks
          </h2>
          <p className=" text-center">
            This is a section of your menu. Give your section a brief
            description
          </p>

          <div className=" mt-10 grid grid-cols-1 justify-items-center gap-10 self-center sm:grid-cols-2 ">
            <div className=" self-center justify-self-center">
              <div className=" max-w-[280px] overflow-hidden lg:max-w-[400px]">
                <img
                  className=" max-w-[280px] transition-all duration-500 hover:scale-125 lg:max-w-[400px]"
                  src={menuDrinksImg}
                  alt="Starters"
                />
              </div>
            </div>
            <div className=" flex max-w-[380px] flex-col items-center justify-between">
              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $158
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Wine Pairing
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $168
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Natural Wine Pairing
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>

              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $90
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Whisky Flyer
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

export default MenuDrinks;
