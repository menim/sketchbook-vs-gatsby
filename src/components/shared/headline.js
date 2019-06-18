import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ center, children }) => (
  <h1 className={`headline ${center && 'headline--center'}`}>{children}</h1>
);

export default Headline;

Headline.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired
};
