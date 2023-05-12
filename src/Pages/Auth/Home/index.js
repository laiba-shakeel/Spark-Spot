import React from "react";
import Layout from "../../../Layouts/BasicLayout/index";
import SectionOneHome from "../../../Section/Section-1-Home/index";
import SectionTwoHome from "../../../Section/Section-2-Home";
import SectionThreeHome from "../../../Section/Section-3-Home";
import SectionFourHome from "../../../Section/Section-4-Home";
import SectionFiveHome from "../../../Section/Section-5-Home";
import SectionSevenHome from "../../../Section/Section-7-Home";
import SectionCarousel from "../../../Section/Section-Carousel";
import SectionSixHome from "../../../Section/Section-6-Home";

function Home() {
  return (
    <Layout>
      <SectionOneHome />
      <SectionTwoHome />
      <SectionThreeHome />
      <SectionFourHome />
      <SectionFiveHome />
      <SectionSixHome />
      <SectionCarousel />
      <SectionSevenHome />
    </Layout>
  );
}

export default Home;
