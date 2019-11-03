import React from 'react';
import {Spring} from 'react-spring/renderprops';
import TransitionLink, {TransitionState} from 'gatsby-plugin-transition-link';

const MySpring = ({children}) => (
  <TransitionState>
    {({transitionStatus, exit, entry}) => {
      const mount = ['entering', 'entered'].includes(transitionStatus);

      return (
        <Spring
          to={{
            opacity: mount ? 1 : 0,
            transform: mount
              ? `skewX(0) translateY(0)`
              : `skewX(-2deg) translateY(-5%)`,
          }}
        >
          {props => <div style={props}>{children}</div>}
        </Spring>
      );
    }}
  </TransitionState>
);

const SpringLink = ({to, children, ...restProps}) => (
  <TransitionLink
    to={to}
    exit={{length: 0.5}}
    entry={{length: 0.5}}
    {...restProps}
  >
    {children}
  </TransitionLink>
);

export {MySpring, SpringLink};
