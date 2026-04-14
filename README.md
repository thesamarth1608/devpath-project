# 🚀 DevPath - Learning & Task Management Platform

## 🚀 Project Overview

DevPath is built using React and Redux Toolkit. It helps users efficiently manage their daily tasks with a smooth and responsive UI.  

This project combines **Task Management, Authentication, and Course Management**, making it a scalable real-world frontend application.


---

## ✨ Features

### 🔐 Authentication
- User login/logout system
- Protected routes
- Auth state management using Redux Toolkit
- Custom hook: `useAuth`

---

### 📚 Course Management
- Add / Fetch / Manage courses
- Redux Toolkit slice-based architecture
- Scalable structure for future backend integration

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

```
## 📂 Project Structure
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

## 🚀 Getting Started

### 1️⃣ Clone the repository
---bash
git clone https://github.com/thesamarth1608/devpath-project.git

🔮 Future Improvements
🔐 JWT / Firebase Authentication
🌙 Dark Mode
🔄 Undo Delete Feature
📄 Pagination / Infinite Scroll
🌍 Backend Integration (Node.js + MongoDB)
📊 Course progress tracking


🙌 Author
Tejal (bhaiii 😎)
