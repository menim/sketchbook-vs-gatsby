import React from 'react';
import PropTypes from 'prop-types';

import {withIntl} from '../i18n';

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

//import Seo from '../components/seo'

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/footer';
import Container from '../components/shared/container';
import FlexContainer from '../components/shared/flexContainer';
import Main from '../components/shared/main';
import ProductList from '../components/productList';
import WhtSketch from '../components/sketchDescription';
import YtbVideo from '../components/youtubeVideo';

const IndexPage = ({intl}) => (
  <>
    {/* <Seo
    title={intl.messages.mainPageTitle}
    description={intl.messages.mainPageDescription}
    lang={intl.locale}
  /> */}
    <Layout>
      <Header videoEnabled />
      <Main>
        <Container>
          <FlexContainer>
            <ProductList data={intl} />
          </FlexContainer>
        </Container>
        <Container>
          <FlexContainer params='l-flex--center vert-lg-margin'>
            <WhtSketch />
            <YtbVideo id='iMOM4CXQn00' />
          </FlexContainer>
        </Container>
      </Main>
      <Footer />
    </Layout>
  </>
);

export default withIntl(IndexPage);

IndexPage.propTypes = {
  intl: PropTypes.object.isRequired,
};
