import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, FormattedTime} from 'react-intl';

import Cart from '../Cart';
import Footer from './footer';

import {ModalContext} from '../../context/modalContext';
import {CartContext} from '../../context/cartContext';
import {InterfaceContext} from '../../context/interfaceContext';

import Backdrop from '../shared/backdrop';
import Modal from './modal';

class Layout extends Component {
  state = {
    cart: {
      cartStatus: false,
      toggle: () => {
        this.setState(prevState => ({
          cart: {
            ...prevState.cart,
            cartStatus: !prevState.cart.cartStatus,
          },
        }));
        this.state.interface.hideScroll();
      },
    },
    interface: {
      hideScroll: () => {
        document.body.classList.contains('modal-open')
          ? document.body.classList.remove('modal-open')
          : document.body.classList.add('modal-open');
      },
    },
    modal: {
      isShow: false,
      toggle: () => {
        this.setState(prevState => ({
          modal: {
            ...prevState.modal,
            isShow: !prevState.modal.isShow,
          },
        }));
        this.state.interface.hideScroll();
      },
    },
  };

  render() {
    return (
      <InterfaceContext.Provider value={this.state.interface}>
        <ModalContext.Provider value={this.state.modal}>
          <CartContext.Provider value={this.state.cart}>
            <Cart />
            {this.props.children}
            <Footer />
            <Modal
              isShow={this.state.modal.isShow}
              close={this.state.modal.toggle}
              locale={this.props.intl.locale}
            />
            <Backdrop isVisible={this.state.cart.cartStatus} />
          </CartContext.Provider>
        </ModalContext.Provider>
      </InterfaceContext.Provider>
    );
  }
}

export default injectIntl(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired,
};
