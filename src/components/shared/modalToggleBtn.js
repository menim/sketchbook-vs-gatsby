import React from 'react';
import PropTypes from 'prop-types';
import {ModalContext} from '../../context/modalContext';

function ModalToggleButton({children}) {
  return (
    <ModalContext.Consumer>
      {modal => {
        return (
          <button onClick={modal.toggle} className='btn btn--primary-theme'>
            {children}
          </button>
        );
      }}
    </ModalContext.Consumer>
  );
}

export default ModalToggleButton;
