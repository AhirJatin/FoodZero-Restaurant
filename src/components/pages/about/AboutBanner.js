import React from "react";

const AboutBanner = () => {
  return (
    <React.Fragment>
      <div className=" bg-aboutBannerBg bg-cover bg-center bg-no-repeat py-20 text-center text-white sm:text-right">
        <div className="container mx-auto">
          <h2 className=" text-[48px] sm:text-[70px]">Who We Are</h2>
          <p>
            The most important thing for us is to give you the comfortable
            dining experience.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutBanner;
