import React from 'react';
import CartToggleBtn from './cartToggleBtn';
import CartList from './cartList';
import CheckoutForm from '../shared/form';

import {FormattedMessage} from 'react-intl';

const Cart = ({cart, locale}) => (
  <article
    className={`cart ${cart.cartStatus ? 'cart--open' : 'cart--close'} `}
  >
    <h3 className="cart__title">
      <FormattedMessage id="cart-title" />{' '}
      <span className="cart__products-quantity cart__products-quantity--size-lg">
        {cart.getProductsInCart()}
      </span>
    </h3>
    <CartToggleBtn />
    {cart.isEmpty() ? (
      <div className="cart__empty">
        <FormattedMessage id="cart-empty-text" />
      </div>
    ) : (
      <>
        <CartList />
        <CheckoutForm locale={locale} formType="cartOrder" />
      </>
    )}
  </article>
);

export default Cart;
