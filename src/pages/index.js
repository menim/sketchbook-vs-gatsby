import React from "react"
import { withIntl } from "../i18n"

import "../sass/main.scss"
import "../sass/generic/_swiper.scss"

import Layout from '../components/Layout'
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from '../components/footer'
import Container from '../components/container'
import FlexContainer from "../components/flex-container"
import Main from '../components/main'
import ProductList from '../components/productList'
import WhtSketch from '../components/wht-sketch'
import YtbVideo from '../components/ytb-video'

const IndexPage = ({intl}) => (
  <>
  <Layout>
    <Header videoEnabled />
      <Main>
        <Container>
          <FlexContainer>
            <ProductList />
          </FlexContainer>
        </Container>
        <Container>
          <FlexContainer params='l-flex--center vert-lg-margin'> 
            <WhtSketch />
            <YtbVideo id="iMOM4CXQn00" />
          </FlexContainer> 
        </Container>
      </Main>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Footer />
  </Layout>
  </>
)

export default withIntl(IndexPage)
