import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import './tasklist.css';

const TaskList = ({ setEditTask}) => {
  const [search, setSearch] = useState("");

     const tasks = useSelector(state => state.tasks.tasks);

const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(search.trim().toLowerCase())
);
console.log((tasks), "tasks")
  return (
    
    <div className='tasklist-wrapper'>
     <input
          type="text"
          placeholder="Search tasks..."
          className="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    <div className='dpTask-list'>
      {filteredTasks.length === 0 ? (
  <p>No tasks found</p>
) : (
  filteredTasks.map(task => (
    <TaskItem key={task.id} task={task} setEditTask={setEditTask} />
  ))
)}
    </div></div>
  )
}

export default TaskList
