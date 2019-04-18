import React from "react"
import SEO from "../components/seo"
import { FormattedMessage } from 'react-intl'
import { withIntl } from '../i18n'

import Container from '../components/container'
import Layout from '../components/layout'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'

import pen from './../../static/pen.svg'

const NotFoundPage = ({intl}) => (
  <Layout>
    <Header />
    <Main>
      <Container>
        <div className='page-404'>
          <h1><span>404</span> Извините, такой страницы нет…</h1>
          <p>
            Попробуйте вернуться назад и повторить еще раз,<br />
            или выберите из предложенного ниже
          </p>
          <img src={pen} alt='' />
        </div>
      </Container>
    </Main>
    <Footer />
  </Layout>
)

export default withIntl(NotFoundPage)
