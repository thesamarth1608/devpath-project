import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000/tasks";

// 📥 GET TASKS
export const getTasks = createAsyncThunk(
  "tasks/get",
  async () => {
   const res = await fetch("http://localhost:5000/tasks");
  if (!res.ok) throw new Error("Failed to fetch tasks");
  await new Promise((resolve)=>setTimeout(resolve, 5000));
  return await res.json();
  }
);

// ➕ ADD TASK
export const addTaskAsync = createAsyncThunk(
  "tasks/add",
  async (task) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }); 
     if (!res.ok) throw new Error("Failed to add task");
     const data = await res.json(); // ✅ IMPORTANT
    return data; // ✅ correct payload
  }
);

// ✏️ UPDATE TASK
export const updateTaskAsync = createAsyncThunk(
  "tasks/update",
  async (task) => {
    const res = await fetch(`${BASE_URL}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
     if (!res.ok) throw new Error("Failed to update task");
    return await res.json();
  }
);

// ❌ DELETE TASK
export const deleteTaskAsync = createAsyncThunk(
  "tasks/delete",
  async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    });
     if (!res.ok) throw new Error("Failed to delete task");
    return id;
  }
);