import React from 'react';
//import {FormattedMessage} from 'react-intl';
import * as Yup from 'yup';
import {phoneRegExp} from '../../../helpers';

const orderSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "*Дуже коротке им'я") //<FormattedMessage id="error-short-name" />
    .max(30, "*Дуже довге им'я") //<FormattedMessage id="error-long-name" />
    .required('*Заповніть будь ласка поле'), //<FormattedMessage id="error-void-message" />
  telephone: Yup.string()
    .matches(phoneRegExp, '*Невірний номер, приклад 0977574545') //<FormattedMessage id="error-telephone-num" />
    .required('*Заповніть будь ласка поле'),//<FormattedMessage id="error-void-message" />),

  quantity: Yup.number(),
});

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5,'*Дуже коротке им\'я') //<FormattedMessage id="error-short-name" />
    .max(30,'*Дуже довге им\'я') //<FormattedMessage id="error-long-name" />
    .required('*Заповніть будь ласка поле'),//<FormattedMessage id="error-void-message" />
  email: Yup.string()
    .email('*Невірна email адреса')//<FormattedMessage id="error-email" />
    .required('*Заповніть будь ласка поле'),//<FormattedMessage id="error-void-message" />
  message: Yup.string()
    .min(5,'*Дуже коротке им\'я')//<FormattedMessage id="error-short-message" />
    .max(500,'*Дуже довге им\'я') //<FormattedMessage id="error-long-message" />
    .required('*Заповніть будь ласка поле')//<FormattedMessage id="error-void-message" />
});

const cartOrderSchema = Yup.object().shape({
  name: Yup.string()
    .min(5,'*Дуже коротке им\'я')//<FormattedMessage id="error-short-name" />
    .max(30,'*Дуже довге им\'я') //<FormattedMessage id="error-long-name" />
    .required('*Заповніть будь ласка поле'),//<FormattedMessage id="error-void-message" />
  telephone: Yup.string()
    .matches(phoneRegExp,'*Невірний номер, приклад 0977574545') //<FormattedMessage id="error-telephone-num" />
    .required('*Заповніть будь ласка поле'),//<FormattedMessage id="error-void-message" />
});

export const schemas = {
  order: orderSchema,
  contact: contactSchema,
  cartOrder: cartOrderSchema,
};
