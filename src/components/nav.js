import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Link } from './../i18n'
import ModalToggleBtn from './modal-toogle-btn'

const Nav = ({ telephone, isHeader }) => (
  <nav className={isHeader ? 'header__menu menu' : 'menu'}>
    <ul className='menu__list'>
      <li className='menu__item'><Link to='/delivery' className='menu__link menu__link--primary-theme'><FormattedMessage id='pay-delivery-title' /></Link></li>
      <li className='menu__item'><Link to='/contact/' className='menu__link menu__link--primary-theme'><FormattedMessage id='contact-page-title' /></Link></li>
      <li className='menu__item'><ModalToggleBtn><FormattedMessage id='button-order-title' /></ModalToggleBtn></li>
      { telephone ? 
        (<li className='menu__item menu__telephone'>+38 066 456 56 67</li>)
        : ''
      }   
    </ul>
  </nav>
)

export default Nav

Nav.propTypes = {
  telephone: PropTypes.bool
}

