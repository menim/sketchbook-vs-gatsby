import React from 'react';
import PropTypes from 'prop-types';

// import {withIntl} from '../i18n';

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

//import Seo from '../components/shared/seo'

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/shared/footer';
import Container from '../components/shared/container';
import FlexContainer from '../components/shared/flexContainer';
import Main from '../components/shared/main';
import ProductList from '../components/MainPage/productList';
import WhtSketch from '../components/MainPage/sketchDescription';
import YtbVideo from '../components/MainPage/youtubeVideo';

import {SpringLink} from '../react-spring-animation';

const IndexPage = (/*{intl}*/) => {
  return (
    <Layout>
      <Header videoEnabled />
      <Main>
        <Container>
          <FlexContainer>
            <ProductList /*data={intl}*/ />
          </FlexContainer>
        </Container>
        <Container>
          <FlexContainer params="l-flex--center vert-lg-margin">
            <WhtSketch />
            <YtbVideo id="iMOM4CXQn00" />
          </FlexContainer>
        </Container>
      </Main>
      <Footer />
    </Layout>
  );
};

export default IndexPage; //withIntl(IndexPage);

// IndexPage.propTypes = {
//   intl: PropTypes.object.isRequired,
// };
