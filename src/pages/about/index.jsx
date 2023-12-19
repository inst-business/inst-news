import React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as cx from './about.module.sass'
import { MainLayout } from '@/components/shared/Layout'
import { FeatureCategories } from '@/components/shared/Categories'
import Button from '@/components/ui/Button'

const AboutPage = ({
  data,
}) => {

  const categories = data?.allContentfulCategories?.edges

  return (
    <MainLayout sidebar={false}>
      <section className={cx.Section}>
        <article>
          <h2>
            Welcome to our news site!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati a in.
          </p>
          <p>
            Omnis quidem amet rerum ratione expedita doloremque distinctio natus provident magni, rem earum debitis ullam minus possimus labore!
          </p>
          <Link to={'/contact'}>
            <Button>
              Contact
            </Button>
          </Link>
        </article>
        <StaticImage
          src={'../../assets/images/about.png'}
          alt={'About us'}
          placeholder={'blurred'}
          className={cx.Image}
        />
      </section>
      <FeatureCategories categories={categories} />
    </MainLayout>
  )
}

export const query = graphql`
  query {
    allContentfulCategories(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      edges {
        node {
          id
          title
          description
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`


export default AboutPage