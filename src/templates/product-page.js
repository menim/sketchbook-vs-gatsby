import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {graphql} from 'gatsby';
import {FormattedMessage} from 'react-intl';
import {withIntl, Link} from '../i18n';

import '../sass/main.scss';
import '../sass/generic/_swiper.scss';

//import Seo from '../components/shared/seo'

import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/shared/main';
import Container from '../components/shared/container';
import ProductItemSlider from '../components/ProductPage/productItemSlider';
import ProductForm from '../components/ProductPage/productForm';
import ModalToggleBtn from '../components/shared/modalToggleBtn';
import Button from '../components/shared/button';

const ProductPage = ({data, intl}) => {
  const product = data.allDataJson.edges[0].node;
  return (
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
          <Button
            as={Link}
            to="/"
            theme="secondary"
            className="l-container__btn"
          >
            <FormattedMessage id="return-main-title" />
          </Button>
          <div className="product">
            <section className="product__view">
              <ProductItemSlider imgs={product.spreadImg} />
            </section>
            <section className="product__description">
              <h1 className="product__header">
                Скетчбук. <FormattedMessage id="title" />
              </h1>
              <span className="product__price">₴ {product.price}</span>
              <p className="product__overview">
                <FormattedMessage id="description" />
              </p>
              <ProductForm product={product} locale={intl.locale} />
              <p className="product__paragraph">
                <FormattedMessage id="wholesale-message" />
              </p>
            </section>
          </div>
        </Container>
      </Main>
    </Layout>
  );
};

export default withIntl(ProductPage);

export const query = graphql`
  query($slug: String!) {
    allDataJson(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          price
          color
          cover {
            childImageSharp {
              fixed(height: 80) {
                src
              }
            }
          }
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
