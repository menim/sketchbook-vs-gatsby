import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import {LangContext} from '../context';

const I18nLink = ({to, children, ...rest}) => (
  <LangContext.Consumer>
    {context => {
      const {locale} = context;
      const toWithLang = locale ? `/${locale}${to}` : `${to}`;
      return (
        <Link activeClassName='menu__link--active' to={toWithLang} {...rest}>
          {children}
        </Link>
      );
    }}
  </LangContext.Consumer>
);

I18nLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default I18nLink;
