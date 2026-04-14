# 🚀 DevPath - Learning & Task Management Platform

> A scalable React application demonstrating real-world frontend architecture and performance optimization techniques.

## 🚀 Project Overview

DevPath is a modern React application built using React and Redux Toolkit that combines task management, course learning, and authentication into a single platform.

Users can manage daily tasks, explore predefined learning courses, and track their progress seamlessly. The application is designed with a focus on clean architecture, reusable components, and performance optimization using techniques like debouncing, memoization, and efficient state management.

It demonstrates real-world frontend development practices including scalable folder structure, custom hooks, async state handling, and user-centric UI/UX.


---

## ✨ Features

### 🔐 Authentication
- User login/logout system
- Protected routes
- Auth state management using Redux Toolkit
- Custom hook: `useAuth`

---

### 📚 Course Learning System

- 📖 Structured learning system with predefined courses
- 🎯 Users can pick any course and track their progress
- 💾 Progress (current topic & index) is persisted across sessions
- 🔄 Resume learning seamlessly after login
- 🧠 Managed using Redux Toolkit for scalable state handling

---

### ✅ Task Management
- Add, Edit, Delete Tasks (CRUD)
- 🔍 Search Tasks with Debounce (optimized performance)
- ⚡ Fast & responsive UI
- 🧠 Custom Hooks (`useAuth`, `useFetchTask`, `useDebounce`)
- ⏳ Skeleton Loader for better UX
- 📦 Redux Toolkit for state management
- 🚀 Optimized rendering using `useMemo` and `React.memo`

---

## 🛠️ Tech Stack

- ⚛️ React.js
- 🧰 Redux Toolkit (Slices + Async Thunks)
- 🎨 CSS
- 🔄 JSON Server (Mock Backend)
- 🧠 Custom Hooks
---
## 📂 Project Structure
```
src/
│── components/
|───|tutorial/
│    ├── TutContent.jsx/
│    ├── TutSidebar.jsx/
|
|───|TaskManager/
│    ├── TaskItem/
│    ├── TaskList/
│    ├── TaskSkeleton/
│
│── hooks/
│ ├── useAuth.js
│ ├── useDebounce.js
│ ├── useFetchTask.js
│
│── features/
│ ├── auth/
│ ├── tasks/
│ ├── course/
│
│── pages/
| ├── Home.jsx
│ ├── Login.jsx
│ ├── Dashboard.jsx
| ├── Tutorial.jsx
│
│── App.jsx
│── main.jsx

```

## ⚡ Performance Optimizations

- Memoized task filtering using `useMemo`
- Optimized component rendering using `React.memo`
- Debounced search input
- Efficient state management with Redux Toolkit

---
🌐 Repository

👉 GitHub: https://github.com/thesamarth1608/devpath-project

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/thesamarth1608/devpath-project.git
```
----
## 🧠 Key Learnings

- ⚛️ Gained strong understanding of React Hooks (useState, useEffect, useMemo, useCallback)
- 🚀 Implemented performance optimization using useMemo and React.memo
- 🧩 Built scalable state management using Redux Toolkit slices
- ♻️ Designed reusable custom hooks for cleaner logic separation

----
### 🔮 Future Improvements
- 🔐 JWT / Firebase Authentication
- 🌙 Dark Mode
- 🔄 Undo Delete Feature
- 📄 Pagination / Infinite Scroll
- 🌍 Backend Integration (`Node.js` + `MongoDB`)
- 📊 Course progress tracking

---
### 🙌 Author
-Samarth (bhaiii 😎)
