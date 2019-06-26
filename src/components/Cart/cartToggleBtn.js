import React from 'react';
import PropTypes from 'prop-types';

import cart from '../../images/cart-icon.svg';

const CartToggleBtn = ({status, toggle}) => (
  <button onClick={toggle} className='cart__toggle-btn'>
    <img
      className={`cart__basket-img  ${
        status ? 'animationZoomOut' : 'animationZoomIn'
      } `}
      src={cart}
      height='36'
      width='36'
      alt=''
    />
    <span
      className={`cart__close close close--theme-secondary ${
        status ? 'animationZoomIn' : 'animationZoomOut'
      } `}
    />
  </button>
);

export default CartToggleBtn;

CartToggleBtn.propTypes = {
  status: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
