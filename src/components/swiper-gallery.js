import React, {Component} from "react"
import { withPrefix } from "gatsby"
import Swiper from "react-id-swiper"
import Pict from "./pict"

export default class SimpleSlider extends Component {
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
        <Swiper {...params}>
          {this.props.imgs.map((item, index) => (
            <div key={index}><Pict src={withPrefix(item)} fallbackFormat="jpg" /></div>
          ))}
        </Swiper>
    );
  }
}