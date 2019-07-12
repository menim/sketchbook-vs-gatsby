import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Form from '../shared/form';
import Backdrop from '../shared/backdrop';
import Button from '../shared/button';

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
    const {modalStatus, modalToggle} = this.props.appInterface;

    if (this.el) {
      return ReactDOM.createPortal(
        <div className={modalStatus ? '' : 'none'}>
          <Backdrop
            hideBackdrop={modalToggle}
            isBackdropVisible={modalStatus}
          />
          <div className="modal">
            <Button className="modal__close close" onClick={modalToggle} />
            <Form formType="order" locale={this.props.locale} />
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
  locale: PropTypes.string.isRequired,
};
