import React from 'react'
import './tutorialsidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { CheckCircle } from "lucide-react";
import { BookOpen } from "lucide-react";
import CircularProgress from '../CircularProgress/CircularProgress';
import { setTopic } from '../../features/course/courseSlice';


const TutSidebar = () => {
    const dispatch = useDispatch();
    const {courses, currentCourse, currentTopicIndex} = useSelector((state)=>state.course);
    const topics = courses[currentCourse];
    const completedCount = topics.filter(t => t.completed===true).length;
const percent = Math.round((completedCount / topics.length) * 100);
  return (
    <div className='sidebar'>
          <h3 className="sidebar-heading"><BookOpen size={20} className="sidebar-icon" />
{currentCourse.toUpperCase()} </h3>
<CircularProgress percentage={percent}/>
          {
            topics.map((t, i)=>(
                <div 
                key={t.id}
                className={currentTopicIndex===i ? "active" : ""}
                onClick={()=> dispatch(setTopic(i))}
                >
                {t.title}{t.completed && (
  <CheckCircle size={16} color="#228B22" />
)}
                </div>
            ))
          }
        </div>
  )
}

export default TutSidebar
