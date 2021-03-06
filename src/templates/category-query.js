import { graphql } from 'gatsby'
import CategoryPage from './category'

export default CategoryPage

export const query = graphql`
  query CategoryQuery($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost(
      filter: { category: { in: [$category] }, published: { eq: true } }
    ) {
      edges {
        node {
          category
          title
          excerpt
          slug
          id
        }
      }
      group(field: category) {
        fieldValue
      }
    }
  }
`
