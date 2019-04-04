import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import { ModalContext } from './modal-context'
import Modal from './modal'

const bodyRef = document.body
class Layout extends Component {
  constructor(props){
    super(props)  
    this.state = { isShow: false, toggleModal: this.toggleModal }
  }

  toggleModal = () => { 
    bodyRef.classList.contains('modal-open') ? bodyRef.classList.remove('modal-open') : bodyRef.classList.add('modal-open')
    this.setState(prevState => ({ isShow: !prevState.isShow}))
  }
 
  render() {
    return (
      <ModalContext.Provider value={this.state}>
          {this.props.children}
          {this.state.isShow ? <Modal close={this.toggleModal}></Modal> : '' }
      </ModalContext.Provider>
    )
  }
}

export default injectIntl(Layout)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired
}