import React, { Component } from 'react'
import MultilineBg from '../components/multilineBg';
import VisibilitySensor from 'react-visibility-sensor';

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
      <div className={!isVisible ? "wht-sketch is-hidden-up fade-in" : "wht-sketch fade-in is-visible"}>
        <h3 className="wht-sketch__header"><MultilineBg>Что такое обучающий скетчбук?</MultilineBg></h3>
        <ul className="wht-sketch__list"> 
          <li className="wht-sketch__item"><MultilineBg>Это учебное пособие по основам рисования, каллиграфии, дудлингу</MultilineBg></li>
          <li className="wht-sketch__item"><MultilineBg>Это креативный блокнот для набросков, зарисовок, записей и рисования - можно творить, как только душе пожелается</MultilineBg></li>
          <li className="wht-sketch__item"><MultilineBg>Это кладовая идей творческого человека, которую он создает сам, развивая свои таланты и совершенствуя навыки</MultilineBg></li>
        </ul>
      </div>
      }
    </VisibilitySensor>
    )
}
}

export default whtSketch