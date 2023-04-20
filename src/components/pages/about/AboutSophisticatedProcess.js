import React from "react";
import aboutSliceImg from "../../../assets/images/aboutpage/aboutSlice.jpg";
import aboutPickledImg from "../../../assets/images/aboutpage/aboutPickled.jpg";
import aboutBakeImg from "../../../assets/images/aboutpage/aboutBake.jpg";

const AboutSophisticatedProcess = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto">
        <div>
          <h2 className=" mb-10 text-center text-[32px] sm:text-[48px]">
            Sophisticated Process
          </h2>

          <div className=" flex flex-col items-center justify-center gap-10 sm:flex-row">
            <div className=" max-w-[300px] overflow-hidden">
              <img
                className=" max-w-[300px] transition-all duration-500 hover:scale-125"
                src={aboutSliceImg}
                alt="Sliced Meat"
              />
            </div>
            <div>
              <h2 className=" text-[24px] md:text-[32px]">01.Slice</h2>
              <p className=" max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc. Convallis pellentesque quis
                fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec
                nam etiam.
              </p>
            </div>
          </div>

          <div className=" mt-10 flex flex-col items-center justify-around gap-10 sm:flex-row sm:gap-5 md:gap-0">
            <div className=" order-2 flex flex-col items-center justify-center sm:order-1">
              <h2 className=" order-2 text-[24px] sm:order-1 md:text-[32px]">
                03.Bake
              </h2>
              <p className=" order-3 mb-5 max-w-[500px] sm:order-2 sm:max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </p>
              <div className=" order-1 max-w-[300px] overflow-hidden sm:order-3">
                <img
                  className="mb-5 max-w-[300px] transition-all duration-500 hover:scale-125 sm:mb-0"
                  src={aboutBakeImg}
                  alt="Sliced Meat"
                />
              </div>
            </div>

            <div className=" order-1 flex flex-col items-center justify-center sm:order-2">
              <div className="max-w-[300px] overflow-hidden">
                <img
                  className="mb-5 max-w-[300px] transition-all duration-500 hover:scale-125"
                  src={aboutPickledImg}
                  alt="Sliced Meat"
                />
              </div>
              <h2 className=" text-[24px] md:text-[32px]">02.Pickled</h2>
              <p className=" max-w-[500px] sm:max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSophisticatedProcess;
