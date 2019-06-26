import React, {PureComponent} from 'react';
import {navigate} from 'gatsby';

class Redirect extends PureComponent {
  constructor(props) {
    super(props);
    const {pathname} = props.location;
    if (typeof window !== 'undefined') {
      const detected = window.localStorage.getItem('language') || 'uk';
      const newUrl = `/${detected}/${pathname}`;

      window.localStorage.setItem('language', detected);
      navigate(newUrl);
    }
  }

  render() {
    return <div />;
  }
}

export default Redirect;
