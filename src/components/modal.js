import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Form from './order-form';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className={this.props.isShow ? '' : 'none'}>
        <div className="backdrop" onClick={this.props.close} />
        <div className="modal">
          <button className="modal__close close" onClick={this.props.close} />
          <Form order locale={this.props.locale} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}

export default Modal;

Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};
