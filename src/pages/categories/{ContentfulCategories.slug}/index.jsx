import React from 'react'
import { graphql, Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { LibraryBig } from 'lucide-react'

import * as cx from './CategoryTemplate.module.sass'
import { MainLayout } from '@/components/shared/Layout'
import Badge from '@/components/ui/Badge'
import { estimateReadingTime } from '@/utils'



const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const CategoryTemplate = ({
  params,
  data,
}) => {

  // const { slug } = params
  const { pathname } = useLocation()

  const { title, description, content, articles } = data?.contentfulCategories
  const { totalCount } = data?.allContentfulArticles
  const { tags } = content
  
  const breadcrumbLinks = [
    { title: 'Categories', url: '/categories' },
    { title, url: pathname },
  ]

  return (
    <MainLayout
      breadcrumb={breadcrumbLinks}
      sidebar={false}
    >
      <section className={cx.Section}>
        {/* <GatsbyImage
          image={getImage(image)}
          alt={title}
          className={cx.Image}
        /> */}
        <article>
          <div className={cx.Info}>            
            <h2 className={cx.Title}>
              {title}
              <Badge className={cx.Amount}>
                {totalCount}
              </Badge>
            </h2>
            <p>{description}</p>
          </div>
          <div className={cx.Tags}>
            Tags:&emsp;{tags?.map((tag, i) => (
              <Link
                key={i}
                to={`/tags/${tag}`}
              >
                <Badge>{tag}</Badge>
              </Link>
            ))}
          </div>
        </article>
      </section>
      <section className={cx.Body}>
        <div className={cx.Articles}>
          {articles?.map(({ title, slug, thumbnail, content, createdAt }, i) => (
            <Link
              key={i}
              to={`/${slug}`}
            >
              <article className={cx.Article}>
                <GatsbyImage
                  image={getImage(thumbnail)}
                  alt={title}
                  className={cx.Thumbnail}
                />
                <div className={cx.Content}>
                  <h4 className={cx.Title}>
                    {title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium culpa commodi quibusdam dignissimos! Exercitationem, nostrum! Impedit vel nobis ratione alias aut. Laboriosam natus porro culpa nulla, delectus sequi labore placeat?
                  </h4>
                  <div className={cx.Summary}>
                    {renderRichText(content, options)}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eligendi at nostrum voluptate dolore dicta cumque fugiat quidem inventore corrupti aut ducimus hic illo, repudiandae sed quasi. Quae, veritatis fugit.
                  </div>
                  <div className={cx.Meta}>
                    <span className={cx.EstimatedTime}>
                      {estimateReadingTime(
                        '<p className="ipsum dolor sit amet consectetur adipisicing elit. Animi quo, et omnis eos iste dicta ut recusandae ipsam in sint nihil esse illo dolorum fugit quod hic consectetur accusamus tempora?">Lorem ipsum</p>'
                      )}
                    </span>
                    <br />
                    <span className={cx.CreatedAt}>
                      {createdAt}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className={cx.Suggestions}>
          <h3>You might also like</h3>
        </div>
      </section>
    </MainLayout>
  )
}

export const query = graphql`
  query ($slug: String) {
    contentfulCategories(slug: {eq: $slug}) {
      title
      description
      content {
        tags
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      createdAt
      updatedAt
      articles {
        title
        slug
        thumbnail {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        content {
          raw
        }
        createdAt
      }
    }
    allContentfulArticles(filter: {categoryId: {slug: {eq: $slug}}}) {
      totalCount
    }
  }
`

export default CategoryTemplate