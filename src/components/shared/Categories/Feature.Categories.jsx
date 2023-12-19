import React from 'react'

import * as cx from './Categories.module.sass'
import CategoriesList from '@/components/shared/CategoriesList'

const FeatureCategories = ({
  categories,
}) => {
  return (
    <section className={cx.Featured}>
      <h4>Explore our contents...</h4>
      <CategoriesList categories={categories} />
    </section>
  )
}

export default FeatureCategories