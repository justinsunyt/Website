import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Linkedin, GitHub, Mail, X } from "react-feather"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "Profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
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
        <meta name="title" property="og:title" content="Justin Sun" />
      </Helmet>
      <div className="banner">
        <div className="column">
          <Fade up duration={400}>
            <div className="title">Hey! I'm Justin.</div>
          </Fade>
          <Fade up duration={400} delay={150}>
            <div className="subtitle">CS + Finance @ UPenn M&T</div>
          </Fade>
          <Fade up duration={400} delay={300}>
            <div className="description">
              <span>
                <a href="https://hwchronicle.com/101847/news/robotics-team-62b-wins-vex-robotics-world-championship/">
                  2021 VEX World Champion
                </a>
              </span>
              <span>
                <a href="https://getfocal.app">
                  Founder and Developer at Focal
                </a>
              </span>
              <span>
                <a href="https://leadersunitedforchange.org">
                  CTO and Head of CS at LUC
                </a>
              </span>
              <span>
                <a href="https://interversemedia.org">
                  Senior Engineer and Tutor at Interverse
                </a>
              </span>
            </div>
          </Fade>
          <Fade up duration={400} delay={450}>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/justinsunyt/"
                aria-label="Linkedin"
              >
                <Linkedin className="icon" />
              </a>
              <a href="https://github.com/justinsunyt" aria-label="GitHub">
                <GitHub className="icon" />
              </a>
              <a href="mailto:justinsunyt@gmail.com" aria-label="Mail">
                <Mail className="icon" />
              </a>
            </div>
          </Fade>
        </div>
        <Img
          fluid={data.profile.childImageSharp.fluid}
          className="profile"
          fadeIn={true}
          durationFadeIn={850}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
