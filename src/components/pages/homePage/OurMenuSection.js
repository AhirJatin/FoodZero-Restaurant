import React from "react";

const OurMenuSection = () => {
  return (
    <React.Fragment>
      <div className=" relative py-10">
        <div className=" absolute right-0 top-[-40px] -z-10 h-[500px] w-[500px] bg-homeOurMenuBg bg-cover bg-no-repeat"></div>
        <div className=" container mx-auto">
          <h2 className=" text-[32px] sm:text-[48px]">Our Menu</h2>
          <p>
            This is a section of your menu. Give your section a brief
            description
          </p>
          <div className=" grid grid-cols-1 gap-10  py-10 sm:grid-cols-2">
            <div className="menuItem">
              <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                $20
              </h4>
              <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                Deep Sea Snow White Cod Fillet
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className="menuItem">
              <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                $22
              </h4>
              <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                Steak With Rosemary Butter
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className="menuItem">
              <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                $18
              </h4>
              <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                Cucumber Salad
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className="menuItem">
              <h4 className=" border-b-2 border-dashed border-black pb-3 text-right text-[18px] font-bold sm:text-[22px]">
                $90
              </h4>
              <h3 className=" mb-3 text-[28px] sm:text-[32px]">
                Natural Wine Pairing
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurMenuSection;
