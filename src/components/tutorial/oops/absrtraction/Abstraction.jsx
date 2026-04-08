import React from "react";
import "./abstraction.css";
import { useDispatch, useSelector } from 'react-redux';
// import { markDone, nextTopic } from '../../../../store/tutorialSlice';
import { CheckCircle } from "lucide-react";
import { markComplete, nextTopic } from "../../../../features/course/courseSlice";


const Abstraction = () => {
     const dispatch = useDispatch();
            const { courses, currentCourse, currentTopicIndex } = useSelector((state) => state.course);
            const topic = courses[currentCourse][currentTopicIndex];
  return (
    <div className="abs-container">

      <h1 className="abs-heading">Abstraction In Java</h1>

      <p className="abs-text">
        Abstraction in Java is a fundamental concept that allows you to hide
        complex implementation details and show only the necessary features
        of an object.
      </p>

      <p className="abs-text">
        It is a design and programming method that separates interface from implementation.
      </p>

      <div className="abs-space"></div>

      <h2 className="abs-subheading">Real Life Examples</h2>

      <h3 className="abs-subheading">Keyboard Example</h3>
      <p className="abs-text">
        When you use a keyboard, you press keys without knowing how internal
        circuits send signals to the computer. The internal working is hidden.
      </p>

      <h3 className="abs-subheading">Car Example</h3>
      <p className="abs-text">
        While driving a car, you use steering and pedals without understanding
        how the engine or transmission system works internally.
      </p>

      <div className="abs-space"></div>

      <h2 className="abs-subheading">Abstract Class</h2>

      <p className="abs-text">
        An abstract class is declared using the abstract keyword. It cannot
        be instantiated directly and may contain both abstract and concrete methods.
      </p>

      <ul className="abs-list-bullet">
        <li>An abstract class cannot be instantiated.</li>
        <li>It can contain abstract and non-abstract methods.</li>
        <li>Abstract methods must be overridden in subclasses.</li>
        <li>If a class contains an abstract method, it must be declared abstract.</li>
      </ul>

      <div className="abs-space"></div>

      <h2 className="abs-subheading">Interface</h2>

      <p className="abs-text">
        An interface defines a contract of behaviors that classes must implement.
        It specifies what a class can do without defining how it does it.
      </p>

      <ul className="abs-list-bullet">
        <li>Interfaces support full abstraction.</li>
        <li>Classes use the implements keyword to implement interfaces.</li>
        <li>Interfaces help achieve polymorphism.</li>
      </ul>

      <div className="abs-space"></div>

      <h2 className="abs-subheading">Advantages of Abstraction</h2>

      <ul className="abs-list-number">
        <li>Encapsulation of complexity</li>
        <li>Better modularity</li>
        <li>Improved flexibility and reusability</li>
        <li>Increased security</li>
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

export default Abstraction;