import React from 'react'

import Container from './container'
import Nav from './nav'
import Logo from './logo'

const Footer = () => (
  <footer className="footer">
    <Container>
      <div className="footer__top">
        <section className="footer__section">
          <Logo logoSize />
        </section>
        <section className="footer__section">
          <h4 className="footer__title">
            Aдрес
          </h4>
          <address>
            м.Харків, <br/>
            вул.Пушкінська, 7
          </address>
        </section>
        <section className="footer__section">
          <h4 className="footer__title">Контакти</h4>
          <a className="telephone" href="tel: +38066-754-95-64">066-754-95-64</a>
          <a className="telephone" href="tel: +38097-025-8-646">097-025-86-46</a>
          <a className="telephone" href="tel: +3093-139-167-04">093-139-67-04</a>
        </section>
        <section className="footer__section">
          <h4 className="footer__title">Email</h4>
          mail@okobook.com
        </section>
      </div>
      <div className="footer__bottom">
        <Nav />
        <small className="copyright">© 1991–2019 Видавництво ОКО</small>
      </div>
    </Container>
  </footer>
)

export default Footer