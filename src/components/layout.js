import React from "react"
import PropTypes from "prop-types"

import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
