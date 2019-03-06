import React from "react"
import { graphql, Link} from "gatsby"


import Header from "../components/header"
import Footer from "../components/footer"
import Main from "../components/main"
import Container from "../components/container"
import SimpleSlider from "../components/swiper-gallery";

const ProductPage = ({data}) => {
const product = data.allDataJson.edges[0].node

return (
    <>
      <Header />
        <Main>
          <Container>
            <div className="product">
              <section className="product__view">
              <SimpleSlider imgs={product.spreadImg} />
              </section>
              <section className="product__description">
                <h1 className="product__header">Скетчбук. {product.title}</h1>
                <span className="product__price">₴ {product.price}</span>
                <p className="product__overview">
                   {product.description}
                </p>
                <Link to="" type="button" className="btn btn--lg">Замовити</Link>
              </section>
            </div>
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