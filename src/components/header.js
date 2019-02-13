import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import mp4Video from "../video/sketch-ai.mp4"
import webpVideo from "../video/sketch-ai.webm"

import Nav from "./nav"
import Logo from "./logo";
import Container from './flex-container'
import MultilineBg from './multilineBg';

const Header = ({videoEnabled }) => (
  videoEnabled ? 
  (
    <header className="header header--video">
    <div className="overlay"></div>
    <video loop autoPlay muted className="header__video">
      <source src={mp4Video} type="video/mp4" /> 
      <source src={webpVideo} type="video/webp" />
    </video>
    <Container>
      <div className="header__top">
        <Logo />
        <Nav />
      </div>
      <div className="header__description">
        <h1 className="header__title">
          <MultilineBg>
            Скетчбук - книга для записів та замальовок.
          </MultilineBg>
        </h1>
        <p className="header__content">
          <MultilineBg>
            Це книга для сучасних людей, що шукають яскравих, креативних форм розвитку особистості, прагнуть збагатити своє життя
            художніми образами. За її допомогою кожний зможе відкрити для себе нові обрії творчої свідомості, розкрити потенціал
            підсвідомості та вивільнити уяву. Довіртесь своїй інтуїцїї — і перетворіть пошуки себе в витвір мистецтва.
          </MultilineBg>
        </p>
      </div>
    </Container>
  </header>
  ) :
  <header className="header header--simple">
    <Container>
      <div className="header__top">
        <Logo />
        <Nav />
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  videoEnabled: PropTypes.bool,
}

Header.defaultProps = {
  videoEnabled: false,
}

export default Header
