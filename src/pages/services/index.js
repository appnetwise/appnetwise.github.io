import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"

import OurSolutions from "../../components/Index/OurSolutions"
import OurMission from "../../components/DataScienceOnlineCourses/OurMission"

const ServicesPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services"
      />
      <OurMission />
      <OurSolutions />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Services" />

export default ServicesPage
