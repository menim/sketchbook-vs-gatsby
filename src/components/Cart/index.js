import React from 'react';
import CartToggleBtn from './cartToggleBtn';
import CartList from './cartList';
import CheckoutForm from '../shared/form';

const Cart = ({cart, locale}) => (
  <article
    className={`cart ${cart.cartStatus ? 'cart--open' : 'cart--close'} `}
  >
    <CartToggleBtn />
    {cart.isEmpty() ? (
      <div className="cart__content">Cart is Empty</div>
    ) : (
      <>
        <CartList />
        <CheckoutForm locale={locale} formType="cartOrder" />
      </>
    )}
  </article>
);

export default Cart;
