import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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


class SimpleForm extends Component {
  handleSubmit = (values, actions )=>{
    actions.setSubmitting(false)
   fetch("/", {
     method: "POST",
     headers: { "Content-Type": "application/x-www-form-urlencoded" },
     body: encode({ "form-name": "contact-us", ...values })
   }).then((response) => {
     if(response.status === 200) {
       actions.setStatus({ success: <FormattedMessage id="success-message" /> })

       setTimeout(function(){actions.resetForm()}, 2000)
     } 
   })
     .catch(error => {console.log(error)})
  }

  render() {
    return ( 
      <Formik 
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validateOnChange
        validationSchema = {contactSchema}
        onSubmit={(values, actions) => this.handleSubmit(values, actions)}
      >
      {({ errors, touched, isSubmitting, status  }) => (
        <Form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" noValidate className={this.props.isContact ? 'form contact__form' : 'form'}>
        <input type="hidden" name="form-name" value="contact" />
          <label className='form__label' htmlFor='name'>
            <FormattedMessage id='form-name-field' />*:
            <Field className={errors.name && touched.name ? 'form__input form__input--error' : 'form__input'} name='name' />
            {errors.name && touched.name ? (
              <div className='form__error'>{errors.name}</div>
            ) : null}
          </label>
          <label className='form__label' htmlFor='email'>
            <FormattedMessage id='form-email-field' />*:
            <Field className={errors.email && touched.email ? 'form__input form__input--error'  : 'form__input'} name='email' type='email' />
            {errors.email && touched.email ? (
              <div className='form__error'>{errors.email}</div>
            ) : null}
          </label>
          <label className='form__label' htmlFor='message'>
            <FormattedMessage id='form-message-field' />*:
            <Field className={errors.message && touched.message ? 'form__input form__input--textarea form__input--error' : 'form__input form__input--textarea'} name='message' />
            {errors.message && touched.message ? <div className="form__error">{errors.message}</div> : null}
          </label>
          <button className='form__btn btn btn--primary-theme' type='submit'><FormattedMessage id='button-sent-title' /></button>
          {status && status.success ? <div className='form__success-message'>{status.success}</div>  : ''}
        </Form>
      )} 
    </Formik>
    )
  }
}

 export default SimpleForm

 SimpleForm.defaultProp = {
   isContact: false
 }

 SimpleForm.propTypes = {
   isContact: PropTypes.bool
 }
