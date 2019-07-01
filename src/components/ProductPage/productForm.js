import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import Button from '../shared/button';

export default class ProductForm extends Component {
  state = {count: 1};

  setInput = value => {
    this.setState({count: value});
  };

  render() {
    const {product, locale} = this.props;

    return (
      <form className="form" onSubmit={console.log('test')}>
        <fieldset className="form__radio-list product__options-list">
          <legend className="form__legend form__legend--with-triangle">
            <FormattedMessage id="lang-option-title" />:
          </legend>
          {product[this.props.locale].lang.map((lang, index) => (
            <div className="form__item-wrapper" key={index}>
              <input
                className="form__input sr-only"
                id={`lang${index}`}
                type="radio"
                name="lang"
                value={lang}
                defaultChecked={index === 0 ? true : false}
              />
              <label
                className="form__label form__label--radio-btn"
                htmlFor={`lang${index}`}
              >
                {lang}
              </label>
            </div>
          ))}
        </fieldset>
        <fieldset className="form__radio-list product__options-list">
          <legend className="form__legend form__legend--with-triangle">
            <FormattedMessage id="cover-option-title" />:
          </legend>
          {product.cover.map((cover, index) => (
            <div className="form__item-wrapper" key={index}>
              <input
                className="form__input sr-only"
                id={`${product.color[index]}`}
                type="radio"
                name="cover"
                value={`${cover.childImageSharp.fixed.src} ${
                  product.color[index]
                }`}
                defaultChecked={index === 0 ? true : false}
              />
              <label
                className="form__label form__label--radio-btn"
                htmlFor={`${product.color[index]}`}
              >
                <img src={cover.childImageSharp.fixed.src} alt="" />
              </label>
            </div>
          ))}
        </fieldset>
        <Button theme="primary">
          <FormattedMessage id="cart-btn-title" />
        </Button>
      </form>
    );
  }
}
