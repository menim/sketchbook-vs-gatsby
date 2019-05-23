import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { ModalContext } from './modal-context';
import Modal from './modal';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false, toggleModal: this.toggleModal };
  }

  toggleModal = () => {
    document.body.classList.contains('modal-open')
      ? document.body.classList.remove('modal-open')
      : document.body.classList.add('modal-open');
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  };

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
          <Modal isShow={this.state.isShow ? true : false}  close={this.toggleModal} locale={this.props.intl.locale} />
        )}
      </ModalContext.Provider>
    );
  }
}

export default injectIntl(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired
};
