import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Product from './product'

const ProductList = () => (
  <StaticQuery query={graphql`
  query {
    allDataJson {
      edges {
        node {
          title
          cover
          price
          theme
          slug
        }
      }
    }
  }
  `}
  render={ (data) => (
    data.allDataJson.edges.map((product, index) => (
        <Product key={index} productData={product.node} />
      ))
    )
  }  
  />
)

export default ProductList
