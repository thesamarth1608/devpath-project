import React from "react";
import "./polymorphism.css";
import { useDispatch, useSelector } from 'react-redux';
// import { markDone, nextTopic } from '../../../../store/tutorialSlice';
import { CheckCircle } from "lucide-react";
import { markComplete, nextTopic } from "../../../../features/course/courseSlice";


const Polymorphism = () => {
     const dispatch = useDispatch();
        const { courses, currentCourse, currentTopicIndex } = useSelector((state) => state.course);
        const topic = courses[currentCourse][currentTopicIndex];
  return (
    <div className="poly-wrapper">
      <h1 className="poly-main-title">Polymorphism in Java</h1>

      <p className="poly-para">
        The word polymorphism means having many forms. In simple words,
        Java Polymorphism is the ability of a message to be displayed
        in more than one form.
      </p>

      <p className="poly-para">
        Polymorphism is a key concept in Object-Oriented Programming (OOP)
        that allows methods to behave differently based on the object acting upon them.
      </p>

      <h2 className="poly-sub-title">Types of Polymorphism</h2>

      <ul className="poly-list">
        <li>Compile-Time Polymorphism (Method Overloading)</li>
        <li>Run-Time Polymorphism (Method Overriding)</li>
      </ul>

      {/* Compile Time */}
      <h2 className="poly-sub-title">
        1. Compile-Time Polymorphism (Method Overloading)
      </h2>

      <p className="poly-para">
        Multiple methods with the same name but different parameter lists.
      </p>

      <div className="poly-code-box">
        <pre>
{`class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public double add(double a, double b) {
        return a + b;
    }
}`}
        </pre>
      </div>

      {/* Runtime */}
      <h2 className="poly-sub-title">
        2. Run-Time Polymorphism (Method Overriding)
      </h2>

      <p className="poly-para">
        Method call is resolved at runtime based on the object type.
      </p>

      <div className="poly-code-box">
        <pre>
{`class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle extends Shape {
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}`}
        </pre>
      </div>

      {/* Upcasting */}
      <h2 className="poly-sub-title">
        Upcasting / Dynamic Method Dispatch
      </h2>

      <div className="poly-code-box">
        <pre>
{`public class Main {
    public static void main(String[] args) {

        Shape shape1 = new Circle();
        Shape shape2 = new Rectangle();

        shape1.draw();
        shape2.draw();
    }
}`}
        </pre>
      </div>
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

export default Polymorphism;