import React from 'react'
import './roadmap.css'
import Ide from '../../components/IDE/Ide'
import PathContainer from './PahContainer/PathContainer'
import PopularCoursesCard from './PopularCourses/PopularCoursesCard'

const Roadmap = () => {
  return (
    <div>
        <Ide/>
        <PathContainer/>
        <PopularCoursesCard/>
    </div>
  )
}

export default Roadmap
