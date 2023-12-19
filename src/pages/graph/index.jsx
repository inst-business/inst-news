import React from 'react'
import { graphql } from 'gatsby'

import { MainLayout } from '@/components/shared/Layout'

const Graph = ({
  data,
  ...props
}) => {
  
  const author = data.site.info.author

  console.log(props)

  return (
    <MainLayout>
      <h2>author: {author}</h2>
    </MainLayout>
  )
}

export const query = graphql`
  {
    site {
      buildTime
      info: siteMetadata {
        author
        description
        simpleData
        siteUrl
        title
      }
    }
  }
`

export default Graph