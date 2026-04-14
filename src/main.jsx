import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
// import { Provider } from 'react-redux'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// )

setTimeout(() => {
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}, 2000);
// const start = Date.now();

// setTimeout(() => {
//   const elapsed = Date.now() - start;
//   const delay = Math.max(0, 2000 - elapsed);

//   setTimeout(() => {
//     createRoot(document.getElementById("root")).render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//   }, delay);
// }, 0);