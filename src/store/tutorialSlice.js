// import oops from "../pages/Tutorial/data/oops.json";
// import css from "../pages/Tutorial/data/css.json";
// import js from "../pages/Tutorial/data/javascript.json";
// import html from "../pages/Tutorial/data/html.json";
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     courses:{
//         oops: oops.map((t)=>({...t, completed:false})),
//         html: html.map((t)=>({...t, completed:false})),
//         css: css.map((t)=>({...t, completed:false})),
//         "js-basics": js.map((t)=>({...t, completed:false})),
//     },
//     currentCourse:"oops",
//     currentTopicIndex:0,
// };

// const tutorialSlice = createSlice({
//     name:"tutorial",
//     initialState,
//     reducers: {
//         setCourse(state, action){
//             state.currentCourse = action.payload;
//             state.currentTopicIndex = 0;
//         },
//         setTopic(state, action){
//             state.currentTopicIndex = action.payload;
//         },
//         markDone(state){
//             const topic =  state.courses[state.currentCourse][state.currentTopicIndex];
//             topic.completed = !topic.completed;
//         },
//         nextTopic(state){
//             const topics = state.courses[state.currentCourse];
//             if(state.currentTopicIndex < topics.length - 1)
//                 state.currentTopicIndex++;
//         },
//     }
// })
//      export const {setCourse, setTopic, markDone, nextTopic} = tutorialSlice.actions;
//      export default tutorialSlice.reducer;