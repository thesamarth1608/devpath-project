import React from 'react'
import './home.css'
import Hero from './Hero/Hero'
import CardGrid from './DevpathCardGrid/CardGrid'
import Courses from '../Courses/Courses'
import Roadmap from '../Roadmap/Roadmap'

const Home = () => {
  return (
    <div className='devpath-home'>
      <Hero />
      <CardGrid />
      {/* <Courses/> */}

      <div className="routes-container" id="roadmap">
        <Roadmap />
      </div>

    </div>
  )
}

export default Home
