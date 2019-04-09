import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { FormattedMessage } from 'react-intl'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const phoneRegExp =/^\+?3?8?(0\d{9})$/

const orderSchema = Yup.object().shape({
  name: Yup.string()
  .min(5,<FormattedMessage id='error-short-name' />)
  .max(30, <FormattedMessage id='error-long-name' />)
  .required(<FormattedMessage id='error-void-message' />),
  telephone: Yup.string().matches(phoneRegExp, <FormattedMessage id='error-telephone-num' />)
  .required(<FormattedMessage id='error-void-message' />),
  quantity: Yup.number()
});


const contactSchema = Yup.object().shape({
  name: Yup.string()
  .min(5,<FormattedMessage id='error-short-name' />)
  .max(30, <FormattedMessage id='error-long-name' />)
  .required(<FormattedMessage id='error-void-message' />),
  email: Yup.string()
    .email(<FormattedMessage id='error-email' />)
  .required(<FormattedMessage id='error-void-message' />),
  message: Yup.string()
  .min(5, <FormattedMessage id='error-short-message' />)
    .max(500, <FormattedMessage id='error-long-message' />)
  .required(<FormattedMessage id='error-void-message' />)
})

class OrderForm extends Component {

  state = { count: 1 }

  handleChange = (event) => {
    this.setState({count: event.target.value < 1 ? 1 : +event.target.value});
  } 

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    this.setState({count: this.state.count <= 1 ? 1 : this.state.count-1})
  }

  handleSubmit = (values, actions) => {
    actions.setSubmitting(false)
   fetch(`/${this.props.locale}/`, {
     method: 'POST',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: encode({ 'form-name': 'contact', ...values })
   }).then((response) => {
     if(response.status === 200) {
       actions.setStatus({ success: <FormattedMessage id='success-message' /> })
       setTimeout(() => {
        actions.resetForm();
        this.setState({count: 1})   
      }, 2000)
     } 
   })
  }

  render() {
    const {locale, order } = this.props

    return ( <StaticQuery query={graphql`
      query {
        allDataJson {
          edges {
            node {
              uk {
                title
                lang
              }
              ru {
                title
                lang
              }
            }
          }
        }
      }
      `}
      render={ (data) => {
        const listSketch = data.allDataJson.edges.map((product, index) => (<option value={product.node[locale].title} key={index}>{product.node[locale].title}</option>))
        const selectDefaultVal = listSketch[0].props.value // get default value for select component

        return (
            <Formik 
            initialValues={{
              name: '',
              telephone: '',
              quantity: this.state.count,
              selectSketch: selectDefaultVal,
              message: '',
              email: ''
            }}
            enableReinitialize={true}
            validateOnChange
            validationSchema = {this.props.order ? orderSchema : contactSchema}
            onSubmit={(values, actions) => this.handleSubmit(values, actions)}
            >
            {({errors, touched, isSubmitting, status }) => (
              <Form className='form form--order' name="contact" method='POST' netlify-honeypot='bot-field' data-netlify='true' noValidate>
                <input type='hidden' name='form-name' value='contact' />
                <fieldset>
                  <legend className={order ? 'form__title' : 'visuallyhidden'}>Форма заказа</legend>
                  <label className={order ? 'form__label form__label--select-wrapper' : 'visuallyhidden'} htmlFor='select-sketch'>
                    <Field className='form__input form__input--select' component='select' name='selectSketch'>
                      {listSketch}
                    </Field>
                  </label>
                  <label className={order ? 'form__label' : 'visuallyhidden'} htmlFor='quantity'>
                    <FormattedMessage id="form-quantity-title" />:
                    <div>
                      <Field className='form__input form__input--quantity' onChange={this.handleChange} value={this.state.count} name='quantity' type="number"  />
                      <button className='form__control' onClick={this.increment} type='button'>+</button>
                      <button className='form__control' onClick={this.decrement} type='button'>-</button>
                    </div>
                  </label>  
                  <label className='form__label' htmlFor='name'>
                    <FormattedMessage id='form-name-field' />*:
                    <Field className={errors.name && touched.name ? 'form__input form__input--error' : 'form__input'} name='name' />
                    {errors.name && touched.name ? <div className="form__error">{errors.name}</div> : null}
                  </label>
                  <label className={order ? 'visuallyhidden'  : 'form__label'} htmlFor='email'>
                    <FormattedMessage id='form-email-field' />*:
                    <Field className={errors.email && touched.email ? 'form__input form__input--error'  : 'form__input'} name='email' type='email' />
                    {errors.email && touched.email ? (
                      <div className='form__error'>{errors.email}</div>
                    ) : null}
                  </label>
                  <label className={order ? 'visuallyhidden' : 'form__label'}  htmlFor='message'>
                    <FormattedMessage id='form-message-field' />*:
                    <Field className={errors.message && touched.message ? 'form__input form__input--textarea form__input--error' : 'form__input form__input--textarea'} name='message' />
                    {errors.message && touched.message ? <div className="form__error">{errors.message}</div> : null}
                  </label>
                  <label className={order ? 'form__label' : 'visuallyhidden'}  htmlFor='telephone'>
                    Телефон:*
                    <Field  className={errors.telephone && touched.telephone ? 'form__input form__input--error' : 'form__input'} name='telephone' type="numeber" placeholder='' /> 
                    {errors.telephone && touched.telephone ? <div className="form__error">{errors.telephone}</div> : null}
                  </label>        
                  <button className='form__btn btn btn--primary-theme' type='submit'>{order ? <FormattedMessage id='button-order-title' /> : <FormattedMessage id='button-sent-title' />}</button> 
                  {status && status.success ? <div className='form__success-message'>{status.success}</div>  : ''}   
                </fieldset>
              </Form>
            )}
            </Formik>
          )}
        }  
      />
    )
  }
}

export default OrderForm