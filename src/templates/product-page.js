import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Main from "../components/main"
import Container from "../components/container"
import FlexContainer from "../components/flex-container"

const ProductPage = ({data}) => {
 const product = data.allDataJson.edges[0].node
 
 return (
    <>
      <Header />
        <Main>
          <Container>
            <FlexContainer>
              {product.title}
            </FlexContainer>
          </Container>
        </Main>
      <Footer />
    </>
  )
}

export default ProductPage

export const query = graphql`
query($slug: String!) {
  allDataJson (filter: {slug: {eq: $slug}}) {
    edges {
      node {
        title
        description
        price
        spreadImg
      }
    }
  }
}
`