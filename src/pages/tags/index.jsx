import React from 'react'
import { Link, graphql } from 'gatsby'

import * as cx from './tags.module.sass'
import { buildTags } from '@/utils'
import { MainLayout } from '@/components/shared/Layout'

const TagsPage = ({
  data,
}) => {

  const tags = buildTags(data?.allContentfulCategories?.nodes)

  return (
    <MainLayout sidebar={false}>
      <section className={cx.Section}>
        {tags.map(([tag, amount], i) => (
          <Link
            key={i}
            to={`/tags/${tag}`}
            className={cx.Tag}
          >
            <h5>{tag}</h5>
            <p>{amount} article{amount > 1 && 's'}</p>
          </Link>
        ))}
      </section>
    </MainLayout>
  )
}

export const query = graphql`
  query {
    allContentfulCategories {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default TagsPage