import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

const Twitter = ({ type, username, title, desc, image }) => (
  <Helmet>
    { username && <meta property="og:site_name" content={ username }/> }
    <meta property="twitter:type" content={ type }/>
    <meta property="twitter:title" content={ title }/>
    <meta property="twitter:description" content={ desc }/>
    <meta property="og:image" content={ image }/>
    <meta property="og:image:alt" content={ desc }/>
  </Helmet>
)

export default Twitter

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

Twitter.defaultProps = {
  type: 'summary_image_large',
  username: null
}