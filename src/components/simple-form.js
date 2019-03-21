import React from 'react'
import MultilineBg from './multilineBg'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const contactSchema = Yup.object().shape({
  name: Yup.string()
  .min(5,'Дуже коротке им\'я')
  .max(30, 'Дуже довге им\'я')
  .required('Заповніть будь ласка поле'),
  email: Yup.string()
  .email('Невірна email адреса')
  .required('Заповніть будь ласка поле'),
  message: Yup.string()
  .min(5, 'Дуже коротке повідомлення')
  .max(30, 'Дуже довге повідомлення')
  .required('Заповніть будь ласка поле')
})

const SimpleForm = () => (
  <Formik 
   initialValues={{
     name: '',
     email: '',
     message: ''
   }}
   validateOnChange
   validationSchema = {contactSchema}
  >
    {({errors, touched}) => (
      <Form action="" className="form">
        <label className="form__label" htmlFor="name">
          <MultilineBg>Им'я</MultilineBg>
          <Field className={errors.name && touched.name ? "form__input form__input--error" : "form__input"} name="name" />
          {errors.name && touched.name ? (
            <div className="form__error">{errors.name}</div>
          ) : null}
        </label>
        <label className="form__label" htmlFor="email">
          <MultilineBg>Email адреса</MultilineBg>
          <Field className={errors.email && touched.email ? "form__input form__input--error"  : "form__input"} name="email" type="email" />
          {errors.email && touched.email ? (
            <div className="form__error">{errors.email}</div>
          ) : null}
        </label>
        <label className="form__label" htmlFor="message">
          <MultilineBg> Повідомлення</MultilineBg>
          <Field className={errors.message && touched.message ? "form__input form__input--textarea form__input--error" : "form__input form__input--textarea"} component="textarea" name="message" />
          {errors.message && touched.message ? <div className="form__error">{errors.message}</div> : null}
        </label>
         <button className="form__btn btn" type="submit">Відправити</button>
      </Form>
    )} 
  </Formik>
 )

 export default SimpleForm
