import React from 'react';
import PropTypes from 'prop-types';

import Parallax from 'react-rellax';
// import {FormattedMessage} from 'react-intl';

import mp4Video from '../../video/sketch-ai.mp4';
import webpVideo from '../../video/sketch-ai.webm';

import Nav from '../Nav/nav';
import NavMobile from '../Nav/navMobile';
import Logo from '../shared/logo';
import Container from '../shared/container';
import MultilineBg from '../shared/multilineBg';
//import Language from './language';

const Header = ({videoEnabled}) =>
  videoEnabled ? (
    <header className="header header--video">
      <div className="overlay" />
      <video loop autoPlay muted className="header__video">
        <source src={mp4Video} type="video/mp4" />
        <source src={webpVideo} type="video/webp" />
      </video>
      <Container>
        <div className="header__top">
          <Logo />
          <Nav isPlace="header" telephone />
          {/* <Language /> */}
          <NavMobile />
        </div>
        <div className="header__description">
          <Parallax speed={4}>
            <h1 className="header__title">
              <MultilineBg>
                {/* <FormattedMessage id="header-title" /> */}
                Скетчбук - книга для записів та замальовок.
              </MultilineBg>
            </h1>
            <p className="header__content">
              <MultilineBg>
                {/* <FormattedMessage id="header-subtitle" /> */}
                Це книга для сучасних людей, що шукають яскравих, креативних
                форм розвитку особистості, прагнуть збагатити своє життя
                художніми образами.
              </MultilineBg>
            </p>
          </Parallax>
        </div>
      </Container>
    </header>
  ) : (
    <header className="header header--simple">
      <Container>
        <div className="header__top">
          <Logo />
          <Nav isPlace="header" telephone />
          {/*  <Language /> */}
          <NavMobile />
        </div>
      </Container>
    </header>
  );

Header.propTypes = {
  videoEnabled: PropTypes.bool,
};

Header.defaultProps = {
  videoEnabled: false,
};

export default Header;
