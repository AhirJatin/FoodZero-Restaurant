import React from "react";
import cookedMeatCeramicPlate from "../../../assets/images/homepage/meat-on-ceramicplate.jpg";
import spice1 from "../../../assets/images/homepage/spices1.jpg";
import spice2 from "../../../assets/images/homepage/spices2.jpg";
import spice3 from "../../../assets/images/homepage/spices3.jpg";
import soup from "../../../assets/images/homepage/soup.jpg";
import saltGrinders from "../../../assets/images/homepage/salt-grinders.jpg";

const BannerSection = () => {
  return (
    <React.Fragment>
      <div className="bg-[#233000] py-10 text-white">
        <div className=" container mx-auto">
          <div className=" grid sm:grid-cols-6">
            <div className=" z-10 sm:col-span-4 sm:col-start-1 sm:row-start-1">
              <h2 className=" text-[32px] sm:mb-5 sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px]">
                Healthy Eating is important part of lifestyle
              </h2>
              <p className=" text-[16px] sm:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>
            <div className=" hidden sm:col-span-3 sm:col-start-4 sm:row-start-1 sm:block">
              <img
                src={cookedMeatCeramicPlate}
                alt="Cooked Meat on white ceramic plate"
              />
            </div>
            <div className=" hidden max-w-[150px] sm:col-start-3 sm:row-start-1 sm:block sm:self-end">
              <img className=" rounded-full" src={spice1} alt="Spices" />
            </div>
            <div className=" hidden max-w-[150px] sm:col-start-4 sm:row-start-1 sm:block sm:self-end">
              <img className=" rounded-full" src={spice2} alt="Spices" />
            </div>
            <div className=" hidden max-w-[150px] sm:col-start-5 sm:row-start-1 sm:block sm:self-end">
              <img className=" rounded-full" src={spice3} alt="Spices" />
            </div>
          </div>

          <div className="flex flex-col justify-between pb-10  pt-20 sm:flex-row">
            <div className=" mb-10 flex flex-col items-center sm:mb-0 sm:items-start">
              <img
                className=" mb-5 max-w-[300px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[500px] "
                src={soup}
                alt="Vegetable Soup"
              />
              <div className=" sm:max-w-[180px] md:max-w-[400px]">
                <h3 className=" mb-2 text-[22px] sm:mb-0 md:text-[32px]">
                  Start to plan your diet today
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-center sm:items-start">
              <p className=" mb-5 sm:max-w-[180px] md:max-w-[230px] lg:max-w-[280px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
              <img
                className=" max-w-[250px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[320px]"
                src={saltGrinders}
                alt="Salt Grinders"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BannerSection;
