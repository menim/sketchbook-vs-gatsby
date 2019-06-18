import React from 'react';
import PropTypes from 'prop-types';

import {FormattedMessage} from 'react-intl';
import {withIntl} from '../i18n';

//import Seo from '../components/shared/seo'

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Container from '../components/shared/container';
import FlexContainer from '../components/shared/flexContainer';
import Main from '../components/shared/main';
import Headline from '../components/shared/headline';
import Form from '../components/shared/orderForm';

const Contact = ({intl}) => {
  return (
    <>
      <Layout>
        {/* <Seo
        description={intl.messages.contactPageDescription}
        title={intl.messages.contactPageTitle}
        lang={intl.locale}
      /> */}
        <Header />
        <Main smVerticalOffset>
          <Container>
            <Headline>
              <FormattedMessage id='contact-page-title' />
            </Headline>
            <FlexContainer params='l-flex--center'>
              <div className='contact'>
                <section className='contact__main'>
                  <p className='contact__paragraph'>
                    <FormattedMessage id='contact-page-description' />
                  </p>
                  <Form locale={intl.locale} />
                </section>
              </div>
              <aside className='aside-info contact__aside-info'>
                <section className='aside-info__item'>
                  <h2 className='aside-info__header'>
                    <FormattedMessage id='address-title' />
                  </h2>
                  <address className='aside-info__address'>
                    <FormattedMessage id='city-title' /> <br />
                    <FormattedMessage id='street-title' />
                  </address>
                </section>
                <section className='aside-info__item'>
                  <h2 className='aside-info__header'>
                    <FormattedMessage id='contact-page-title' />
                  </h2>
                  <a className='telephone' href='tel: +38066-754-95-64'>
                    066-754-95-64
                  </a>
                  <a className='telephone' href='tel: +38097-025-8-646'>
                    097-025-86-46
                  </a>
                  <a className='telephone' href='tel: +3093-139-167-04'>
                    093-139-67-04
                  </a>
                  <a className='telephone' href='tel: +38050-364-26-87'>
                    050-364-26-87
                  </a>
                </section>
                <section className='aside-info__item'>
                  <h2 className='aside-info__header'>
                    <FormattedMessage id='contact-us-title' />
                  </h2>
                  mail@okobook.com
                </section>
              </aside>
            </FlexContainer>
          </Container>
        </Main>
      </Layout>
    </>
  );
};

export default withIntl(Contact);

Contact.propTypes = {
  intl: PropTypes.object.isRequired,
};
