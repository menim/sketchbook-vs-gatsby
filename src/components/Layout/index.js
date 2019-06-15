import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, FormattedTime} from 'react-intl';

import Footer from './footer';

import {ModalContext} from '../../context/modalContext';
import Modal from './modal';

class Layout extends Component {
  state = {isShow: false};

  toggleModal = () => {
    document.body.classList.contains('modal-open')
      ? document.body.classList.remove('modal-open')
      : document.body.classList.add('modal-open');
    this.setState(prevState => ({isShow: !prevState.isShow}));
  };

  render() {
    return (
      <ModalContext.Provider value={this.toggleModal}>
        {this.props.children}
        <Footer />
        <Modal
          isShow={this.state.isShow}
          close={this.toggleModal}
          locale={this.props.intl.locale}
        />
      </ModalContext.Provider>
    );
  }
}

export default injectIntl(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired,
};
