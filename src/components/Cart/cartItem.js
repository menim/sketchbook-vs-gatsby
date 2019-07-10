import React from 'react';

const CartItem = ({productProps, remove}) => {
  const {lang, cover, title, count, price} = productProps;
  const [productCover, color] = cover.split (' ');
  return (
    <li className="cart__item">
      <img src={productCover} alt="" />
      <span className="cart__title title">{title}</span>
      <span>{lang}</span>
      <span>{count}</span>
      <span>₴ {` ${price * count}`} </span>
      <button
        onClick={() => {
          remove (lang, cover);
        }}
        className="cart__remove-btn close close--size-sm"
      >
        <span className="sr-only">Удалить</span>
      </button>
    </li>
  );
};

export default CartItem;
