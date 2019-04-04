import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import ReactDOM from 'react-dom'

class Modal extends Component {
 
  render(){
    return ReactDOM.createPortal(
      <div>
        <div className="backdrop" onClick={this.props.close}>
        </div>
        <div className="modal">
          <button className="modal__close" onClick={this.props.close}>Close button</button>
          {this.props.children}
        </div>
      </div>,
     document.getElementById('modal')
    )
  }
}

export default Modal

Modal.propTypes = {
  close: PropTypes.func.isRequired
}