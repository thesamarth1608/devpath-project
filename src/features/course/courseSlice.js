import { createSlice } from "@reduxjs/toolkit"
import { initializeTopics } from "../../utils/localStorage"
import oops from "../../pages/Tutorial/data/oops.json"
import html from "../../pages/Tutorial/data/html.json"
import css from "../../pages/Tutorial/data/css.json"
import js from "../../pages/Tutorial/data/javascript.json"

const courseData = {
  oops,
  html,
  css,
  "js-basics": js
}
const courses = Object.fromEntries(
  Object.entries(courseData).map(([key,value]) => [
    key,
    initializeTopics(value)
  ])
)

const initialState = {
  courses,
  currentCourse:"oops",
  currentTopicIndex:0
}

const courseSlice = createSlice({

  name: "course",

  initialState,

  reducers: {

    loadCourseState: (state, action) => {
      return action.payload
    },

    resetCourseState: () => initialState,

    setCourse: (state, action) => {

      state.currentCourse = action.payload
      state.currentTopicIndex = 0

    },
    setTopic(state, action){
            state.currentTopicIndex = action.payload;
        },

    nextTopic: (state) => {

      const topics = state.courses[state.currentCourse];
            if(state.currentTopicIndex < topics.length - 1)
                state.currentTopicIndex++;

    },

    markComplete: (state, action) => {

      const { course, index } = action.payload

      if (!state.courses[course]) return

 const topic =  state.courses[course][index];
     topic.completed = !topic.completed;
//  const topic =  state.courses[state.currentCourse][state.currentTopicIndex];
//             topic.completed = !topic.completed;

    }

  }

})

export const {

  loadCourseState,
  setCourse,
  nextTopic,
  markComplete,
  setTopic,
  resetCourseState

} = courseSlice.actions

export default courseSlice.reducer