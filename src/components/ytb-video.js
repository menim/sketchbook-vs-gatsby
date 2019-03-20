import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

class ytbVideo extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {isPLay: false, visibility: false}
  }


  init = (e) => {
     e.preventDefault()
    this.setState({isPlay: true})
  }
  
  onChangeVisibility = (isVisible) => {
    this.setState({visibility: isVisible})
  }


  render() {
    return (
      <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visibility}>  
        {({ isVisible }) =>
          (<div className={!isVisible ? 'video fade-in is-hidden-down' : 'video fade-in is-visible'}>
        <div className="video__resp-container" onClick={this.init}>
        {!this.state.isPlay  ? 
        (<>
           <a className="video__link" href={`https://www.youtube.com/embed/${this.props.id}`}>
              <picture>  
                <source srcSet={`https://i3.ytimg.com/vi_webp/${this.props.id}/hqdefault.webp`} type="image/webp" />
                <img className="video__media" width='700' height='453' src={`https://i3.ytimg.com/vi/${this.props.id}/hqdefault.jpg`} alt="" />
              </picture> 
            </a>
            <button className="video__button" type="button" aria-label="Запустить видео">
              <svg width="68" height="48" viewBox="0 0 68 48">
                <path className="video__button-shape" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
                <path className="video__button-icon" d="M 45,24 27,14 27,34"></path>
              </svg>
        </button> 
        </>)
        : (
          <iframe allowFullScreen="" allow="autoplay" src={`https://www.youtube.com/embed/${this.props.id}?rel=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;autoplay=1`} className="video__media"></iframe>
        )

          }
          </div>
        </div>)
        }
        </VisibilitySensor>
      )
  }
}

export default ytbVideo