import React from "react";
import Image from "../../../assets/images/homepage/HomeCook-transformed.png";

const CookSection = () => {
  return (
    <React.Fragment>
      <div className=" relative bg-[#EBF0E4] pb-10 pt-10 sm:pb-0 sm:pt-20 md:pt-36">
        <div className="container mx-auto">
          <div className=" absolute bottom-0 right-[50px] hidden h-[140px] w-[140px]  bg-homeCookLeafBg bg-contain bg-no-repeat sm:block md:right-[80px] md:h-[200px] md:w-[200px] lg:right-[100px] lg:h-[280px] lg:w-[280px] xl:right-[10px] xl:h-[300px] xl:w-[300px]"></div>
          <div className=" absolute left-[50px] top-[40px] z-10  h-[120px] w-[120px] scale-x-[-1]  bg-homeCookLeafBg bg-contain bg-no-repeat md:left-[30px] md:h-[170px] md:w-[170px] lg:left-[50px] lg:h-[200px] lg:w-[200px] xl:left-[50px] xl:h-[220px] xl:w-[220px]"></div>
          <div className=" grid grid-cols-1 gap-5  sm:grid-cols-2">
            <div className=" z-20">
              <img className="w-[400px] sm:w-[500px]" src={Image} alt="cook" />
            </div>
            <div>
              <h2 className=" text-[28px] sm:text-[32px] md:text-[48px]">
                Excellent cook
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CookSection;
