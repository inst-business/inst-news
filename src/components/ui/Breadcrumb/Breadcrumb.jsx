import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import * as cx from './Breadcrumb.module.sass'

const Breadcrumb = ({
  links = [],
}) => {

  // useEffect(() => {
  //   links?.unshift({
  //     title: 'Home',
  //     url: '/',
  //   })
  // }, [])

  return (
    <ul className={cx.Breadcrumb}>
      <li className={cx.Link}>
        <Link to={'/'}>Home</Link>
      </li>
      {links.map(({ title, url }, i) => (
        <li
          key={i}
          className={cx.Link}
        >
          <Link to={url}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

Breadcrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

export default Breadcrumb