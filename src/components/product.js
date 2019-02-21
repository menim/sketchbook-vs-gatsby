import React from 'react'
import { withPrefix } from 'gatsby'
import Pict from './pict';

const Product = ({productData}) => (
      <div className="l-item">
        <div className="sketchbook">
         {productData.cover.map((item, index) => (
         <Pict className="sketchbook__preview" key={index} src={withPrefix(item)} />
         ))}
          <h2 className="sketchbook__title">
            <span className="sketchbook__subtitle">Скетчбук</span>
            {productData.title}
          </h2>
          <div className="sketchbook__bottom-wrapper">
            <a className="btn" href="">Детальніше</a>
            <span className="sketchbook__price"> {productData.price} грн</span>
          </div>
        </div>
      </div>
    )
export default Product