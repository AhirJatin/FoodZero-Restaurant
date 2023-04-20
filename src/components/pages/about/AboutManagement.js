import React from "react";
import aboutManagerImg from "../../../assets/images/aboutpage/aboutManager.jpg";
import aboutExChefImg from "../../../assets/images/aboutpage/aboutExChef.jpg";

const AboutManagement = () => {
  return (
    <React.Fragment>
      <div className=" py-10">
        <div className="container mx-auto">
          <div className=" flex items-center justify-center sm:mb-[-150px] lg:mb-[-250px]">
            <div className=" flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start sm:gap-10 ">
              <div className=" text-center">
                <h3 className=" text-[24px] md:text-[32px]">
                  Restuarant Manager
                </h3>
                <p className=" mb-5">Carson Hugn</p>
                <div className=" max-w-[300px] overflow-hidden md:max-w-[400px]">
                  <img
                    className=" max-w-[300px] transition-all duration-500 hover:scale-125 md:max-w-[400px]"
                    src={aboutManagerImg}
                    alt="Carson Hugn"
                  />
                </div>
              </div>
              <div>
                <p className=" mt-0 max-w-[400px] sm:mt-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                  sed in pellentesque ornare nunc nisl.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-10 flex flex-col items-center justify-center gap-5 sm:mt-0 sm:flex-row sm:items-end sm:gap-10 ">
            <div className=" order-2 sm:order-1">
              <p className=" mt-0 max-w-[400px] sm:mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl. Augue habitant accumsan,
                ut parturient orci ac etiam congue mi.
              </p>
            </div>
            <div className=" order-1 text-center sm:order-2">
              <h3 className=" text-[24px] md:text-[32px]">Executive Chef</h3>
              <p className=" mb-5">Jane Cooper</p>
              <div className=" max-w-[300px] overflow-hidden md:max-w-[400px]">
                <img
                  className=" max-w-[300px] transition-all duration-500 hover:scale-125 md:max-w-[400px]"
                  src={aboutExChefImg}
                  alt="Carson Hugn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutManagement;
