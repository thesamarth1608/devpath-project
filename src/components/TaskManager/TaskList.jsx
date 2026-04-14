import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import './tasklist.css';
import useDebounce from '../../hooks/useDebounce';
import TaskSkeleton from '../TaskSkeleton/TaskSkeleton';

const TaskList = ({ setEditTask}) => {
  const [search, setSearch] = useState("");

     const { tasks, loadingGet, error } = useSelector(
  (state) => state.tasks
);
    
const debouncedSearch = useDebounce(search, 500);

const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
);
console.log((tasks), "tasks");
// ⏳ LOADING
if (loadingGet) {
  return (
    <div className="tasklist-wrapper">
      <input className="searchInput" placeholder="Search tasks..." />

      {Array(5).fill(0).map((_, i) => (
        <TaskSkeleton key={i} />
      ))}
    </div>
  );
}

// ❌ ERROR
if (error) {
  return <p style={{ color: "red" }}>❌ {error}</p>;
}
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
