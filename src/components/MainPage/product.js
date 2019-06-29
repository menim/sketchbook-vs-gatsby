import React from 'react';
import PropTypes from 'prop-types';

import {FormattedMessage} from 'react-intl';
import Button from '../shared/button';
import Pict from '../shared/pict';
import Swiper from 'react-id-swiper';

import {Link} from '../../i18n/';

const Product = ({locale, productData}) => {
  const params = {
    freeMode: true,
    freeModeSticky: true,
    freeModeMomentum: false,
    threshold: 50,
    navigation: {
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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
          <Button as={Link} theme="secondary" to={slug}>
            <FormattedMessage id="button-more-details" />
          </Button>
          <span className="sketchbook__price"> {productData.price} грн</span>
        </div>
      </div>
    </div>
  );
};
export default Product;

Product.propTypes = {
  locale: PropTypes.string.isRequired,
  productData: PropTypes.object.isRequired,
};
