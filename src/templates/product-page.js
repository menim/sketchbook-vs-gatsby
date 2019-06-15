import React from 'react';
import PropTypes from 'prop-types';

import {graphql} from 'gatsby';
import {FormattedMessage} from 'react-intl';
import {dynamicWithIntl, Link} from '../i18n';

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

//import Seo from '../components/seo'

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/footer';
import Main from '../components/main';
import Container from '../components/shared/container';
import SimpleSlider from '../components/swiperGallery';
import ModalToggleBtn from '../components/modalToggleBtn';

const ProductPage = ({data, intl}) => {
  const product = data.allDataJson.edges[0].node;
  return (
    <>
      <Layout>
        {/* <Seo 
        description={`${intl.messages.productPageDescriptionTemplatePre}, «${intl.messages.title}», ${intl.messages.productPageDescriptionTemplatePost}`}
        title={`${intl.messages.title}. ${intl.messages.productPageTitleTemplate}`}
        lang={intl.locale}
        img={product.cover}
        url={product.slug}
      /> */}
        <Header />
        <Main smVerticalOffset>
          <Container>
            <div className='product'>
              <section className='product__view'>
                <SimpleSlider imgs={product.spreadImg} />
              </section>
              <section className='product__description'>
                <h1 className='product__header'>
                  Скетчбук. <FormattedMessage id='title' />
                </h1>
                <span className='product__price'>₴ {product.price}</span>
                <p className='product__overview'>
                  <FormattedMessage id='description' />
                </p>
                <div className='lang product__lang'>
                  <h2 className='lang__title'>
                    <FormattedMessage id='lang-option-message' />:
                  </h2>
                  <ul className='lang__list'>
                    {product[intl.locale].lang.map((item, index) => (
                      <li className='lang__item' key={index}>
                        {' '}
                        {item}/
                      </li>
                    ))}
                  </ul>
                </div>
                <ModalToggleBtn>
                  <FormattedMessage id='button-order-title' />
                </ModalToggleBtn>
                <p className='product__paragraph'>
                  <FormattedMessage id='wholesale-message' />
                </p>
              </section>
            </div>
          </Container>
        </Main>
        <Footer />
      </Layout>
    </>
  );
};

export default dynamicWithIntl(ProductPage);

export const query = graphql`
  query($slug: String!) {
    allDataJson(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          price
          spreadImg {
            childImageSharp {
              fluid(maxHeight: 500) {
                src
              }
              fixed(height: 100) {
                src
              }
            }
          }
          slug
          ru {
            lang
          }
          uk {
            lang
          }
        }
      }
    }
  }
`;

ProductPage.propTypes = {
  data: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};
