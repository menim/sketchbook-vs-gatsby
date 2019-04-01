import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Language extends Component {
  static contextTypes = {
    language: PropTypes.object,
  }

  state = {
    value: '',
  }

  componentDidMount() {
    const { language } = this.context
    this.setState({
      value: language.locale || language.detected,
    })
  }

  handleClick = event => {
    const { language } = this.context
    const { originalPath } = language
    const { value } = event.target
    if (value === this.state.value) {
      return
    }

    this.setState({ value }, () => {
      localStorage.setItem('language', value)
      window.location.href = `/${value}${originalPath}`
    })
  }

  render() {
    const { language } = this.context
    const { languages, locale } = language
    const { value } = this.state

    if (!value) {
      return null
    }

    return (
      <div className='languages'>
        {languages.map(({ value, text }) => (
          <button className={(locale === value) ? 'languages__item  languages__item--active' : 'languages__item'} onClick={this.handleClick}  key={value} value={value}>
            {text}
          </button>
        ))}
      </div>
    )
  }
}

export default Language