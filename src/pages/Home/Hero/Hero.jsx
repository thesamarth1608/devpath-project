import React from 'react'
import './Hero.css'
import HeroContainer from '../../../components/HeroContainer/HeroContainer'
import HeroBadge from '../../../components/HeroBadge/HeroBadge'

const Hero = () => {
  return (
    <div className='hero-page'>
    <HeroContainer/>
    <HeroBadge/> 
    </div>
  )
}

export default Hero
