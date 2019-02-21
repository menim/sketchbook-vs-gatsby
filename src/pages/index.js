import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from '../components/footer'
import Container from '../components/container'
import FlexContainer from "../components/flex-container";
import Main from '../components/main'
import ProductList from '../components/productList'

import "../sass/main.scss";

const IndexPage = () => (
  <>
  <Header videoEnabled />
    <Main>
      <Container>
        <FlexContainer>
          <ProductList />
        </FlexContainer>
      </Container>
    </Main>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <Footer />
  </>
)

export default IndexPage
