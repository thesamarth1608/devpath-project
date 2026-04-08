import { createSlice } from "@reduxjs/toolkit";
import { addTaskAsync, deleteTaskAsync, getTasks, updateTaskAsync } from "./taskThunks";
const initialState = {
  tasks: [],
  loading: false,
  error: null
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // 📥 GET
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch tasks";
      })

      // ➕ ADD
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })

      // ✏️ UPDATE
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (t) => t.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })

      // ❌ DELETE
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (t) => t.id !== action.payload
        );
      });
  }
});

export default taskSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     tasks: []
// };

// const taskSlice = createSlice({
//     name:"tasks",
//     initialState,
//     reducers: {
//         addTask: (state, action)=>{
//             state.tasks.push(action.payload);
//         },
//         deleteTask: (state, action)=>{
//             state.tasks = state.tasks.filter(task=>task.id !== action.payload);
//         },
//         updateTask: (state, action)=>{
//             const index = state.tasks.findIndex(t=>t.id === action.payload.id);
//             if(index !== -1){
//                 state.tasks[index] = action.payload;
//             }
//         },
//         toggleComplete : (state, action)=>{
//             const task = state.tasks.find(t=>t.id === action.payload);
//             if(task){
//                 task.completed = !task.completed;
//             }
//         }
//     }
// });

// export const{addTask, deleteTask, updateTask, toggleComplete} = taskSlice.actions;
// export default taskSlice.reducer;