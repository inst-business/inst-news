import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as cx from './AllCategories.module.sass'
import Tags from '@/components/shared/Tags'
import CategoriesList from '@/components/shared/CategoriesList'

const query = graphql`
  query {
    allContentfulCategories(sort: {title: ASC}) {
      nodes {
        id
        title
        slug
        description
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        content {
          tags
        }
      }
    }
  }
`

const Sidebar = () => {
  
  const data = useStaticQuery(query)
  const categories = data?.allContentfulCategories?.nodes

  return (
    <section className={cx.Categories}>
      <Tags keywords={categories} />
      <CategoriesList categories={categories} />
    </section>
  )
}

export default Sidebar