import React from "react";

const MenuPageBanner = () => {
  return (
    <React.Fragment>
      <div className=" bg-menuBannerBg bg-cover bg-center bg-no-repeat py-20 text-white">
        <div className="container mx-auto">
          <h2 className=" text-[48px] sm:text-[70px]">
            View Our <br />
            New Menu
          </h2>
          <p>The freshest ingredients for you every day</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuPageBanner;
