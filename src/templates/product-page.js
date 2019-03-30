import React from "react"
import { graphql } from 'gatsby'
import { FormattedMessage } from "react-intl"
import { dynamicWithIntl, Link } from "../i18n"

import "../sass/main.scss"
import "../sass/generic/_swiper.scss"

import Layout from '../components/layout'
import Header from "../components/header"
import Footer from "../components/footer"
import Main from "../components/main"
import Container from "../components/container"
import SimpleSlider from "../components/swiper-gallery";

const ProductPage = ({intl, data}) => {
const product = data.allDataJson.edges[0].node
return (
    <>
    <Layout>
      <Header />
        <Main>
          <Container>
            <div className="product">
              <section className="product__view">
              <SimpleSlider imgs={product.spreadImg} />
              </section>
              <section className="product__description">
                <h1 className="product__header">Скетчбук. <FormattedMessage id="title" /></h1>
                <span className="product__price">₴ {product.price}</span>
                <p className="product__overview">
                   <FormattedMessage id="description" />
                </p>
                <Link to="" type="button" className="btn btn--lg">Замовити</Link>
              </section>
            </div>
          </Container>
        </Main>
      <Footer />
      </Layout>
    </>
  )
}

export default dynamicWithIntl(ProductPage)


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