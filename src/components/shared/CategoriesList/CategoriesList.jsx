import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as cx from './CategoriesList.module.sass'

const CategoriesList = ({
  categories = [],
}) => {
  return (
    <div className={cx.CategoriesList}>
      {categories.map(({ id, title, slug, description, image }) => (
        <Link
          key={id}
          to={`/categories/${slug}`}
          className={cx.Link}
        >
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className={cx.Image}
          />
          <h5>{title}</h5>
          <p>
            {description}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default CategoriesList