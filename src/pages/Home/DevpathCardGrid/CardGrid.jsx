import React from 'react'
import './cardgrid.css'
import DevPathIntroLayout from './DevpathIntroLayout/DevPathIntroLayout'
import SocialProofCard from './SocialProofCard/SocialProofCard'
import Whycontainer from './Whycontainer/Whycontainer'
import DirectionCard from '../../../components/DirectionCard'

const CardGrid = () => {
  return (
    <div className='devpath-cardgrid-container'>
      <DevPathIntroLayout/>
      {/* <DirectionCard/> */}
      
      <Whycontainer/>

       <SocialProofCard/>
    </div>
  )
}

export default CardGrid
