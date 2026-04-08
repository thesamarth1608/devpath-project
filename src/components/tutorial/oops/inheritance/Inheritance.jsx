import React from "react";
import "./inheritance.css";
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircle } from "lucide-react";
import { markComplete, nextTopic } from "../../../../features/course/courseSlice";


const Inheritance = () => {
    const dispatch = useDispatch();
    const { courses, currentCourse, currentTopicIndex } = useSelector((state) => state.course);
    const topic = courses[currentCourse][currentTopicIndex];
  return (
    <div className="inherit-container">

      <h1 className="inherit-heading">Inheritance In Java</h1>

      <p className="inherit-text">
        Inheritance is a mechanism in Java where one class acquires
        the properties and behaviors of another class.
      </p>

      <p className="inherit-text">
        It promotes code reusability and establishes a relationship
        between parent and child classes.
      </p>

      <div className="inherit-space"></div>

      <h2 className="inherit-subheading">Why Use Inheritance?</h2>

      <ul className="inherit-list-bullet">
        <li>Code reusability</li>
        <li>Method overriding support</li>
        <li>Runtime polymorphism</li>
        <li>Improves maintainability</li>
      </ul>

      <div className="inherit-space"></div>

      <h2 className="inherit-subheading">Types of Inheritance in Java</h2>

      <ul className="inherit-list-number">
        <li>Single Inheritance</li>
        <li>Multilevel Inheritance</li>
        <li>Hierarchical Inheritance</li>
      </ul>

      <div className="inherit-space"></div>

      <h2 className="inherit-subheading">Key Points</h2>

      <ul className="inherit-list-bullet">
        <li>Uses the extends keyword.</li>
        <li>Private members are not inherited.</li>
        <li>Supports method overriding.</li>
        <li>Constructors are not inherited.</li>
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
  );
};

export default Inheritance;