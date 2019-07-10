import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/button';

import cartImage from '../../images/cart-icon.svg';
import {InterfaceContext} from '../../context';

const CartToggleBtn = ({getProductsInCart}) => (
  <InterfaceContext.Consumer>
    {(appInterface)=> {
      const productsInCart = getProductsInCart();
      return (
        <>
          <Button onClick={appInterface.cartToggle} className="cart__toggle-btn">
            <span
              className={`${
                productsInCart === 0 ? 'none' : 'cart__products-quantity'
              } ${appInterface.cartStatus ? 'animationZoomOut' : 'animationZoomIn'}`}
            >
              {productsInCart}
            </span>
            <img
              className={`cart__basket-img  ${
                appInterface.cartStatus ? 'animationZoomOut' : 'animationZoomIn'
              } `}
              src={cartImage}
              height="36"
              width="36"
              alt=""
            />
            <span
              className={`cart__close close close--theme-secondary ${
                appInterface.cartStatus ? 'animationZoomIn' : 'animationZoomOut'
              } `}
            />
          </Button>
        </>
      );
    }}
  </InterfaceContext.Consumer>
);

export default CartToggleBtn;
