import React from 'react';
import PropTypes from 'prop-types';

import {FormattedMessage} from 'react-intl';
import {withIntl} from '../i18n';

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

const Delivery = ({intl}) => (
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
            <FormattedMessage id='pay-delivery-title' />
          </Headline>
          <section className='delivery'>
            <div className='delivery__description'>
              <h2 className='delivery__title'>
                <span className='multiline-bg multiline-bg--primary-theme'>
                  Оплата
                </span>
              </h2>
              <ul className='delivery__list'>
                <li>
                  <strong>
                    <FormattedMessage id='pay-method-1' />
                  </strong>
                  <p>
                    <FormattedMessage id='pay-description-1' />
                  </p>
                </li>
                <li>
                  <strong>
                    <FormattedMessage id='pay-method-2' />
                  </strong>
                  <p>
                    <FormattedMessage id='pay-description-2' />
                  </p>
                </li>
              </ul>
            </div>
            <img className='delivery__img' src={pay} />
          </section>
          <section className='delivery'>
            <img className='delivery__img' src={delivery} />
            <div className='delivery__description'>
              <h2 className='delivery__title'>
                <span className='multiline-bg multiline-bg--primary-theme'>
                  <FormattedMessage id='delivery-title' />
                </span>
              </h2>
              <p className='delivery__paragraph'>
                <FormattedMessage id='delivery-description' />
              </p>
            </div>
          </section>
        </Container>
      </Main>
    </Layout>
  </>
);

export default withIntl(Delivery);

Delivery.propTypes = {
  intl: PropTypes.object.isRequired,
};
