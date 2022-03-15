import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import DiskonLayout from "../../components/DiskonSerction/DiskonLayout";
import Navbar from "../../components/Navbar component/Navbar/Navbar";
import NewsSection from "../../components/News/NewsSection";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <DiskonLayout />
      <NewsSection />
    </div>
  );
};

export default LandingPage;
