import React from 'react'
import PropTypes from 'prop-types'
import { ModalContext }  from './modal-context';
import Modal from './modal';

function ModalToggleButton({children}) {
  return (
    <ModalContext.Consumer>
      {({toggleModal}) => (
        <button
          onClick={toggleModal}
          className='btn btn--primary-theme'>
           {children}
        </button>
      )}
    </ModalContext.Consumer>
  );
}

export default ModalToggleButton;

Modal.defaultProps = {
  children: ''
}

Modal.propTypes = {
  children: PropTypes.node
}