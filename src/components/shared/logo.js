import React from 'react';
import PropTypes from 'prop-types';

// import {Link} from '../../i18n';
import {Link} from 'gatsby';

const Logo = ({logoSize}) => (
  <Link className="header__logo" to="/">
    <svg
      focusable="false"
      aria-hidden="true"
      className={logoSize ? 'logo logo--small' : 'logo'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 25"
      fill="#ffffff"
    >
      <path d="M71.1 525.5H44.4v-15c0-5.5-2.3-8.3-7-8.3-2.7 0-4.6.7-5.5 2-1 1.3-1.5 3.4-1.5 6.3 0 3.9 1.2 6.9 3.7 9.3s7.4 6.2 15 11.9c7.4 5.6 13 11 16.7 16.2 3.7 5.2 5.4 11.5 5.4 18.9 0 10-2.8 17.3-8.6 22.1-5.6 4.8-14.2 7.2-25.5 7.2-9.8 0-17.7-1.8-24.1-5.5s-9.6-9.8-9.6-18.3v-19.8h26.7V571c0 3.1.5 5.2 1.6 6.3 1.1 1.2 2.9 1.7 5.4 1.7 4.7 0 7-2.7 7-8.1s-1.5-9.6-4.6-12.8c-3.1-3.2-8.2-7.3-15.1-12.4s-12.3-10.1-15.8-15-5.3-11.2-5.3-18.9c0-17.8 11.5-26.7 34.3-26.7 10 0 18 1.8 24.2 5.5s9.2 9.7 9.2 18v16.7h.1z" />
      <path d="M16.467 9.685h-6.445V6.313c0-1.237-.555-1.866-1.69-1.866-.651 0-1.11.157-1.327.45-.241.291-.362.764-.362 1.416 0 .876.29 1.55.893 2.09.603.54 1.786 1.394 3.62 2.676 1.787 1.259 3.138 2.473 4.032 3.642.893 1.169 1.303 2.585 1.303 4.249 0 2.248-.676 3.89-2.076 4.968-1.352 1.08-3.427 1.62-6.155 1.62-2.365 0-4.272-.406-5.817-1.237C.898 23.489.126 22.117.126 20.206v-4.451h6.445v4.16c0 .696.12 1.168.386 1.415.265.27.7.383 1.303.383 1.135 0 1.69-.607 1.69-1.821s-.362-2.159-1.11-2.878c-.749-.72-1.98-1.641-3.645-2.788-1.666-1.146-2.97-2.27-3.814-3.372C.536 9.752.101 8.336.101 6.604c0-4.001 2.777-6.002 8.28-6.002 2.414 0 4.345.405 5.841 1.237 1.497.831 2.22 2.18 2.22 4.046V9.64h.025z" />
      <path d="M25.76 25.107h-6.445V1.097h6.445V12h.072l4.08-10.903h6.154L31.77 11.686l4.344 13.421h-6.372l-3.886-12.185h-.072v12.185h-.024z" />
      <path d="M54.072 25.107H40.725V1.097h13.347v3.642h-6.927v5.26h6.686v3.643h-6.686v7.823h6.927v3.642z" />
      <path d="M60.927 4.739h-4.49V1.097H71.91v3.642h-4.514V25.13h-6.445V4.739h-.024z" />
      <path d="M83.954 15.777h6.42v3.17c0 4.43-2.727 6.655-8.182 6.655-5.407 0-8.11-2.338-8.11-7.014V7.639c0-4.676 2.703-7.014 8.11-7.014 2.631 0 4.634.472 6.083 1.393 1.4.922 2.148 2.608 2.148 5.014v2.63h-6.445V6.357c0-1.259-.58-1.91-1.738-1.91-1.11 0-1.665.629-1.665 1.91v13.49c0 1.259.555 1.888 1.665 1.888 1.159 0 1.738-.63 1.738-1.888l-.024-4.07z" />
      <path d="M100.754 25.107h-6.445V1.097h6.445V10h3.427V1.097h6.445V25.13h-6.445V13.664h-3.427v11.443z" />
      <path d="M118.253 17.351c-1.738 0-3.186-1.304-3.186-3.012-.024-1.642 1.448-3.013 3.234-3.013 1.81 0 3.259 1.349 3.259 3.013 0 1.64-1.449 3.012-3.259 3.012h-.048z" />
      <path d="M125.663 25.107V1.097h6.541c2.317 0 4.103.09 5.383.292 1.279.202 2.365.72 3.162 1.551.82.832 1.207 2.181 1.207 3.98 0 3.327-1.521 5.103-4.587 5.35v.225c1.28 0 2.294.247 2.945.742.652.495 1.11 1.147 1.304 1.956.217.81.313 1.821.313 3.035 0 2.136-.313 3.687-.965 4.654-.652.966-1.617 1.573-2.897 1.82-1.279.248-3.258.36-5.913.36h-6.517v.045zm6.445-20.57v6.317c.53 0 1.013-.023 1.448-.023.434 0 .772-.09 1.062-.247.265-.157.483-.45.652-.9.169-.449.24-1.1.24-1.978 0-.831-.071-1.46-.192-1.91-.12-.45-.435-.742-.917-.945-.483-.202-1.231-.315-2.293-.315zm0 9.734v7.374c1.062 0 1.834-.157 2.34-.472.484-.315.797-.72.894-1.236.12-.517.169-1.26.169-2.249 0-1.124-.097-1.933-.29-2.405-.193-.472-.482-.765-.917-.877-.386-.067-1.134-.135-2.196-.135z" />
      <path d="M161.12 7.616v10.927c0 4.676-2.727 7.014-8.158 7.014-5.43 0-8.158-2.338-8.158-7.014V7.616c0-1.73.362-3.125 1.086-4.159.724-1.034 1.69-1.776 2.92-2.225 1.231-.45 2.607-.63 4.128-.63 1.545 0 2.945.202 4.152.63 1.206.427 2.196 1.146 2.92 2.225.748 1.057 1.11 2.45 1.11 4.16zm-9.872-1.259v13.49c0 1.259.555 1.888 1.69 1.888 1.134 0 1.69-.63 1.69-1.888V6.357c0-1.259-.556-1.91-1.69-1.91-1.135 0-1.69.651-1.69 1.91z" />
      <path d="M180.285 7.616v10.927c0 4.676-2.727 7.014-8.158 7.014-5.43 0-8.158-2.338-8.158-7.014V7.616c0-1.73.362-3.125 1.086-4.159.724-1.034 1.69-1.776 2.92-2.225 1.231-.45 2.607-.63 4.128-.63 1.545 0 2.945.202 4.151.63 1.207.427 2.197 1.146 2.921 2.225.748 1.057 1.11 2.45 1.11 4.16zm-9.872-1.259v13.49c0 1.259.555 1.888 1.69 1.888 1.134 0 1.69-.63 1.69-1.888V6.357c0-1.259-.556-1.91-1.69-1.91-1.135 0-1.69.651-1.69 1.91z" />
      <path d="M189.747 25.107h-6.445V1.097h6.445V12h.072l4.08-10.903h6.155l-4.297 10.589 4.345 13.421h-6.372l-3.886-12.162h-.073V25.13h-.024z" />
    </svg>
    <span className="sr-only">Логотип</span>
  </Link>
);

Logo.propTypes = {
  logoSize: PropTypes.bool,
};

Logo.defaultProps = {
  logoSize: false,
};

export default Logo;
