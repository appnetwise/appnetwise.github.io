import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

import banner from "../../images/qa.png"

import QualityAssurance from "../../components/ServiceDetails/QualityAssurance"

const QualityAssurancePage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Quality Assurance"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Quality Assurance"
        bannerImage={banner}
      />

      <QualityAssurance />

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Service Details" />

export default QualityAssurancePage
