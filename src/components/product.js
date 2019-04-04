import React from 'react'
import PropTypes from 'prop-types'

import { withPrefix } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { Link } from './../i18n'
import Pict from './pict'
import Complexity from './complexity'
import Swiper from 'react-id-swiper'

const Product = ({ locale, productData }) => {
  const params = {
    spaceBetween: 25,
    centeredSlides: true,
    threshold: 50,
    navigation: {
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
 
  const slug = `/${productData.slug}/`;

  return (
      <div className='l-item'>
        <div className='sketchbook sketchbook--theme-iceberg'>
        {productData.cover.length > 1 
          ?  
           <Swiper  {...params}>
              {productData.cover.map((item, index) => (
                <div key={index}><Pict className='sketchbook__preview' src={withPrefix(item)} fallbackFormat='png' /></div>
              ))}
            </Swiper> 
          : 
            <Pict className='sketchbook__preview' src={withPrefix(productData.cover[0])} />
        }
          <Complexity count={productData.complexity} />         
           <h2 className='sketchbook__title'>
            { productData[locale].title }
          </h2>
          <div className='sketchbook__bottom-wrapper'>
            <Link className='btn btn--link btn--secondary-theme' to={slug}><FormattedMessage id='button-more-details' /></Link>
            <span className='sketchbook__price'> {productData.price} грн</span>
          </div>
        </div>
      </div>
    )
  }
export default Product

Product.propTypes = {
  locale: PropTypes.string.isRequired,
  productData: PropTypes.object.isRequired
}