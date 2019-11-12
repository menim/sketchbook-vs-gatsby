import React, {useState} from 'react';

import CartHeader from './cartHeader';
import CartEmptyView from './cartEmptyView';
import CartViewWithProducts from './cartViewWithProducts';

import {useSpring, useTransition, animated, config} from 'react-spring';

// import {FormattedMessage} from 'react-intl';

const Cart = ({appInterface /*locale*/}) => {
  const transitions = useTransition (appInterface.cartIsEmpty (), null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  const cartStyles = useSpring ({
    config: {tension: 0},
    transform: appInterface.cartStatus ? 'translateX(0%)' : 'translateX(100%)',
  });

  return (
    <animated.article style={cartStyles} className="cart">
      <CartHeader />
      {transitions.map (
        ({item, key, props}) =>
          item
            ? <animated.div
                key={key}
                style={props}
                className="center-vs-transform"
              >
                <CartEmptyView />
              </animated.div>
            : <animated.div className="cart__view" key={key} style={props}>
                <CartViewWithProducts />
              </animated.div>
      )}
    </animated.article>
  );
};

export default Cart;
