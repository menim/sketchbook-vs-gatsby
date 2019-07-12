import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({isBackdropVisible, hideBackdrop}) => (
  <div
    className={`backdrop ${isBackdropVisible ? '' : 'none'}`}
    onClick={hideBackdrop || null}
  />
);

export default Backdrop;

Backdrop.propTypes = {
  isBackdropVisible: PropTypes.bool.isRequired,
  hideBackdrop: PropTypes.func,
};
