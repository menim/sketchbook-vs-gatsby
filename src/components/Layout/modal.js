import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Form from '../shared/form';
import Backdrop from '../shared/backdrop';

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('modal') : null;

class Modal extends Component {
  constructor() {
    super();
    // Use a ternary operator to make sure that the document object is defined
    this.el =
      typeof document !== `undefined` ? document.createElement('div') : null;
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    if (this.el) {
      return ReactDOM.createPortal(
        <div className={this.props.isShow ? '' : 'none'}>
          <Backdrop closeModal={this.props.close} isVisible />
          <div className='modal'>
            <button className='modal__close close' onClick={this.props.close} />
            <Form order locale={this.props.locale} />
          </div>
        </div>,
        this.el
      );
    } else {
      return null;
    }
  }
}

export default Modal;

Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};
