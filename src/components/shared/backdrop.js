import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({isVisible, ...restProps}) => (
  <div
    className={`backdrop ${isVisible ? '' : 'none'}`}
    onClick={restProps.closeModal || null}
  />
);

export default Backdrop;

Backdrop.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
