import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import TeamStyleTwo from "../components/Team/TeamStyleTwo"
import Footer from "../components/_App/Footer"

const TeamPage2 = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Team 2"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Team"
      />

      <TeamStyleTwo />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Team" />

export default TeamPage2
