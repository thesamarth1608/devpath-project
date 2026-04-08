import React from 'react'
import './herocontainer.css'
import HeroImg from '../../assets/Images/heroimg.png'
import HeroImg2 from '../../assets/Images/heroimg2.0.png'

const HeroContainer = () => {
  return (
    <div className='hero-container'>
      <div className='hero-background'>
        <img src={HeroImg} alt='hero-bg-img' className='hero-bg-img'></img>
      </div>
      <div className='hero-background-2'>
        <img src={HeroImg2} alt='hero-bg-img-2' className='hero-img-man'></img>
      </div>
    </div>
  )
}

export default HeroContainer
