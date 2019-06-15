import React, {Component} from 'react';
import Nav from './nav';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

class NavMobile extends Component {
  state = {isToggle: false};
  targetElement = null;

  componentDidMount() {
    this.targetElement = document.querySelector('.nav-mobile__menu');
  }

  bodyScrollLockToggle = () => {
    this.state.isToggle
      ? enableBodyScroll(this.targetElement)
      : disableBodyScroll(this.targetElement);
  };

  toggleMenu = () => {
    this.setState(state => {
      return {isToggle: !state.isToggle};
    });
    this.bodyScrollLockToggle();
  };

  componentWillUnmount() {
    enableBodyScroll(this.targetElement);
  }

  render() {
    return (
      <div className='nav-mobile'>
        <button
          onClick={this.toggleMenu}
          className={`nav-mobile__btn  ${
            this.state.isToggle ? 'nav-mobile__btn--close' : ''
          }`}
        >
          <span className='sr-only'>Меню</span>
        </button>
        <div
          className={`nav-mobile__menu ${
            this.state.isToggle ? 'nav-mobile__menu--open' : ''
          }`}
        >
          <Nav mobile />
        </div>
      </div>
    );
  }
}

export default NavMobile;
