import React from "react";
import BannerSection from "./BannerSection";
import OurMenuSection from "./OurMenuSection";
import UspSection from "./UspSection";
import CookSection from "./CookSection";
import CaloriesSection from "./CaloriesSection";
import FeedbackSection from "./FeedbackSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <BannerSection />
      <OurMenuSection />
      <CookSection />
      <UspSection />
      <CaloriesSection />
      <FeedbackSection />
    </React.Fragment>
  );
};

export default HomePage;
