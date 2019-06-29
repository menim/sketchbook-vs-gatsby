import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LangContext} from '../../context/langContext';
import Button from '../shared/button';

class Language extends Component {
  static contextType = LangContext;

  state = {
    value: '',
  };

  componentDidMount() {
    const {locale} = this.context;
    this.setState({
      value: locale,
    });
  }

  handleClick = event => {
    const {originalPath} = this.context;
    const {value} = event.target;
    if (value === this.state.value) {
      return;
    }

    this.setState({value}, () => {
      localStorage.setItem('language', value);
      window.location.href = `/${value}${originalPath}`;
    });
  };

  render() {
    const {languages, locale} = this.context;
    const {value} = this.state;
    const {mobile} = this.props;

    if (!value) {
      return null;
    }

    return (
      <div className="header__languages languages">
        {languages.map(({value, text}) => (
          <Button
            className={
              locale === value
                ? 'languages__item  languages__item--active'
                : 'languages__item'
            }
            onClick={this.handleClick}
            key={value}
            value={value}
          >
            {text}
          </Button>
        ))}
      </div>
    );
  }
}

export default Language;
