import React from 'react';
import {StoreContext} from '../../context';

import CartItem from './cartItem';

const CartList = () => (
  <StoreContext.Consumer>
    {store => {
      return (
        <ul className="cart__list">
          {store.productItems.map((product, index) => (
            <CartItem
              key={index}
              productProps={product}
              remove={store.removeItem}
            />
          ))}
        </ul>
      );
    }}
  </StoreContext.Consumer>
);
export default CartList;
