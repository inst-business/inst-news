import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'

import '@/assets/styles/main.css'
import * as cx from './Layout.module.sass'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Breadcrumb from '@/components/ui/Breadcrumb'
import AllCategories from '@/components/shared/AllCategories'

const MainLayout = ({
  breadcrumb,
  sidebar = true,
  children,
  ...props
}) => {
  return (
    <>
      <Navbar />
      <main className={cx.Main}>
        {breadcrumb != null && <Breadcrumb links={breadcrumb} />}
        {children}
        {sidebar && <AllCategories />}
      </main>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  sidebar: PropTypes.bool,
}

export default MainLayout