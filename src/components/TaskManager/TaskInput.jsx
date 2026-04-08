import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// import { addTask, updateTask } from "../../features/task/taskSlice";
import { addTaskAsync, updateTaskAsync } from '../../features/task/taskThunks';

const TaskInput = ({ editTask, setEditTask }) => {
    const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTask) setText(editTask.title);
  }, [editTask]);

  const handleSubmit = () => {
    if (!text) return;

    if (editTask) {
      dispatch(updateTaskAsync({ ...editTask, title: text }));
      setEditTask(null);
    } else {
      dispatch(addTaskAsync({
        // id: Date.now(),
        title: text,
        completed: false,
      }));
    }

    setText("");
  };
  return (
    <>
    <h3>My Learning Tasks</h3>
    <div className="dpTask-inputBox">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="What do you want to learn today?"/>
      <button onClick={handleSubmit}>
        {editTask ? "Update" : "+ Add"}
      </button>
    </div>
    </>
  )
}

export default TaskInput
