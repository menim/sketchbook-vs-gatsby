import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({isVisible, closeModal}) => (
  <div
    className={`backdrop ${isVisible ? '' : 'none'}`}
    onClick={typeof closeModal === 'function' ? closeModal : null}
  />
);

export default Backdrop;

Backdrop.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
};
