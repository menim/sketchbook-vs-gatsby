import React from 'react'
import { graphql } from 'gatsby';
import Product from './product'

const ProductList = ({data }) => (
  data.map((cover) => {
    <Product srcData={cover} />
  })
)



export default ProductList
