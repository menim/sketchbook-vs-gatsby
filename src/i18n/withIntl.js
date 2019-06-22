import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl';
import {localeData} from './locales';

addLocaleData(localeData);

export default ComposedComponent => {
  class withIntl extends Component {
    static childContextTypes = {
      language: PropTypes.object,
    };

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

    getChildContext() {
      const {language} = this.state;
      return {
        language,
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
          <IntlComponent {...this.props} />
        </IntlProvider>
      );
    }
  }
  return withIntl;
};
