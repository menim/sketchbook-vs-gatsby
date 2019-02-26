import React from "react"
import { withPrefix, Link } from "gatsby"
import Pict from "./pict";
import Swiper from "react-id-swiper";


const Product = ({productData}) => {
  const params = {
    spaceBetween: 25,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }
 
  const slug = `/${productData.slug}/`;

  return (
      <div className="l-item">
        <div className={`sketchbook sketchbook--${productData.theme}`}>
        {productData.cover.length > 1 
          ?  
           <Swiper  {...params}>
              {productData.cover.map((item, index) => (
                <div key={index}><Pict className="sketchbook__preview" src={withPrefix(item)} /></div>
              ))}
            </Swiper> 

          : 
            <Pict className="sketchbook__preview" src={withPrefix(productData.cover[0])} />
        }

          <h2 className="sketchbook__title">
            <span className="sketchbook__subtitle">Скетчбук</span>
            {productData.title}
          </h2>
          <div className="sketchbook__bottom-wrapper">
            <Link className="btn" to={slug}>Детальніше</Link>
            <span className="sketchbook__price"> {productData.price} грн</span>
          </div>
        </div>
      </div>
    )
  }
export default Product