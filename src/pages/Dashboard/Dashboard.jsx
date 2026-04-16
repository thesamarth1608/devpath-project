import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCourseState } from "../../features/course/courseSlice";
import { logout } from "../../features/auth/authSlice";
import "./dashboard.css";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import TaskInput from "../../components/TaskManager/TaskInput";
import TaskList from "../../components/TaskManager/TaskList";
import { getTasks } from "../../features/task/taskThunks";
import useAuth from "../../hooks/useAuth";
import useFetchTasks from "../../hooks/useFetchTask";
import { resetTasks } from "../../features/task/taskSlice";

const Dashboard = () => {
  const user = useAuth();   // 🔐 auth check
  useFetchTasks();  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editTask, setEditTask] = useState(null);
  // const user = useSelector((state) => state.auth.currentUser);
  const { courses, currentCourse, currentTopicIndex } = useSelector(
    (state) => state.course
  );


  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCourseState());
    dispatch(resetTasks());
    navigate("/login", { replace: true });
  };

  let total = 0;
  let completed = 0;

  Object.values(courses).forEach(course => {
    total += course.length;
    completed += course.filter(t => t.completed).length;
  });

  const percent = Math.round((completed / total) * 100);

  return (
    <div className="dpDash-wrapper">

      {/* 🔥 SIDEBAR */}
      <div className="dpDash-sidebar">
        <h3 className="dpDash-heading">
          🚀 DevPath
        </h3>

        <div className="dpDash-menu dpDash-active">
          <span className="dpDash-text">Dashboard</span>
        </div>

        <div
          className="dpDash-menu"
          onClick={() => navigate("/tutorial")}
        >
          <span className="dpDash-text">Courses</span>
        </div>

        <div
          className="dpDash-menu"
          onClick={handleLogout}
        >
          <span className="dpDash-text">Logout</span>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div className="dpDash-content">

        {/* Header */}
        <div className="dpDash-header">
          <h1 className="dpDash-title">
            Welcome, {user?.name} 👋
          </h1>
          {/* <button
         className="dpDash-btn dpDash-completed"
         onClick={handleLogout}
          >
         <span>Logout</span>
         </button> */}
        </div>

        {/* Stats */}
        <div className="dpDash-stats">
          <div className="dpDash-card">
            <p>Total Courses</p>
            <h2>{courses?.length || 0}</h2>
          </div>

          <div className="dpDash-card">
            <p>Current Course</p>
            <h2>{currentCourse || "None"}</h2>
          </div>

          <div className="dpDash-card">
            <p>Topic Index</p>
            <h2>{currentTopicIndex ?? 0}</h2>
          </div>
        </div>
        <div className="Dpdash-progress-currentcourses">
          {/* Progress */}
          <div className="dpDash-progress">
            <h3>Your Progress</h3>
            <CircularProgress percentage={percent} />
          </div>

          {/* Continue */}
          <div className="dpDash-course">
            <h3>Continue Learning</h3>

            <p>Course: <b className="course-bold">{currentCourse || "None"}</b></p>
            <p>Topic: <b className="course-bold">{currentTopicIndex ?? 0}</b></p>

            <button
              className="dpDash-btn dpDash-completed"
              onClick={() => navigate("/tutorial")}
            >
              <span>Continue Learning</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
          <div className="dpDash-tasks">
          
        <TaskInput editTask={editTask} setEditTask={setEditTask} />
        <TaskList setEditTask={setEditTask}/>
      </div>
      </div>
    
    </div>
  );
};

export default Dashboard