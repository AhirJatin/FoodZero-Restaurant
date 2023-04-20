import React from "react";
import AboutBanner from "./AboutBanner";
import AboutStory from "./AboutStory";
import AboutManagement from "./AboutManagement";
import AboutSophisticatedProcess from "./AboutSophisticatedProcess";

const AboutPage = () => {
  return (
    <React.Fragment>
      <AboutBanner />
      <AboutStory />
      <AboutManagement />
      <AboutSophisticatedProcess />
    </React.Fragment>
  );
};

export default AboutPage;
