import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from '../components/footer'
import Container from '../components/container'
import FlexContainer from "../components/flex-container";
import Main from '../components/main'
import Product from '../components/product'

import "../sass/main.scss";

const IndexPage = () => (
  <>
  <Header videoEnabled />
    <Main>
      <Container>
        <FlexContainer>
          <Product />
        </FlexContainer>
      </Container>
    </Main>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/page-2/">Go to page 2</Link>
    <Footer />
  </>
)

export default IndexPage
