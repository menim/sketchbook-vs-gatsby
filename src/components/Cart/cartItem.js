import React from 'react';

const CartItem = ({productProps, remove}) => {
  const {lang, cover, title, count} = productProps;
  const [productCover, color] = cover.split (' ');
  return (
    <li className="cart__item">
      <img src={productCover} alt="" />
      <span>{title}</span>
      <span>{lang}</span>
      <span>{count}</span>
      <span>₴ {` ${180 * count}`} </span>
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
