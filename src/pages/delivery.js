import React from 'react'
import PropTypes from 'prop-types'

import { FormattedMessage } from 'react-intl'
import { withIntl } from '../i18n'

import '../sass/main.scss'
import '../sass/generic/_swiper.scss'

import delivery from  './../../static/delivery.svg'
import pay from './../../static/pay.svg'

import Header from '../components/header'
import Layout from '../components/layout'
import Main from '../components/main'
import Container from '../components/container'
import Footer from '../components/footer'
import Headline from '../components/headline'

const Delivery = ({ intl }) => (
    <>
    <Layout>
    <Header />
    <Main smVerticalOffset>
      <Container>
        <Headline center>
        <FormattedMessage id='pay-delivery-title' />
        </Headline>
        <section className='delivery'>
          <div className='delivery__description'>
            <h2 className='delivery__title'><span className='multiline-bg multiline-bg--primary-theme'>Оплата</span></h2>
            <ul className='delivery__list'>
              <li>
                <strong><FormattedMessage id='pay-method-1' /></strong>
                <p>
                 <FormattedMessage id='pay-description-1' />
                </p>
              </li>
              <li>
                <strong><FormattedMessage id='pay-method-2' /></strong>
                <p>
                 <FormattedMessage id='pay-description-2' />
                </p>  
              </li>
            </ul>
        </div>
        <img className="delivery__img" src={pay} />
      </section>
        <section className='delivery'>
          <img className="delivery__img" src={delivery} />
          <div className='delivery__description'>
            <h2 className='delivery__title'><span className='multiline-bg multiline-bg--primary-theme'><FormattedMessage id='delivery-title' /></span></h2>
            <p className='delivery__paragraph'> 
              <FormattedMessage id='delivery-description' />
            </p>
          </div>
       </section>   
      </Container>
    </Main>
    <Footer />
    </Layout>
    </>
)

export default withIntl(Delivery)

Delivery.propTypes = {
  intl: PropTypes.object.isRequired
}