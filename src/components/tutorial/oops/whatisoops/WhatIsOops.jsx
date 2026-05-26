import React from 'react'
import './whatisoops.css'
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircle } from "lucide-react";
import { markComplete, nextTopic } from '../../../../features/course/courseSlice';
import whatoops from "../../../../../images/tutorial/oops1.gif"


const WhatIsOops = () => {
  const dispatch = useDispatch();
  const { courses, currentCourse, currentTopicIndex } = useSelector((state) => state.course);
  const topic = courses[currentCourse][currentTopicIndex];
  return (
    <div className='whatoopscontainer'>
      <h2 className="oops-heading">What Is OOPs?</h2>
      <div className='oops-def'>In this series of articles, we will learn about the basics of OOPs. Object-Oriented Programming is a paradigm that provides many concepts, such as inheritance, data binding, polymorphism, etc. The programming paradigm where everything is represented as an object is known as a truly object-oriented programming language.</div>
      <div className='oops-img-container-1'><img src={whatoops} alt='oops-gif'></img></div>
      <h2 className='whyoops'>Why OOPS?</h2>
      <ul className='oops-list-1'>
        <li>
          <span>Code Reusability and Redundancy:</span>
        </li>
        <li>
          <span>Maintenance and Scalability:</span>
        </li>
        <li>
          <span>Data Encapsulation and Security:</span>
        </li>
        <li>
          <span>Flexibility and Extensibility:</span>
        </li>
      </ul>

      <h2 className='whatoops'>What is OOP?</h2>
      <ul className='oops-list-2'>
        <li><span>Programming which is used to solve Real-world problems.</span></li>
        <li><span>A programming style which involves dividing a program into pieces of objects which can communicate with each other.</span></li>
        <li><span>Object based coding style in which each object ( i.e real-world entity ) has its own properties and behaviours.
        </span></li>
        <li><span>Fundamental idea is to combine properties and behavious inorder to promote modularity.</span></li>
        <li><span>OOP promotes modularity by encapsulating data and behaviour within objects.</span></li>
      </ul>
      <div className="state-action">
        <button
          className={`cta ${topic.completed ? "completed" : ""}`}
          onClick={() => dispatch(markComplete({course: currentCourse, index: currentTopicIndex}))}
        >
          <span>
            {topic.completed ? (
              <>
                <CheckCircle size={18} /> Completed
              </>
            ) : (
              "Mark As Done"
            )}
          </span>

          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
        <button
          className="cta completed"
          onClick={() => dispatch(nextTopic())}
        >
          <span>Next</span>

          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>



    </div>
  )
}

export default WhatIsOops
