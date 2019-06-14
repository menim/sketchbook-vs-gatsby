import React from 'react';
import PropTypes from 'prop-types';

const Main = ({children, smVerticalOffset}) => (
  <main className={smVerticalOffset ? 'main main--sm' : 'main'}>
    {children}
  </main>
);

export default Main;

Main.propTypes = {
  children: PropTypes.node.isRequired,
  smVerticalOffset: PropTypes.bool,
};
