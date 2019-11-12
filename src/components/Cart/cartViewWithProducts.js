import React from 'react';

import CartList from './cartList';
import CartTotal from './total';
import CheckoutForm from '../shared/form';

import {StoreContext} from '../../context/storeContext';

const CartViewWithProducts = () => {
  return (<StoreContext.Consumer>
  { ({totalPrice, productItems, removeAllItems}) => (
    <>
    <CartList />
    <div style={{flex: 0}}>
      <CartTotal totalPrice={totalPrice} />
      <CheckoutForm
        /*locale={locale}*/
        formType="cartOrder"
        inputCommonClasses="form__input--size-md"
        cartData={productItems}
        removeAll={removeAllItems}
      />
    </div>
    </>
    )
  }
  </StoreContext.Consumer>)
}

export default CartViewWithProducts;
