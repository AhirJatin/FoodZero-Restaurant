import React from "react";

const ContactBanner = () => {
  return (
    <React.Fragment>
      <div className=" bg-contactBannerBg bg-cover bg-center bg-no-repeat py-20 text-white">
        <div className="container mx-auto">
          <div className=" flex flex-col items-center justify-between gap-16 sm:flex-row sm:gap-0">
            <div>
              <h2 className=" text-[48px] sm:text-[70px]">Get in Touch</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus.
              </p>
            </div>
            <div className=" w-full md:max-w-[350px] lg:max-w-[400px]">
              <div className=" mb-5 flex justify-between border-b-2  border-dashed border-white pb-2">
                <span className=" font-primary text-[22px] font-bold">
                  Open Time
                </span>
                <span>Sunday - Friday</span>
              </div>
              <div className=" flex justify-between">
                <div>
                  <p>Brunch</p>
                  <p>11:00 - 12:00</p>
                </div>
                <div>
                  <p>Lunch</p>
                  <p>13:00 - 17:00</p>
                </div>
                <div>
                  <p>Dinner</p>
                  <p>18:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactBanner;
