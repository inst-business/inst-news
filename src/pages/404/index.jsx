import React from 'react'

import * as cx from './404.module.sass'
import { MainLayout } from '@/components/shared/Layout'
import Seo from '@/components/shared/SEO'

const NotFoundPage = () => (
  <MainLayout>
    <main className={cx.NotFound}>
      <h1>404</h1>
      <h3>You just hit a route that doesn&#39;t exist</h3>
    </main>
  </MainLayout>
)

export const Head = () => <Seo title='404: Not Found' />

export default NotFoundPage