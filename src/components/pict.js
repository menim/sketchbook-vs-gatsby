import React from 'react';
import PropTypes from 'prop-types';

const Pict = props => (
  <picture>
    <source srcSet={`${props.src}.webp`} type="image/webp" />
    <img height={props.height} src={`${props.src}.${props.fallbackFormat}`} />
  </picture>
);

export default Pict;

Pict.propTypes = {
  props: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    fallbackFormat: PropTypes.string.isRequired
  })
};
