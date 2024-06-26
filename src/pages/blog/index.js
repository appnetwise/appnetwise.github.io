import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import BlogCard from "../../components/BlogContent/BlogCard"
import Footer from "../../components/_App/Footer"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allBloggerPost {
        edges {
          node {
            id
            title
            published
            content
            url
            slug
            images {
              url
            }
            author {
              displayName
              image {
                url
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allBloggerPost.edges

  return (
    <Layout>
      <Navbar />
      <PageBanner
        pageTitle="Blog"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Blog"
      />
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            {posts.map(({ node }) => (
              <BlogCard key={node.id} post={node} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />

export default BlogPage
