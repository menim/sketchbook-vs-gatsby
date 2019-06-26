import React from 'react';
import CartToggleBtn from './cartToggleBtn';
import {CartContext} from '../../context/cartContext';

const Cart = () => (
  <CartContext.Consumer>
    {cart => (
      <>
        <article
          className={`cart ${cart.cartStatus ? 'cart--open' : 'cart--close'} `}
        >
          <CartToggleBtn />
          <div className='cart__content'>Cart is Empty</div>
        </article>
      </>
    )}
  </CartContext.Consumer>
);

export default Cart;
