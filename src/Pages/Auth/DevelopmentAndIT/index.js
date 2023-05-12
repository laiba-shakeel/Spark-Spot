import React from 'react'
import Layout from "../../../Layouts/BasicLayout/index";
import SectionOneCatagory from '../../../Section/Section-1-Catagories'
import SectionTwoCategories from '../../../Section/Section-2-Catagories';
import SectionThreeCategories from '../../../Section/Section-3-Catagories';
import SectionSixCategories from '../../../Section/Section-6-Catagories';
function DevelopmentAndIt() {
  return (
  <>
<Layout>
  <SectionOneCatagory />
  <SectionTwoCategories />
  <SectionThreeCategories />
  <SectionSixCategories />
</Layout>
  </>
  )
}

export default DevelopmentAndIt