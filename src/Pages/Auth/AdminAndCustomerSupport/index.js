import React from 'react'
import Layout from "../../../Layouts/BasicLayout/index";
import SectionOneCatagory from '../../../Section/Section-1-Catagories'
import SectionTwoCategories from '../../../Section/Section-2-Catagories';
import SectionThreeCategories from '../../../Section/Section-3-Catagories';
import SectionFourCatagory from '../../../Section/Section-4-Catagories'
import SectionSixCategories from '../../../Section/Section-6-Catagories';

function AdminAndCustomerSupport() {
  return (
    <Layout>
  <SectionOneCatagory />
  <SectionTwoCategories />
  <SectionThreeCategories />
  <SectionFourCatagory />
  <SectionSixCategories />
</Layout>
  )
}

export default AdminAndCustomerSupport