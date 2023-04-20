import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import avatar1 from "../../../assets/images/homepage/Avatar1.jpg";
import avatar2 from "../../../assets/images/homepage/Avatar 2.jpg";
import avatar3 from "../../../assets/images/homepage/Avatar3.jpg";

const items = [
  <div className=" relative  lg:px-32">
    <div className=" absolute right-[100px] top-0 -z-10 h-[150px] w-[150px] bg-feedbackBg bg-contain bg-no-repeat md:right-[190px] md:h-[200px] md:w-[200px]"></div>
    <h4 className=" mb-10 max-w-[800px] text-[18px] sm:text-[22px] md:text-[28px]">
      “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
      penatibus imperdiet. Turpis egestas ultricies purus Lorem ipsum dolor sit
      amet.
    </h4>
    <div className=" flex items-center gap-7">
      <div className=" max-w-[100px]">
        <img src={avatar1} alt="John Doe" />
      </div>
      <div>
        <h5 className=" mb-1 text-[18px]">John Doe</h5>
        <p>Bloger</p>
      </div>
    </div>
  </div>,

  <div className=" relative lg:px-32">
    <div className=" absolute right-[100px] top-0 -z-10 h-[150px] w-[150px] bg-feedbackBg bg-contain bg-no-repeat md:right-[190px] md:h-[200px] md:w-[200px]"></div>
    <h4 className=" mb-10 max-w-[800px] text-[18px] sm:text-[22px] md:text-[28px]">
      “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
      penatibus imperdiet. Turpis egestas ultricies purus Lorem ipsum dolor sit
      amet.
    </h4>
    <div className=" flex items-center gap-7">
      <div className=" max-w-[100px]">
        <img src={avatar2} alt="Julie Christie" />
      </div>
      <div>
        <h5 className=" mb-1 text-[18px]">Julie Christie</h5>
        <p>Bloger</p>
      </div>
    </div>
  </div>,

  <div className=" relative lg:px-32">
    <div className=" absolute right-[100px] top-0 -z-10 h-[150px] w-[150px] bg-feedbackBg bg-contain bg-no-repeat md:right-[190px] md:h-[200px] md:w-[200px]"></div>
    <h4 className=" mb-10 max-w-[800px] text-[18px] sm:text-[22px] md:text-[28px]">
      “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id
      penatibus imperdiet. Turpis egestas ultricies purus Lorem ipsum dolor sit
      amet.
    </h4>
    <div className=" flex items-center gap-7">
      <div className=" max-w-[100px]">
        <img src={avatar3} alt="Jane Cooper" />
      </div>
      <div>
        <h5 className=" mb-1 text-[18px]">Jane Cooper</h5>
        <p>Bloger</p>
      </div>
    </div>
  </div>,
];

const FeedbackSection = () => {
  return (
    <React.Fragment>
      <div className=" py-10 sm:py-20">
        <div className="container mx-auto">
          <AliceCarousel
            infinite
            autoPlay
            autoPlayInterval={2000}
            disableButtonsControls
            mouseTracking
            items={items}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeedbackSection;
