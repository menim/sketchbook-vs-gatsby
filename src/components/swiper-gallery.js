import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import Swiper from 'react-id-swiper'
import Pict from './pict'

export default class SimpleSlider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gallerySwiper: null,
      thumbnailSwiper: null,
    }

    this.galleryRef =this.galleryRef.bind(this)
    this.thumbRef = this.thumbRef.bind(this)
  }
//unsafe try to fix
  componentWillUpdate(nextProps, nextState) {
    if(nextState.gallerySwiper && nextState.thumbnailSwiper) {
      const { gallerySwiper, thumbnailSwiper } = nextState

      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper
    }
  }

  galleryRef(ref) {
    if(ref) {
      this.setState({gallerySwiper: ref.swiper})
    }
  }

  thumbRef(ref) {
    if(ref) {
      this.setState({thumbnailSwiper: ref.swiper})
    }
  }

  render() {
    const galleryParams = {
      threshold: 50,
      navigation: {
        nextEl: '.swiper-product-next.swiper-product-next--secondary',
        prevEl: '.swiper-product-prev.swiper-product-prev--secondary'
      }
    }

    const thumbnailParams = {
      threshold: 50,
      paceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      containerClass: 'swiper-container swiper-container-initialized swiper-container-horizontal thumbnail'
    }

    return (
      <>
        <Swiper {...galleryParams} ref={this.galleryRef}>
          {this.props.imgs.map((item, index) => (
            <div key={index}><Pict height='500' src={withPrefix(item)} fallbackFormat='jpg' /></div>
          ))}
        </Swiper>
        <Swiper {...thumbnailParams} ref={this.thumbRef}>
          {this.props.imgs.map((item, index) => (
            <div key={index}><Pict height='100' src={withPrefix(item)} fallbackFormat='jpg' /></div>
          ))}
        </Swiper>
      </>
    )
  }
}