import React, { useRef } from 'react'
import './popularcoursescard.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import popularcourses from './popularcourses'

const PopularCoursesCard = () => {
     const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }
    return (
       <div className='popularCoursesLongCardContainer'>
         <div className='popularCoursesLongCard'>

            <div className='popularCoursesHeader'>
                <div className='popularCoursesTitle'>Popular Courses</div>
                <div className='seeAllCoursesLink'>See all courses</div>
            </div>

            <div className='popularCoursesItems scroll-container'>

                <button className='scroll-btn left' onClick={scrollLeft}>
                    <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '28px' }} />
                </button>

                <div className='popularCoursesScroll scroll-content' ref={scrollRef}>
                    {
                        popularcourses.courses.map((coursename, index) => (
                            <div className='popularCourseCard' key={index}>
                                <img className='popularCourseImg' src={coursename.img} />
                            </div>
                        ))
                    }
                </div>

                <button className='scroll-btn right' onClick={scrollRight}>
                    <ArrowForwardIosOutlinedIcon sx={{ fontSize: '28px' }} />
                </button>

            </div>

        </div>
       </div>

    )
}

export default PopularCoursesCard
