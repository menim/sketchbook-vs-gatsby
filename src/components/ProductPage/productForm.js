import React, {Component} from 'react';
// import {FormattedMessage} from 'react-intl';

import {StoreContext} from '../../context';

import Button from '../shared/button';
import QuantityCounter from '../shared/form/quantityCounter';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.product.price,
      count: 1,
      lang: '',
      title: `Скетчбук. ${this.props.product.uk.title}`,
      cover: '',
    };
  }

  componentDidMount() {
    const defaultLang = document.querySelector('input[name="lang"]:checked')
      .value;
    const defaultCover = document.querySelector('input[name="cover"]:checked')
      .value;
    this.setState({lang: defaultLang, cover: defaultCover});
  }

  setInput = value => {
    this.setState({count: value});
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  resetForm = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        count: 1,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.addItem(this.state);
    this.resetForm();
  };

  render() {
    const {product /*locale*/} = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset className="form__radio-list">
          <legend className="form__legend form__legend--with-triangle">
            {/* <FormattedMessage id="lang-option-title" />: */}
            Виберіть мову:
          </legend>
          {product.uk.lang.map((lang, index) => (
            <div className="form__item-wrapper" key={index}>
              <input
                className="form__input sr-only"
                id={`lang${index}`}
                type="radio"
                name="lang"
                value={lang}
                defaultChecked={index === 0 ? true : false}
                onChange={this.onChange}
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
        <fieldset className="form__radio-list">
          <legend className="form__legend form__legend--with-triangle">
            {/* <FormattedMessage id="cover-option-title" />: */}
            Виберіть обкладинку:
          </legend>
          {product.cover.map((cover, index) => (
            <div className="form__item-wrapper" key={index}>
              <input
                className="form__input sr-only"
                id={`${product.color[index]}`}
                type="radio"
                name="cover"
                value={`${cover.childImageSharp.fixed.src} ${product.color[index]}`}
                defaultChecked={index === 0 ? true : false}
                onChange={this.onChange}
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
        <QuantityCounter
          counter={this.state.count}
          setInput={this.setInput}
          small
        />
        <Button theme="primary">
          {/* <FormattedMessage id="cart-btn-title" /> */}
          Додати у кошик
        </Button>
      </form>
    );
  }
}

ProductForm.contextType = StoreContext;
