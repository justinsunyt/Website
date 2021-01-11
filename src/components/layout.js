import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "../styles/styles.scss"

const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
