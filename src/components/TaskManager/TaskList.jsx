import React, { useMemo, useState } from 'react'
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
const filteredTasks = useMemo(() => {
  return tasks.filter(task =>
    task.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
  );
}, [tasks, debouncedSearch]);
console.log("loading:", loadingGet);
console.log("tasks:", tasks);
// const filteredTasks = tasks.filter((task) =>
//   task.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
// );
const taskItems = useMemo(() => {
  return filteredTasks.map(task => (
    <TaskItem 
      key={task.id} 
      task={task} 
      setEditTask={setEditTask} 
    />
  ));
}, [filteredTasks, setEditTask]); // ✅ dependency add
console.log((tasks), "tasks");
// ⏳ LOADING
if (loadingGet) {
  return (
    <div className="tasklist-wrapper">
      <input className="searchInput"
  placeholder="Search tasks..."
  value={search}   // ✅ add this
  readOnly/>

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
) : (taskItems)
}
    </div></div>
  )
}

export default TaskList
