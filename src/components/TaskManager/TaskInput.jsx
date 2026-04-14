import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { addTask, updateTask } from "../../features/task/taskSlice";
import { addTaskAsync, updateTaskAsync } from '../../features/task/taskThunks';
import { toast } from 'react-toastify';
import { CheckCircle } from 'lucide-react';

const TaskInput = ({ editTask, setEditTask }) => {
    const [text, setText] = useState("");
     const { tasks, loadingAdd, loadingUpdate, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTask) setText(editTask.title);
  }, [editTask]);

  const handleSubmit = async() => {
   if (!text) {
  toast.warning("Please enter a task ⚠️");
  return;
}

    if (editTask) {
      try {
    await  dispatch(updateTaskAsync({ ...editTask, title: text })).unwrap();

     toast.success("Task updated", {
      className: "toast-update",
  icon: <CheckCircle size={20} className="text-sky-600" />,
});

  } catch (err) {
    toast.error(err.message || "Update failed ❌");
  }
      setEditTask(null);
    } else {
      try {
    await dispatch(addTaskAsync({
        // id: Date.now(),
        title: text,
        completed: false,
      })).unwrap();

   toast.success("Task added", {
    className: "toast-add",
      icon: <CheckCircle size={20} className="text-green-600" />,
});

  } catch (err) {
    toast.error(err.message || "Failed to add task ❌");
  }
     
    }

    setText("");
  };
  return (
    <>
    <h3>My Learning Tasks</h3>
    <div className="dpTask-inputBox">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="What do you want to learn today?"/>
      <button onClick={handleSubmit} disabled={loadingAdd || loadingUpdate}  style={{ opacity: loadingAdd||loadingUpdate ? 0.5 : 1 }}
    >
      {loadingAdd
        ? "Adding..."
        : loadingUpdate
        ? "Updating..."
        : editTask
        ? "Update"
        : "+ Add"}
      </button>
    </div>
    </>
  )
}

export default TaskInput
