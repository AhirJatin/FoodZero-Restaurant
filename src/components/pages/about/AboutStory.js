import React from "react";
import aboutStoryImg from "../../../assets/images/aboutpage/aboutOurStory.jpg";

const AboutStory = () => {
  return (
    <React.Fragment>
      <div className=" relative py-10 lg:pb-10 lg:pt-20">
        <div className="container mx-auto">
          <div className=" absolute left-0 top-[10px] -z-10 hidden h-[150px] w-[150px] bg-tomatoBg bg-contain bg-no-repeat sm:left-[40%] sm:block lg:h-[250px] lg:w-[250px]"></div>
          <div className=" flex flex-col items-center justify-around gap-10 sm:mb-20 sm:flex-row sm:gap-20 xl:gap-0">
            <div className=" order-2 self-center text-[18px] sm:order-1 sm:self-end md:text-[22px]">
              <h2 className=" text-[32px] sm:text-[48px]">Our Story</h2>
              <p className=" max-w-[600px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.
              </p>
            </div>

            <div className=" order-1 max-w-[300px] overflow-hidden sm:order-2 md:max-w-[400px] lg:max-w-[500px]">
              <img
                className=" max-w-[300px] transition-all duration-500 hover:scale-125 md:max-w-[400px] lg:max-w-[500px]"
                src={aboutStoryImg}
                alt="Dinning Table"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutStory;
