import React from 'react'
import PropTypes from 'prop-types'

import { withIntl } from '../i18n'

import '../sass/main.scss'
import '../sass/generic/_swiper.scss'

//import Seo from '../components/seo'

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FlexContainer from '../components/flex-container'
import Main from '../components/main'
import ProductList from '../components/productList'
import WhtSketch from '../components/wht-sketch'
import YtbVideo from '../components/ytb-video'

const IndexPage = ({ intl }) => (
  <>
  {/* <Seo
    title={intl.messages.mainPageTitle}
    description={intl.messages.mainPageDescription}
    lang={intl.locale}
  /> */}
  <Layout>
    <Header videoEnabled />
      <Main>
        <Container>
          <FlexContainer>
            <ProductList data = { intl } />
          </FlexContainer>
        </Container>
        <Container>
          <FlexContainer params='l-flex--center vert-lg-margin'> 
            <WhtSketch />
            <YtbVideo id='iMOM4CXQn00' />
          </FlexContainer> 
        </Container>
      </Main>
    <Footer />
  </Layout>
  </>
)

export default withIntl(IndexPage)

IndexPage.propTypes = {
  intl: PropTypes.object.isRequired
}