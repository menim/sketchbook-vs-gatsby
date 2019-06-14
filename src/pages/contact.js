import React from 'react';
import PropTypes from 'prop-types';

import {FormattedMessage} from 'react-intl';
import {withIntl} from '../i18n';

//import Seo from '../components/seo'

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

import Header from '../components/header';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Container from '../components/container';
import FlexContainer from '../components/flexContainer';
import Main from '../components/main';
import Headline from '../components/headline';
import Form from '../components/orderForm';

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
        <Footer />
      </Layout>
    </>
  );
};

export default withIntl(Contact);

Contact.propTypes = {
  intl: PropTypes.object.isRequired,
};
