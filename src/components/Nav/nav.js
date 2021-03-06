import React from 'react';
import PropTypes from 'prop-types';
// import {FormattedMessage} from 'react-intl';
// import {Link} from '../../i18n';
//import {Link} from 'gatsby';
import {SpringLink} from '../../react-spring-animation';
import ModalToggleBtn from '../shared/modalToggleBtn';
import Button from '../shared/button';

const Nav = ({telephone, isPlace, mobile}) =>
  mobile ? (
    <nav className="menu menu--mobile">
      <ul className="menu__list">
        <li className="menu__item">
          <Button
            as={SpringLink}
            to="/delivery"
            className="menu__link menu__link--primary-theme"
          >
            {/* <FormattedMessage id="pay-delivery-title" /> */}
            Оплата і доставка
          </Button>
        </li>
        <li className="menu__item">
          <Button
            as={SpringLink}
            to="/contact/"
            className="menu__link menu__link--primary-theme"
          >
            {/* <FormattedMessage id="contact-page-title" /> */}
            Контакти
          </Button>
        </li>
        <li className="menu__item">
          <ModalToggleBtn>
            {/* <FormattedMessage id="quick-order-title" /> */}
            Швидке замовлення
          </ModalToggleBtn>
        </li>
        <li className="menu__item menu__telephone">
          <a className="telephone" href="tel: +38066-456-56-67">
            066-456-56-67
          </a>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className={`menu ${isPlace && isPlace + '__menu'}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Button
            as={SpringLink}
            to="/delivery"
            className="menu__link menu__link--primary-theme"
          >
            {/* <FormattedMessage id="pay-delivery-title" /> */}
            Оплата і доставка
          </Button>
        </li>
        <li className="menu__item">
          <Button
            as={SpringLink}
            to="/contact/"
            className="menu__link menu__link--primary-theme"
          >
            {/* <FormattedMessage id="contact-page-title" /> */}
            Контакти
          </Button>
        </li>
        <li className="menu__item">
          <ModalToggleBtn>
            {/* <FormattedMessage id="quick-order-title" /> */}
            Швидке замовлення
          </ModalToggleBtn>
        </li>
        {telephone ? (
          <li className="menu__item menu__telephone">
            <a className="telephone" href="tel: +38066-456-56-67">
              066-456-56-67
            </a>
          </li>
        ) : (
          ''
        )}
      </ul>
    </nav>
  );

export default Nav;

Nav.propTypes = {
  telephone: PropTypes.bool,
};
