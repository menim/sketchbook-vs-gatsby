import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import Img from "gatsby-image";

const Product = () => (
  <StaticQuery query={query} render={
    data => (
      <div className="l-item">
        <div className="sketchbook">
          <Img className="sketchbook__preview" fixed={data.file.childImageSharp.fixed} />
          <h2 className="sketchbook__title">
            <span className="sketchbook__subtitle">Скетчбук</span>
            Малюємо море
          </h2>
          <div className="sketchbook__bottom-wrapper">
            <a className="btn" href="">Детальніше</a>
            <span className="sketchbook__price">180 грн</span>
          </div>
        </div>
      </div>
    )
  }/>
)
const str = "basic-skills2-ua.png"

export const query = graphql`
query {
  file(relativePath: { eq: "basic-skills2-ua.png"} ) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
}
`
export default Product