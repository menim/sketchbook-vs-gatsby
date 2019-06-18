import React from 'react';

import {FormattedMessage} from 'react-intl';
import {withIntl, Link} from '../i18n';

//import Seo from '../components/shared/seo'

import Container from '../components/shared/container';
import Layout from '../components/Layout';
import Main from '../components/shared/main';
import Header from '../components/Header';

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

import pen from './../images/pen.svg';

const NotFoundPage = ({intl}) => (
  <Layout>
    {/* <Seo
      description={intl.messages.notFoundDescription}
      title={intl.messages.notFoundTitle}
      lang={intl.locale}
    /> */}
    <Header />
    <Main>
      <Container>
        <div className='page-404'>
          <h1 className='page-404__header'>
            <span className='page-404__big-text'>404</span>{' '}
            <FormattedMessage id='header-404-title' />
          </h1>
          <p className='page-404__paragraph'>
            <FormattedMessage id='paragraph-404-title' />
          </p>
          <Link
            to='/'
            className='page-404__btn btn btn--secondary-theme btn--fluid'
          >
            <FormattedMessage id='return-main-title' />
          </Link>
          <img className='page-404__img' src={pen} alt='' />
        </div>
      </Container>
    </Main>
  </Layout>
);

export default withIntl(NotFoundPage);
