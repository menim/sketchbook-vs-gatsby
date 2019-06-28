import React from 'react';
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
import ModalToggleBtn from '../components/shared/modalToggleBtn';

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
            <Link to="/" className="l-container__btn btn btn--secondary-theme">
              <FormattedMessage id="return-main-title" />
            </Link>
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
                <form className="productForm" onSubmit={console.log('test')}>
                  <fieldset className="options-list product__options-list">
                    <legend className="options-list__title">
                      <FormattedMessage id="lang-option-title" />:
                    </legend>
                    {product[intl.locale].lang.map((lang, index) => (
                      <div className="options-list__item" key={index}>
                        <input
                          className="options-list__input sr-only"
                          id={`lang${index}`}
                          type="radio"
                          name="lang"
                          value={lang}
                          defaultChecked={index === 0 ? true : false}
                        />
                        <label
                          className="options-list__label"
                          htmlFor={`lang${index}`}
                        >
                          {lang}
                        </label>
                      </div>
                    ))}
                  </fieldset>
                  <fieldset className="options-list product__options-list">
                    <legend className="options-list__title">
                      <FormattedMessage id="cover-option-title" />:
                    </legend>
                    {product.cover.map((cover, index) => (
                      <div className="options-list__item" key={index}>
                        <input
                          className="options-list__input sr-only"
                          id={`${product.color[index]}`}
                          type="radio"
                          name="cover"
                          value={`${cover.childImageSharp.fixed.src} ${
                            product.color[index]
                          }`}
                          defaultChecked={index === 0 ? true : false}
                        />
                        <label
                          className="options-list__label"
                          htmlFor={`${product.color[index]}`}
                        >
                          <img src={cover.childImageSharp.fixed.src} alt="" />
                        </label>
                      </div>
                    ))}
                  </fieldset>
                  <button className="btn btn--primary-theme">
                    <FormattedMessage id="cart-btn-title" />
                  </button>
                </form>
                <p className="product__paragraph">
                  <FormattedMessage id="wholesale-message" />
                </p>
              </section>
            </div>
          </Container>
        </Main>
      </Layout>
    </>
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
