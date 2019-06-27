import React from 'react';
import {FormattedMessage} from 'react-intl';
import * as Yup from 'yup';
import {phoneRegExp} from '../../../helpers';

export const orderSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, <FormattedMessage id='error-short-name' />)
    .max(30, <FormattedMessage id='error-long-name' />)
    .required(<FormattedMessage id='error-void-message' />),
  telephone: Yup.string()
    .matches(phoneRegExp, <FormattedMessage id='error-telephone-num' />)
    .required(<FormattedMessage id='error-void-message' />),

  quantity: Yup.number(),
});

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, <FormattedMessage id='error-short-name' />)
    .max(30, <FormattedMessage id='error-long-name' />)
    .required(<FormattedMessage id='error-void-message' />),
  email: Yup.string()
    .email(<FormattedMessage id='error-email' />)
    .required(<FormattedMessage id='error-void-message' />),
  message: Yup.string()
    .min(5, <FormattedMessage id='error-short-message' />)
    .max(500, <FormattedMessage id='error-long-message' />)
    .required(<FormattedMessage id='error-void-message' />),
});
