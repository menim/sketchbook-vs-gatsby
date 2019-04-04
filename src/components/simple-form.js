import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

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

const SimpleForm = ({ isContact }) => (
  <Formik 
   initialValues={{
     name: '',
     email: '',
     message: ''
   }}
   validateOnChange
   validationSchema = {contactSchema}
  >
    {({ errors, touched }) => (
      <Form name="contact" method="POST" onSubmit={()=>{}} netlify-honeypot="bot-field" data-netlify="true" noValidate className={isContact ? 'form contact__form' : 'form'}>
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
      </Form>
    )} 
  </Formik>
 )

 export default SimpleForm

 SimpleForm.defaultProp = {
   isContact: false
 }

 SimpleForm.propTypes = {
   isContact: PropTypes.bool
 }
