import SectionOneHome from "../../../Section/Section-1-Home/index"
import Layout from "../../../Layouts/BasicLayout/index"
import PagesMenu from "../../../Components/PagesMenu/index"
import React from 'react'
import SectionTwoHome from "../../../Section/Section-2-Home"
import SectionThreeHome from "../../../Section/Section-3-Home"
import SectionFourHome from "../../../Section/Section-4-Home"
import SectionFiveHome from "../../../Section/Section-5-Home"
import SectionSixHome from "../../../Section/Section-6-Home"

function Home() {
  return (
    <Layout>
      <PagesMenu />
        <SectionOneHome />
        <SectionTwoHome />
        <SectionThreeHome />
        <SectionFourHome />
        <SectionFiveHome />
        <SectionSixHome />
    </Layout>
  )
}

export default Home