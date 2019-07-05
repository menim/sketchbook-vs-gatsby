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
      <FormattedMessage id="cart-title" />
    </h3>
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
