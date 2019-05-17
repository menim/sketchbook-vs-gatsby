import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Link } from './../i18n';
import Pict from './pict';
import Swiper from 'react-id-swiper';

const Product = ({ locale, productData }) => {
  const params = {
    freeMode: true,
    freeModeSticky: true,
    freeModeMomentum: false,
    threshold: 50,
    navigation: {
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  const slug = `/${productData.slug}/`;

  return (
    <div className="l-item">
      <div className="sketchbook">
        {productData.cover.length > 1 ? (
          <Swiper {...params}>
            {productData.cover.map((item, index) => (
              <div key={index}>
                <img
                  className="sketchbook__preview"
                  src={item.childImageSharp.fixed.src}
                />
              </div>
            ))}
          </Swiper>
        ) : (
          <Pict
            className="sketchbook__preview"
            img={productData.cover[0].childImageSharp.fixed}
          /> 
        )}
        <h2 className="sketchbook__title">{productData[locale].title}</h2>
        <div className="sketchbook__bottom-wrapper">
          <Link className="btn btn--link btn--secondary-theme" to={slug}>
            <FormattedMessage id="button-more-details" />
          </Link>
          <span className="sketchbook__price"> {productData.price} грн</span>
        </div>
      </div>
    </div>
  );
};
export default Product;

Product.propTypes = {
  locale: PropTypes.string.isRequired,
  productData: PropTypes.object.isRequired
};
