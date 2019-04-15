import React, { Component } from 'react'
import Nav from './nav'
import Lang from './language'


class NavMobile extends Component {
   state = { isToggle: false }

  toggleMenu = () => {
    document.body.classList.toggle('hidden')
    this.setState((state) => { return {isToggle: !state.isToggle} })
  }
  render() {
    return (
      <div className='nav-mobile'>
        <button onClick={this.toggleMenu} className={`nav-mobile__btn  ${this.state.isToggle ? 'nav-mobile__btn--close' : ''}`}></button>
        <div className={`nav-mobile__menu ${this.state.isToggle ?  'nav-mobile__menu--open' : '' }`}><Nav mobile /></div>  
      </div>
    )
  }
}

export default NavMobile
