import React from 'react'

import {StoreContext} from '../../context';

import CartToggleBtn from './cartToggleBtn';

const CartHeader = () => {
  return (
  <StoreContext.Consumer>
    {({getProductsInCart}) =>
      <>
        <h3 className="cart__header">
          {/* <FormattedMessage id="cart-title" /> */}
          Ваші скетчбуки
          <span className="cart__products-quantity cart__products-quantity--size-lg">
            {getProductsInCart ()}
          </span>
        </h3>
        <CartToggleBtn productsInCart={getProductsInCart ()} />
      </>
    }
   </StoreContext.Consumer>)
}

export default CartHeader;
