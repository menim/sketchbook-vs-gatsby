import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'
import Product from './product'

const ProductList = ({ data }) => {

const locale = data.locale 

return ( <StaticQuery query={graphql`
  query {
    allDataJson {
      edges {
        node {
          cover
          price
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
  render={ (data) => {
    return (
        data.allDataJson.edges.map((product, index) => {
          return ( <Product locale={locale} key={index}  productData={product.node} />)
        })
      )}
    }  
  />
  )
}

export default ProductList

ProductList.propTypes = {
  data: PropTypes.object.isRequired
}