import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Linkedin, GitHub, Mail } from "react-feather"
import Img from "gatsby-image"
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "Profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Justin Sun</title>
        <meta
          name="description"
          property="og:description"
          content="Hey! I'm Justin."
        />
        <meta
          name="title"
          property="og:title"
          content="Justin Sun"
        />
      </Helmet>
      <div className="banner">
        <div className="column">
          <div className="title">
            Hey! I'm Justin.
          </div>
          <div className="subtitle">
            Entrepreneur, Developer, Creator
          </div>
          <div className="description">
            <span>Founder at <a href="https://getfocal.app">Focal</a></span>
            <span>CTO at <a href="https://leadersunitedforchange.org">Leaders United for Change</a></span>
            <span>Student at <a href="https://hw.com">Harvard-Westlake</a></span>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/justinsunyt/" aria-label="Linkedin"><Linkedin className="icon"/></a>
            <a href="https://github.com/justinsunyt" aria-label="GitHub"><GitHub className="icon"/></a>
            <a href="mailto:justinsunyt@gmail.com" aria-label="Mail"><Mail className="icon"/></a>
          </div>
        </div>
          <Img
            fluid={data.profile.childImageSharp.fluid}
            className="profile"
            fadeIn={false}
          />
      </div>
    </Layout>
  )
}

export default IndexPage
