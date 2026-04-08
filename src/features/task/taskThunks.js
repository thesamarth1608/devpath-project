import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000/tasks";

// 📥 GET TASKS
export const getTasks = createAsyncThunk(
  "tasks/get",
  async () => {
    const res = await fetch(BASE_URL);
    return res.json();
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
    return res.json();
  }
);

// ❌ DELETE TASK
export const deleteTaskAsync = createAsyncThunk(
  "tasks/delete",
  async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    });
    return id;
  }
);