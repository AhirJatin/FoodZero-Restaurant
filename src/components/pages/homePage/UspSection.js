import React from "react";
import uspFish from "../../../assets/images/homepage/usp_fish.jpg";
import uspVegetable from "../../../assets/images/homepage/usp_vegetable.jpg";
import uspLemon from "../../../assets/images/homepage/usp_lemon.jpg";

const UspSection = () => {
  return (
    <React.Fragment>
      <div className=" py-10">
        <div className="container mx-auto">
          <div className=" grid gap-10  md:grid-cols-3 md:gap-5">
            <div className=" flex flex-col items-center justify-center text-center">
              <img
                className=" mb-3 max-w-[150px] md:mb-5 lg:max-w-[200px] "
                src={uspFish}
                alt="Fish"
              />
              <h4 className=" mb-2 text-[28px]">Premium Quality</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>

            <div className=" flex flex-col items-center justify-center text-center">
              <img
                className=" mb-3 max-w-[150px] md:mb-5 lg:max-w-[200px]"
                src={uspVegetable}
                alt="Fish"
              />
              <h4 className=" mb-2 text-[28px]">Seasonal Vegetables</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>

            <div className=" flex flex-col items-center justify-center text-center">
              <img
                className="mb-3 max-w-[150px] md:mb-5 lg:max-w-[200px]"
                src={uspLemon}
                alt="Fish"
              />
              <h4 className=" mb-2 text-[28px]">Fresh Fruit</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UspSection;
