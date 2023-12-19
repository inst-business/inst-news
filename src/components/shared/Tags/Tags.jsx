import React from 'react'
import { Link } from 'gatsby'

import * as cx from './Tags.module.sass'
import { buildTags } from '@/utils'

const Tags = ({
  keywords,
}) => {

  const tags = buildTags(keywords)

  return (
    <div className={cx.Tags}>
      <h4>Tags</h4>
      <div className={cx.List}>
        {tags.map(([tag, amount], i) => (
          <Link
            key={i}
            to={`/tags/${tag}`}
          >
            {tag} ({amount})
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tags