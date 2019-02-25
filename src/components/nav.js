import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item"><Link to="/delivery" className="menu__link menu__link--red-orange-theme">Оплата і доставка</Link></li>
      <li className="menu__item"><Link to="/contact/" className="menu__link menu__link--scooter-theme">Контакти</Link></li>
      <li className="menu__item"><Link to="/" className="menu__link menu__link--green-haze-theme">Замовити</Link></li>
    </ul>
  </nav>
)

export default Nav