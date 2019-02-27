import React, {Component} from "react"
import { withPrefix } from "gatsby"
import Slider from "react-slick"
import Pict from "./pict"

import "../sass/generic/_slick.scss";
import "../sass/generic/_slick-theme.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      speed: 500,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    return (
        <Slider {...settings}>
          {this.props.imgs.map((item, index) => (
            <Pict key={index} src={withPrefix(item)} />
          ))}
        </Slider>
    );
  }
}