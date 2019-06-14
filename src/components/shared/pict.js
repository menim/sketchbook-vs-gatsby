import React from 'react';
import PropTypes from 'prop-types';

const Pict = props => (
  <picture>
    <source srcSet={props.img.srcWebp} type="image/webp" />
    <img height={props.height} src={props.img.src} />
  </picture>
);

export default Pict;

Pict.propTypes = {
  props: PropTypes.shape({
    src: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired,
    fallbackFormat: PropTypes.string.isRequired
  })
};
