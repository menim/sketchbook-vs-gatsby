import React from 'react';
import CartToggleBtn from './cartToggleBtn';
import CartList from './cartList';

const Cart = ({cart}) => (
  <article
    className={`cart ${cart.cartStatus ? 'cart--open' : 'cart--close'} `}
  >
    <CartToggleBtn />
    <div className="cart__content">Cart is Empty</div>
    <CartList />
  </article>
);

export default Cart;
