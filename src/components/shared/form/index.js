import React, {PureComponent} from 'react';
import {StaticQuery, graphql} from 'gatsby';

import {encode} from '../../../helpers';

// import {FormattedMessage} from 'react-intl';
import {Formik, Form, Field} from 'formik';

import {schemas} from './schemas';

import QuantityCounter from './quantityCounter';

class SimpleForm extends PureComponent {
  state = {count: 1};

  setInput = value => {
    this.setState({count: value});
  };

  handleSubmit = (values, actions, cartData, formType, removeAllItems) => {
    actions.setSubmitting(false);
    let dataToEmail = '';
    if (formType === 'cartOrder') {
      let {telephone, name, message} = values;
      cartData = cartData.map(product => {
        return {
          Цена: product.price,
          Количество: product.count,
          Цвет: product.cover.split(' ')[1],
          Язык: product.lang,
          Нвзвание: product.title,
        };
      });

      message = JSON.stringify(cartData, null, '\t');
      dataToEmail = {telephone, name, message};
    } else {
      dataToEmail = values;
    }

    fetch('/' /*`/${this.props.locale}/`*/, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', ...dataToEmail}),
    }).then(response => {
      if (response.status === 200) {
        actions.setStatus({
          success: 'Ваше повідомлення відправлено, дякуємо', //<FormattedMessage id="success-message" />,
        });
        setTimeout(() => {
          if (formType === 'cartOrder') {
            localStorage.clear();
            removeAllItems();
          } else {
            actions.resetForm();
            this.setState({count: 1});
          }
        }, 2000);
      }
    });
  };

  render() {
    const {
      //locale,
      formType,
      inputCommonClasses,
      cartData = '',
      removeAll = () => {},
    } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query {
            allDataJson {
              edges {
                node {
                  uk {
                    title
                    lang
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const listSketch = data.allDataJson.edges.map((product, index) => (
            <option
              /*value={product.node[locale].title}*/ value={
                product.node.uk.title
              }
              key={index}
            >
              {/* {product.node[locale].title} */}
              {product.node.uk.title}
            </option>
          ));
          const selectDefaultVal = listSketch[0].props.value; // get default value for select component
          return (
            <Formik
              initialValues={{
                name: '',
                telephone: '',
                quantity: this.state.count,
                selectSketch: selectDefaultVal,
                message: '',
                email: '',
              }}
              validateOnChange
              validationSchema={schemas[formType]}
              onSubmit={(values, actions) =>
                this.handleSubmit(
                  values,
                  actions,
                  cartData,
                  formType,
                  removeAll
                )
              }
            >
              {({errors, touched, status, values}) => {
                values.quantity = this.state.count;
                return (
                  <Form
                    name="contact"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    noValidate
                    className={`form form--${formType}`}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <fieldset>
                      <legend
                        className={
                          formType === 'order' ? 'form__title' : 'none'
                        }
                      >
                        {/* <FormattedMessage id="form-order-title" /> */}
                        Форма замовлення
                      </legend>
                      <label
                        className={
                          formType === 'order'
                            ? 'form__label form__label--select-wrapper'
                            : 'none'
                        }
                        htmlFor="select-sketch"
                      >
                        <Field
                          className="form__input form__input--select"
                          component="select"
                          name="selectSketch"
                        >
                          {listSketch}
                        </Field>
                      </label>
                      <label
                        className={
                          formType === 'order' ? 'form__label' : 'none'
                        }
                        htmlFor="quantity"
                      >
                        {/* <FormattedMessage id="form-quantity-title" /> */}
                        Кількість:
                        <QuantityCounter
                          setInput={this.setInput}
                          counter={this.state.count}
                        />
                      </label>
                      <label className="form__label" htmlFor="name">
                        {/* <FormattedMessage id="form-name-field" /> */}
                        Им'я *:
                        <Field
                          className={
                            errors.name && touched.name
                              ? `form__input form__input--error ${inputCommonClasses}`
                              : `form__input ${inputCommonClasses}`
                          }
                          name="name"
                        />
                        {errors.name && touched.name ? (
                          <div className="form__error">{errors.name}</div>
                        ) : null}
                      </label>
                      <label
                        className={
                          formType === 'order' || formType === 'cartOrder'
                            ? 'none'
                            : 'form__label'
                        }
                        htmlFor="email"
                      >
                        {/* <FormattedMessage id="form-email-field" /> */}
                        Email адреса *:
                        <Field
                          className={
                            errors.email && touched.email
                              ? 'form__input form__input--error'
                              : `form__input ${inputCommonClasses}`
                          }
                          name="email"
                          type="email"
                        />
                        {errors.email && touched.email ? (
                          <div className="form__error">{errors.email}</div>
                        ) : null}
                      </label>
                      <label
                        className={
                          formType === 'order' || formType == 'cartOrder'
                            ? 'form__label'
                            : 'none'
                        }
                        htmlFor="telephone"
                      >
                        Телефон:*
                        <Field
                          className={
                            errors.telephone && touched.telephone
                              ? `form__input form__input--error ${inputCommonClasses}`
                              : `form__input ${inputCommonClasses}`
                          }
                          name="telephone"
                          type="numeber"
                          placeholder=""
                        />
                        {errors.telephone && touched.telephone ? (
                          <div className="form__error">{errors.telephone}</div>
                        ) : null}
                      </label>
                      <label
                        className={
                          formType === 'order' || formType === 'cartOrder'
                            ? 'none'
                            : 'form__label'
                        }
                        htmlFor="message"
                      >
                        {/* <FormattedMessage id="form-message-field" /> */}
                        Повідомлення *:
                        <Field
                          className={
                            errors.message && touched.message
                              ? 'form__input form__input--textarea form__input--error'
                              : 'form__input form__input--textarea'
                          }
                          name="message"
                        />
                        {errors.message && touched.message ? (
                          <div className="form__error">{errors.message}</div>
                        ) : null}
                      </label>

                      <button
                        className="form__btn btn btn--primary-theme"
                        type="submit"
                      >
                        {(formType === 'order' || formType === 'cartOrder')
                          ?  `Замовити`
                          : `Відправити`}
                      </button>

                      {status && status.success ? (
                        <div className="form__success-message">
                          {status.success}
                        </div>
                      ) : (
                        ''
                      )}
                    </fieldset>
                  </Form>
                );
              }}
            </Formik>
          );
        }}
      />
    );
  }
}

export default SimpleForm;
