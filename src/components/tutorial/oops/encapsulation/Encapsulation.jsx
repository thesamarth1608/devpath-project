import React from 'react'
import './encapsulation.css'
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircle } from "lucide-react";
import { markComplete, nextTopic } from '../../../../features/course/courseSlice';
const Encapsulation = () => {
     const dispatch = useDispatch();
    const { courses, currentCourse, currentTopicIndex } = useSelector((state) => state.course);
    const topic = courses[currentCourse][currentTopicIndex];
  return (
     <div className="contentArea">
    
      <h2 className="encap-heading">Encapsulation</h2>
    
      <div className="encap-text">
        Object-Oriented Programming (OOP) is a paradigm that uses objects and classNamees 
        to create models based on the real world. The four fundamental principles 
        of OOP are encapsulation, abstraction, inheritance, and polymorphism.
      </div>
    
      <h3 className="encap-subheading">Definition</h3>
    
      <div className="encap-text">
        Encapsulation is a fundamental concept in object-oriented programming (OOP) 
        that binds together the data (attributes) and the code (methods) into a 
        single unit known as a class. It restricts direct access to some of an object's 
        components, preventing accidental modification of data. This concept is 
        often referred to as <b>data hiding</b>.
      </div>
      <img className="encap-img" src='/images/tutorial/Encapsulation.webp'></img>
      <h3 className="encap-subheading encap-space">Key Characteristics</h3>
    
      <ul className="encap-list-number">
        <li><b>Data Hiding:</b> Protects data using access modifiers.</li>
        <li><b>Modularity:</b> Makes the className self-contained and easy to manage.</li>
        <li><b>Control:</b> Provides controlled access to data through methods.</li>
      </ul>
    
      <h3 className="encap-subheading encap-space">Access Modifiers</h3>
    
      <ul className="encap-list-bullet">
        <li><b>Private:</b> Accessible only within the same className.</li>
        <li><b>Public:</b> Accessible from any other className.</li>
        <li><b>Protected:</b> Accessible within the same package or subclassNamees.</li>
      </ul>
    
      <h3 className="encap-subheading encap-space">Benefits of Encapsulation</h3>
    
      <ul className="encap-list-number">
        <li>Improved Data Security</li>
        <li>Enhanced Maintainability</li>
        <li>Code Reusability</li>
        <li>Simplified Complexity</li>
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

export default Encapsulation
