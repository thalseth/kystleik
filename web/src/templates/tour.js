import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query TourTemplateQuery($id: String!) {
    tour: sanityTour(id: { eq: $id }) {
      id
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
    }
  }
`

const TourTemplate = props => {
  const { data, errors } = props
  const tour = data && data.tour
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {tour && <SEO title={tour.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <h1>{tour.title}</h1>
      {/* {project && <Project {...project} />} */}
    </Layout>
  )
}

export default TourTemplate
