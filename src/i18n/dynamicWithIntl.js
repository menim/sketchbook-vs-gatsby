import React, { Component } from "react"
import PropTypes from "prop-types"
import { IntlProvider, addLocaleData, injectIntl } from "react-intl"
import { localeData } from "./locales"

addLocaleData(localeData)

export default (ComposedComponent) => {
  class dynamicWithIntl extends Component {
    static childContextTypes = {
      language: PropTypes.object,
    }

    constructor(props) {
      super()
      const { pageContext } = props
      const { locale, languages, originalPath, langUk, langRu } = pageContext

      this.state = {
        language: {
          locale,
          languages,
          originalPath,
        },
        langRu,
        langUk
      }
    }

    getChildContext() {
      const { language } = this.state
      return {
        language,
      }
    }

    render() {
      const { language, langRu, langUk } = this.state
      const locale = language.locale || "en"
      const staticMessages = require(`./locales/${locale}.js`) // eslint-disable-line 
      const dynamicMessages = locale === "uk" ? langUk : langRu
      const messages = {...staticMessages, ...dynamicMessages}  
      const IntlComponent = injectIntl(ComposedComponent, locale)
      return (
        <IntlProvider locale={locale} messages={messages}>
          <IntlComponent {...this.props} />
        </IntlProvider>
      )
    }
  }
  return dynamicWithIntl
}