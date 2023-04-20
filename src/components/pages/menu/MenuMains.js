import React from "react";
import menuMainsImg from "../../../assets/images/menupage/menuMains.jpg";

const MenuMains = () => {
  return (
    <React.Fragment>
      <div id="mains" className=" py-10">
        <div className="container mx-auto">
          <h2 className=" text-center text-[32px] sm:text-[48px]">Mains</h2>
          <p className=" text-center">
            This is a section of your menu. Give your section a brief
            description
          </p>

          <div className=" mt-10 grid grid-cols-1 justify-items-center gap-10 self-center sm:grid-cols-2 ">
            <div className=" order-2 flex max-w-[380px] flex-col items-center justify-between sm:order-1">
              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $20
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Deep Sea Snow White Cod Fillet
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $22
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Steak With Rosemary Butter
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>

              <div className="menuItem mb-5 sm:mb-0">
                <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                  $20
                </h4>
                <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                  Steaks with Grilled Kimchi
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className=" order-1 self-center justify-self-center sm:order-2">
              <div className=" max-w-[280px] overflow-hidden lg:max-w-[400px]">
                <img
                  className=" max-w-[280px] transition-all duration-500 hover:scale-125 lg:max-w-[400px]"
                  src={menuMainsImg}
                  alt="Starters"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuMains;
