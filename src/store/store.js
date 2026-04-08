import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../features/auth/authSlice"
import courseReducer from "../features/course/courseSlice"
import taskReducer from "../features/task/taskSlice"

import { saveUserCourse } from "../utils/localStorage"

let isHydrating = false
export const setHydrating = (value)=>{
  isHydrating = value;
}

export const store = configureStore({

  reducer: {

    auth: authReducer,
    course: courseReducer,
    tasks: taskReducer,

  }

})

// localStorage.removeItem("devpath_users");
store.subscribe(() => {

  const state = store.getState();
  console.log(state);

  const user = state.auth.currentUser

  if (!user || isHydrating) return

  saveUserCourse(user.id, state.course)

});