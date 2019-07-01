import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl';
import {localeData} from './locales';

import {LangContext} from '../context';

addLocaleData(localeData);

export default ComposedComponent => {
  class withIntl extends Component {
    constructor(props) {
      super(props);
      const {pageContext} = props;
      const {locale, languages, originalPath, langUk, langRu} = pageContext;

      this.state = {
        language: {
          locale,
          languages,
          originalPath,
        },
        langRu,
        langUk,
      };
    }

    render() {
      const {language, langRu, langUk} = this.state;
      const locale = language.locale || 'uk';
      const staticMessages = require(`./locales/${locale}.js`); // eslint-disable-line
      const dynamicMessages = locale === 'uk' ? langUk : langRu;
      const messages = {...staticMessages, ...dynamicMessages};
      const IntlComponent = injectIntl(ComposedComponent);
      return (
        <IntlProvider
          textComponent={React.Fragment}
          locale={locale}
          messages={messages}
        >
          <LangContext.Provider value={this.state.language}>
            <IntlComponent {...this.props} />
          </LangContext.Provider>
        </IntlProvider>
      );
    }
  }
  return withIntl;
};
