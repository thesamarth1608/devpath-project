import React from 'react'
import { useDispatch } from 'react-redux';
// import { deleteTask, toggleComplete } from "../../features/task/taskSlice";
import { CheckCircle, Circle } from 'lucide-react';
import { deleteTaskAsync, updateTaskAsync } from '../../features/task/taskThunks';

const TaskItem = ({ task, setEditTask }) => {
     const dispatch = useDispatch();
  return (
    <div className="dpTask-item">
      <div className="dpTask-left">
        <div
  onClick={() => dispatch(updateTaskAsync({...task,completed: !task.completed}))}
  style={{ cursor: "pointer" }}
>
  {task.completed ? (
    <CheckCircle size={18} color="#228B22" />
  ) : (
    <Circle size={18} color="#999" />
  )}
</div>
      <span className={`dpTask-text ${task.completed ? "dpTask-completed" : ""}` }>
        {task.title}
      </span>
      </div>

      <div className='dpTask-actions'>
        <button className="dpTask-btn dpTask-edit" onClick={() => setEditTask(task)}>Edit</button>

      <button className="dpTask-btn dpTask-delete" onClick={() => dispatch(deleteTaskAsync(task.id))}>
        Delete
      </button>
      </div>
    </div>
  )
}

export default TaskItem
