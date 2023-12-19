import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as cx from './home.module.sass'
import { MainLayout } from '@/components/shared/Layout'
import Seo from '@/components/shared/SEO'

const HomePage = () => (
  <MainLayout>
    <header className={cx.Home}>
      <StaticImage
        src={'../assets/images/main.jpg'}
        alt={'Home Banner'}
        placeholder={'dominantColor'}
        layout={'fullWidth'}
        className={cx.Image}
      />
      <div className={cx.Container}>
        <div className={cx.Text}>
          <h1>Inst News</h1>
          <h4>Welcome to our site!</h4>
        </div>
      </div>
    </header>
  </MainLayout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Home' />

export default HomePage
