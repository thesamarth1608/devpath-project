import { createSlice } from "@reduxjs/toolkit";
import { addTaskAsync, deleteTaskAsync, getTasks, updateTaskAsync } from "./taskThunks";
const initialState = {
  tasks: [],
  loadingGet: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingDeleteId: null,
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
        state.loadingGet = true;
        state.error = null;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loadingGet = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loadingGet = false;
        state.error = action.error.message;
      })

      // ➕ ADD
      .addCase(addTaskAsync.pending, (state) => {
        state.loadingAdd = true;
        state.error = null;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.loadingAdd = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTaskAsync.rejected, (state, action) => {
        state.loadingAdd = false;
        state.error = action.error.message;
      })

      // ✏️ UPDATE
      .addCase(updateTaskAsync.pending, (state) => {
        state.loadingUpdate = true;
        state.error = null;
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        state.loadingUpdate = false;

        const index = state.tasks.findIndex(
          (t) => t.id === action.payload.id
        );

        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateTaskAsync.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.error = action.error.message;
      })

      // ❌ DELETE
      .addCase(deleteTaskAsync.pending, (state, action) => {
        state.loadingDeleteId = action.meta.arg;
        state.error = null;
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.loadingDeleteId = null;

        state.tasks = state.tasks.filter(
          (t) => t.id !== action.payload
        );
      })
      .addCase(deleteTaskAsync.rejected, (state, action) => {
        state.loadingDeleteId = null;
        state.error = action.error.message;
      })
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