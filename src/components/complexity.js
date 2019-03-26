import React from 'react'
import Bullet from './bullet'

const Complexity = ({count}) => {
  const list = [];
  for (let i = 0; i < 5; i++) {
    i < count ? list.push(<Bullet key={i} highlight />) : list.push(<Bullet key={i}  />)
  }

  return (
    <div className='complexity'>
      <span className='complexity__title'>
        Складність:
      </span>
      <div className='complexity__bullets'>
        {list}
      </div>
    </div>
    )
}

export default Complexity