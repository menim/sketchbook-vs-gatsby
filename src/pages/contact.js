import React from "react"

import "../sass/main.scss"
import "../sass/generic/_swiper.scss"

import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import FlexContainer from "../components/flex-container"
import Main from "../components/main"
import Headline from "../components/headline"
import Form from "../components/simple-form"


const Contact = () => (
  <>
  <Header />
    <Main>
      <Container>
        <FlexContainer>
          <div className="contacts">
          <section className="contact__main">
          <Headline>
            Контакти
          </Headline>
          <p className="paragraph">
            По питанням співпраці, пропозицій чи замовлення скетчбука пишіть нам або залишайте телефон и ми передзвонимо Вам
          </p>
          <Form />
          </section>
          </div>
          <aside className="aside-info contact__aside-info">
            <section className="aside-info__item">
              <h2 className="aside-info__header">Адреса</h2>
              <address className="aside-info__address">
                м.Харків, <br />
                вул.Пушкінська, 7
              </address>
            </section>
            <section className="aside-info__item">
              <h2 className="aside-info__header">Телефони</h2>
                <a className="telephone" href="tel: +38066-754-95-64">066-754-95-64</a>
                <a className="telephone" href="tel: +38097-025-8-646">097-025-86-46</a>
                <a className="telephone" href="tel: +3093-139-167-04">093-139-67-04</a>
                <a className="telephone" href="tel: +38050-364-26-87">050-364-26-87</a>
            </section>
            <section className="aside-info__item">
              <h2 className="aside-info__header">Пишіть нам</h2>
              <a href="mailto:mail@okobook.com">mail@okobook.com</a>
            </section>
          </aside>
        </FlexContainer>
      </Container>
    </Main>
  <Footer />
  </>
)
export default Contact