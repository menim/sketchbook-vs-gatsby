import React from 'react';
import CartToggleBtn from './cartToggleBtn';
import CartList from './cartList';
import CartTotal from './total';
import CheckoutForm from '../shared/form';

// import {FormattedMessage} from 'react-intl';

const Cart = ({appInterface, store /*locale*/}) => (
  <article
    className={`cart ${
      appInterface.cartStatus ? 'cart--is-open' : 'cart--is-hide'
    } `}
  >
    <h3 className="cart__header">
      {/* <FormattedMessage id="cart-title" /> */}
      Ваші скетчбуки
      <span className="cart__products-quantity cart__products-quantity--size-lg">
        {store.getProductsInCart()}
      </span>
    </h3>
    <CartToggleBtn productsInCart={store.getProductsInCart()} />
    {appInterface.cartIsEmpty() ? (
      <div className="cart__empty center-vs-transform">
        {/* <FormattedMessage id="cart-empty-text" /> */}
        Ваша корзина на даний момент порожня
      </div>
    ) : (
      <>
        <CartList />
        <CartTotal totalPrice={store.totalPrice} />
        <CheckoutForm
          /*locale={locale}*/
          formType="cartOrder"
          inputCommonClasses="form__input--size-md"
          cartData={store.productItems}
          removeAll={store.removeAllItems}
        />
      </>
    )}
  </article>
);

export default Cart;
