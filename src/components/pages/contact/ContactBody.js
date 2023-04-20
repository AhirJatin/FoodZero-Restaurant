import React from "react";
import contactDinningTableImg from "../../../assets/images/contactpage/contactDinningTable.jpg";
import contactBuildingImg from "../../../assets/images/contactpage/contactBuilding.jpg";

const ContactBody = () => {
  return (
    <React.Fragment>
      <div className=" relative py-10 lg:py-20">
        <div className="container mx-auto">
          <div className=" absolute left-0 top-[10px] -z-10 h-[150px] w-[150px] bg-orangeBg bg-contain bg-no-repeat sm:left-[40%] lg:h-[250px] lg:w-[250px]"></div>
          <div className=" mb-10 flex flex-col items-center justify-around gap-10 sm:mb-20 sm:flex-row md:gap-0">
            <div className="max-w-[300px] overflow-hidden lg:max-w-[500px]">
              <img
                className=" max-w-[300px] transition-all duration-500 hover:scale-125 lg:max-w-[500px]"
                src={contactDinningTableImg}
                alt="Dinning Table"
              />
            </div>
            <div className=" self-center text-[18px] sm:self-end md:text-[22px]">
              <h5>We can be contacted via</h5>
              <h5>
                email <span className=" text-[#9CAA00]">info@foodzero.com</span>
              </h5>
              <h5>
                or telephone on{" "}
                <span className=" text-[#9CAA00]">+86 8*2 **6 000</span>
              </h5>
            </div>
          </div>

          <div className="flex flex-col items-center justify-around gap-10 sm:flex-row md:gap-0">
            <div className=" order-2 self-center text-[18px] sm:order-1  md:text-[22px]">
              <h5 className=" mb-3">
                We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
              </h5>
              <a
                className=" border-[1px] border-black px-5 py-2 hover:bg-[#9CAA00] hover:text-white"
                href="https://www.google.com/maps"
                target="blank"
              >
                View in Map
              </a>
            </div>
            <div className="order-1 max-w-[200px] overflow-hidden sm:order-2 md:max-w-[300px] lg:max-w-[400px]">
              <img
                className=" max-w-[200px] transition-all duration-500 hover:scale-125 md:max-w-[300px] lg:max-w-[400px]"
                src={contactBuildingImg}
                alt="Dinning Table"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactBody;
