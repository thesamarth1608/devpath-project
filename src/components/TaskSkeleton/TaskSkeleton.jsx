import React from 'react'
import "./taskskeleton.css"
const TaskSkeleton = () => {
  return (
    <div className="skeleton-item">
      <div className="skeleton-left">
        <div className="skeleton-circle"></div>
        <div className="skeleton-text"></div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div className="skeleton-btn"></div>
        <div className="skeleton-btn"></div>
      </div>
    </div>
  )
}

export default TaskSkeleton
