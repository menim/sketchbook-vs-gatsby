import React from 'react'
import { Link } from './../i18n'
import { FormattedMessage } from 'react-intl'

const Nav = ({telephone}) => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item"><Link to="/delivery" className="menu__link menu__link--primary-theme"><FormattedMessage id="pay-delivery-title" /></Link></li>
      <li className="menu__item"><Link to="/contact/" className="menu__link menu__link--primary-theme"><FormattedMessage id="contact-page-title" /></Link></li>
      <li className="menu__item"><Link to="/" className="btn btn--primary-theme"><FormattedMessage id="button-order-title" /></Link></li>
      { telephone ? 
        (<li className="menu__item menu__telephone">+38 066 456 56 67</li>)
        : ''
      }   
    </ul>
  </nav>
)

export default Nav