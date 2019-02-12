import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import mp4Video from "../video/sketch-ai.mp4"
import webpVideo from "../video/sketch-ai.webm"

import Nav from "./nav"
import Logo from "./logo";
import Container from './flex-container'

const Header = ({videoEnabled }) => (
  <header className={videoEnabled ? "header header--video" : "header header--simple"}>
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
        <h1 className="header__title"><span className="multiline-bg">Скетчбук - книга для записів та замальовок.</span></h1>
        <p className="header__content">
          <span className="multiline-bg">
            Це книга для сучасних людей, що шукають яскравих, креативних форм розвитку особистості, прагнуть збагатити своє життя
            художніми образами. За її допомогою кожний зможе відкрити для себе нові обрії творчої свідомості, розкрити потенціал
            підсвідомості та вивільнити уяву. Довіртесь своїй інтуїцїї — і перетворіть пошуки себе в витвір мистецтва.
          </span>
        </p>
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
