import React from 'react';
import PropTypes from 'prop-types';
import {ModalContext} from '../../context';
import Button from './button';

function ModalToggleButton({children}) {
  return (
    <ModalContext.Consumer>
      {modal => {
        return (
          <Button onClick={modal.toggle} theme="primary">
            {children}
          </Button>
        );
      }}
    </ModalContext.Consumer>
  );
}

export default ModalToggleButton;
