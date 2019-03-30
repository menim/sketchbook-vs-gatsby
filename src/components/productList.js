import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Product from './product'

const ProductList = () => {
  const locale = window.location.href.match(/(ru|uk)/)[0] // get locale of index page 

  return ( <StaticQuery query={graphql`
  query {
    allDataJson {
      edges {
        node {
          cover
          price
          theme
          complexity
          slug
          uk {
            title
            description
          }
          ru {
            title
            description
          }
        }
      }
    }
  }
  `}
  render={ (data) => (
    data.allDataJson.edges.map((product, index) => (
        <Product locale={locale} key={index}  productData={product.node} />
      ))
    )
  }  
  />
  )
}

export default ProductList
