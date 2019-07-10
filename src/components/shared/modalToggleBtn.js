import React from 'react';
import PropTypes from 'prop-types';
import {InterfaceContext} from '../../context';
import Button from './button';

function ModalToggleButton({children}) {
  return (
    <InterfaceContext.Consumer>
      {appInterface => {
        return (
          <Button onClick={appInterface.modalToggle} theme="primary">
            {children}
          </Button>
        );
      }}
    </InterfaceContext.Consumer>
  );
}

export default ModalToggleButton;
