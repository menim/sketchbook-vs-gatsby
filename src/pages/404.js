import React from "react"
import SEO from "../components/seo"
import { FormattedMessage } from 'react-intl'
import { withIntl } from '../i18n'

import Container from '../components/container'
import Layout from '../components/layout'
import Main from '../components/main'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from './../i18n'

import pen from './../../static/pen.svg'

const NotFoundPage = ({intl}) => (
  <Layout>
    <Header />
    <Main>
      <Container>
      test test 
      </Container>
    </Main>
    <Footer />
  </Layout>
)

export default withIntl(NotFoundPage)
