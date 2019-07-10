import React from 'react';
import {FormattedMessage} from 'react-intl';

const Total = () => (
  <div className="cart__total total">
    <div className="total__label">
      <FormattedMessage id="cart-total-title" />:
    </div>
    <strong className="total__price">0</strong>
  </div>
);

export default Total;
