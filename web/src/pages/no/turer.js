/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { graphql } from 'gatsby'
import Container from '../../components/container'
import GraphQLErrorList from '../../components/graphql-error-list'
import ProjectPreviewGrid from '../../components/project-preview-grid'
import SEO from '../../components/seo'
import Layout from '../../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../../lib/helpers'

import { responsiveTitle1 } from '../../components/typography.module.css'

export const query = graphql`
  query NbNOToursPageQuery {
    tours: allSanityTour {
      edges {
        node {
          id
          mainImage {
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
    }
  }
`

const ToursPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const tourNodes =
    data && data.tours && mapEdgesToNodes(data.tours).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Turer' />
      <Container>
        <h1 className={responsiveTitle1}>Turer</h1>
        {tourNodes && tourNodes.length > 0 && <ProjectPreviewGrid nodes={tourNodes} />}
      </Container>
    </Layout>
  )
}

export default ToursPage
