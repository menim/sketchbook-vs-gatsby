import React from 'react';
import PropTypes from 'prop-types';

import cartImage from '../../images/cart-icon.svg';
import {CartContext} from '../../context/cartContext';

const CartToggleBtn = () => (
  <CartContext.Consumer>
    {cart => (
      <>
        <button onClick={cart.toggle} className='cart__toggle-btn'>
          <img
            className={`cart__basket-img  ${
              cart.cartStatus ? 'animationZoomOut' : 'animationZoomIn'
            } `}
            src={cartImage}
            height='36'
            width='36'
            alt=''
          />
          <span
            className={`cart__close close close--theme-secondary ${
              cart.cartStatus ? 'animationZoomIn' : 'animationZoomOut'
            } `}
          />
        </button>
      </>
    )}
  </CartContext.Consumer>
);

export default CartToggleBtn;
