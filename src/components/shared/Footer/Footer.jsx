import React from 'react'

import * as styles from './footer.module.sass'

const Footer = () => {
  // console.log(styles)
  return (
    <footer className={styles.Footer}>
      <p>
        &copy; {new Date().getFullYear()} <span>InstNews</span> - By btoann.
        {/* Built with <a href={'https://www.gatsbyjs.com/'}>Gatsby</a> */}
      </p>
    </footer>
  )
}

export default Footer