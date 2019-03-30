import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import VisibilitySensor from 'react-visibility-sensor'

class whtSketch extends Component {
  constructor(props) {
    super(props)
    this.state = {visibility: false}
  }

  onChangeVisibility = (isVisible) => {
    this.setState({ visibility: isVisible })
  }

render() {
  return (
    <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visibility}>
      {({ isVisible }) =>
      <div className={!isVisible ? 'wht-sketch is-hidden-up fade-in' : 'wht-sketch fade-in is-visible'}>
        <h3 className='wht-sketch__header'><FormattedMessage id='wth-sketch-title' /></h3>
        <ul className='wht-sketch__list'> 
          <li className='wht-sketch__item'><FormattedMessage id='wth-sketch-descript-1' /></li>
          <li className='wht-sketch__item'><FormattedMessage id='wth-sketch-descript-2' /></li>
          <li className='wht-sketch__item'><FormattedMessage id='wth-sketch-descript-3' /></li>
        </ul>
      </div>
      }
    </VisibilitySensor>
    )
}
}

export default whtSketch