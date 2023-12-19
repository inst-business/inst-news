import React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import * as cx from './contact.module.sass'
import { MainLayout } from '@/components/shared/Layout'
import { FeatureCategories } from '@/components/shared/Categories'
import Form from '@/components/ui/Form/Form'

const ContactPage = ({
  data,
}) => {

  console.log(data)
  const categories = data?.allContentfulCategories?.edges

  return (
    <MainLayout sidebar={false}>
      <section className={cx.Section}>
        <article className={cx.Info}>
          <h3>Want To Get In Touch?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos obcaecati est ea!
          </p>
          <p>
            Maxime beatae quod perspiciatis non, quaerat, sed,
            sapiente nobis mollitia amet nemo necessitatibus culpa.
          </p>
          <p>
            Quidem animi laudantium molestias.
          </p>
        </article>
        <article className={clsx(cx.Form, cx.Info)}>
          <Form>
            <Form.Input
              name={'fullName'}
              label={'Full Name'}
            />
            <Form.Input
              name={'email'}
              label={'Email'}
            />
            <Form.TextArea
              name={'message'}
              label={'Message'}
            ></Form.TextArea>
            <Form.Submit>Submit</Form.Submit>
          </Form>
        </article>
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


export default ContactPage