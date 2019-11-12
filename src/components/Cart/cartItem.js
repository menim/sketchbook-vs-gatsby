import React, {useState} from 'react';
import {useTransition, animated, config} from 'react-spring';

const CartItem = ({productProps, remove}) => {
  const {lang, cover, title, count, price} = productProps;
  const [productCover, color] = cover.split(' ');
  const [visibility, setVisibility] = useState(true);
  const transitions = useTransition(visibility, null, {
    from: {opacity: 1, transform: 'translateY(0%)'},
    enter: {opacity: 1},
    leave: {opacity: 0, transform: 'translateY(-10%)'},
    config: config.stiff
  });

  return (
    <>
      {transitions.map(
        ({item, key, props}) =>
          item && (
            <animated.li key={key} style={props} className="cart__item">
              <img src={productCover} alt="" />
              <span className="cart__title title">{title}</span>
              <span>{lang}</span>
              <span>{count}</span>
              <span>₴ {` ${price * count}`} </span>
              <button
                onClick={() => {
                  setVisibility(false);
                  setTimeout(() => {
                    remove(productProps);
                    setVisibility(true);
                  }, 300);
                }}
                className="cart__remove-btn close close--size-sm"
              >
                <span className="sr-only">Удалить</span>
              </button>
            </animated.li>
          )
      )}
    </>
  );
};

export default CartItem;
