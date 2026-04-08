import React from 'react'
import './classesandobject.css'
import { useDispatch, useSelector } from 'react-redux';
// import { markDone, nextTopic } from '../../../../store/tutorialSlice';
import { CheckCircle } from "lucide-react";
import { markComplete, nextTopic } from '../../../../features/course/courseSlice';



const ClassesAndObject = () => {
     const dispatch = useDispatch();
    const { courses, currentCourse, currentTopicIndex } = useSelector((state) => state.course);
    const topic = courses[currentCourse][currentTopicIndex];
  return (
      <div class='classobj'>
                <h2 className='heading1-class'>What are Classes?</h2>
                <div className='class-def'>A class in Object-Oriented Programming (OOP) is a blueprint or template that defines the attributes (data) and methods (functions) that the objects created from the class will have. It encapsulates the data for the object and the methods to manipulate that data. Classes are fundamental to OOP as they enable the creation of modular and reusable code.</div>
                <h3 className='heading2-class'>Key Components of a Class:</h3>
                <ul className='class-list-1'>
                    <li>
                        <span><b>Attributes</b>: These are the variables that hold the state of the object. They are sometimes referred to as properties or fields.</span>
                    </li>
                    <li>
                        <span><b>Methods</b>: These are the functions that define the behavior of the objects created from the class. Methods can manipulate the object's attributes and perform operations.</span>
                    </li>
                </ul>
    
    
                <h2 className='heading3-class'>What are Objects?</h2>
                <div className='class-def'>An object is an instance of a class. When a class is defined, no memory is allocated until an object of that class is created. Objects are the actual entities that hold the data and the functionality defined in the class. Each object has its own copy of the attributes defined in the class and can use the methods defined in the class to manipulate those attributes.
    
                    For Example , a student name Rahul is Real-World entity , in programming terms its an Object.
    
                    what defines an object or how would an object look like ? There must be a bluePrint i.e Class.</div>
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

export default ClassesAndObject
