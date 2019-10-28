import React from 'react';
import PropTypes from 'prop-types';

// import {FormattedMessage} from 'react-intl';
// import {withIntl} from '../i18n';

import {Link} from 'gatsby';

//import Seo from '../components/shared/seo'

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

import delivery from './../images/delivery.svg';
import pay from './../images//pay.svg';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Main from '../components/shared/main';
import Container from '../components/shared/container';
import Headline from '../components/shared/headline';

const Delivery = (/*{intl}*/) => (
  <>
    <Layout>
      {/* <Seo
        description={intl.messages.deliveryPageDescription}
        title={intl.messages.deliveryPageTitle}
        lang={intl.locale}
      /> */}
      <Header />
      <Main smVerticalOffset>
        <Container>
          <Headline center>
            {/* <FormattedMessage id='pay-delivery-title' /> */}
            Оплата і доставка
          </Headline>
          <section className="delivery">
            <div className="delivery__description">
              <h2 className="delivery__title">
                <span className="multiline-bg multiline-bg--primary-theme">
                  Оплата
                </span>
              </h2>
              <ul className="delivery__list">
                <li>
                  <strong>
                    {/* <FormattedMessage id="pay-method-1" /> */}
                    передоплата на карту ПриватБанку.
                  </strong>
                  <p>
                    {/* <FormattedMessage id="pay-description-1" /> */}
                    Оплату на карту Ви можете зробити просто і швидко в
                    банкоматах, терміналах самообслуговування ПриватБанку, в
                    касі будь-якого відділення ПриватБанку або через систему
                    інтернет-банк «Приват24». Для прискорення обслуговування не
                    забудьте повідомити нам по телефону або по e-mail про те, що
                    Ви зробили оплату і вкажіть суму.
                  </p>
                </li>
                <li>
                  <strong>
                    {/* <FormattedMessage id="pay-method-2" /> */}
                    накладеним платежем.
                  </strong>
                  <p>
                    {/* <FormattedMessage id="pay-description-2" /> */}
                    Нагадуємо, що в цьому випадку буде необхідно доплатити (20
                    грн + 2% від суми замовлення за накладений платіж)
                    Замовлення на суму до 300 грн можна придбати тільки за
                    передоплатою (картою або перекладом). Оплата здійснюється
                    при отриманні замовлення, що доставляється перевізником
                    «Нова Пошта». Ознайомитися з умовами оплати післяплати ви
                    можете на сайтах цих компаній. Коригування замовлення В разі
                    необхідності внесення змін або анулювання замовлення після
                    його оформлення і оплати, Вам необхідно пов'язані з нами по
                    телефону або по e-mail. Коригування або анулювання
                    замовлення можливі тільки в тому випадку, якщо він ще не був
                    оброблений і не був відправлений у службу кур'єрської
                    доставки
                  </p>
                </li>
              </ul>
            </div>
            <img className="delivery__img" src={pay} />
          </section>
          <section className="delivery">
            <img className="delivery__img" src={delivery} />
            <div className="delivery__description">
              <h2 className="delivery__title">
                <span className="multiline-bg multiline-bg--primary-theme">
                  {/* {<FormattedMessage id="delivery-title" /> */}
                  Доставка по Україні
                </span>
              </h2>
              <p className="delivery__paragraph">
                {/* <FormattedMessage id="delivery-description" /> */}
                Якщо ваше замовлення оформлений післяплатою або по ньому
                зроблена оплата до 13-00, то таке замовлення відправляється
                замовнику в той же день. Всі замовлення по передоплаті і
                оформлені з доставкою післяплатою после 13:00, відправляються на
                наступний день. Виняток становить п'ятниця - замовлення
                необхідно оформити та оплатити до 12-00, щоб вони були
                відправлені в цього ж дня. Замовлення, оформлені в неділю,
                відправляються на наступний день, в понеділок. Відправка
                замовлень здійснюється по всіх регіонах України кур'єрською
                службою «Нова Пошта». Доставка по Харкову здійснюється
                кур'єрською службою «Нова Пошта» або самовивозом.
              </p>
            </div>
          </section>
        </Container>
      </Main>
    </Layout>
  </>
);

export default Delivery; //withIntl(Delivery);

// Delivery.propTypes = {
//   intl: PropTypes.object.isRequired,
// };
