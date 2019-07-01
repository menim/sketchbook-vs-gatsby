import React from 'react';
import CartToggleBtn from './cartToggleBtn';
import CartList from './cartList';
import {CartContext} from '../../context';

const Cart = () => (
  <CartContext.Consumer>
    {cart => (
      <>
        <article
          className={`cart ${cart.cartStatus ? 'cart--open' : 'cart--close'} `}
        >
          <CartToggleBtn />
          <div className="cart__content">Cart is Empty</div>
          <CartList />
        </article>
      </>
    )}
  </CartContext.Consumer>
);

export default Cart;
