import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { deleteTask, toggleComplete } from "../../features/task/taskSlice";
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { deleteTaskAsync, updateTaskAsync } from '../../features/task/taskThunks';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

const TaskItem = ({ task, setEditTask }) => {
     const dispatch = useDispatch();
     const { tasks, loadingDeleteId, error } = useSelector((state) => state.tasks);

     const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This task will be deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    try {
      await dispatch(deleteTaskAsync(id)).unwrap();

      
toast.success("Task deleted", {
  className: "toast-delete",
  icon: <Trash2 size={20} className="text-red-600" />,
});

    } catch (err) {
      toast.error(err.message || "Delete failed ❌");
    }
  }
};

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

      <button  disabled={loadingDeleteId === task.id} className="dpTask-btn dpTask-delete" onClick={() => handleDelete(task.id)} style={ {opacity: loadingDeleteId === task.id ? 0.5 : 1}}>
       {loadingDeleteId === task.id ? "Deleting..." : "Delete"}
      </button>
      </div>
    </div>
  )
}

export default React.memo(TaskItem);