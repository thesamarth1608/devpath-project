# 🚀 DevPath - Learning & Task Management Platform

> A scalable React application demonstrating real-world frontend architecture and performance optimization techniques.

---

## 🚀 Project Overview

DevPath is a modern React application built using React and Redux Toolkit that combines task management, course learning, and authentication into a single platform.

Users can manage daily tasks, explore predefined learning courses, and track their progress seamlessly. The application is designed with a focus on clean architecture, reusable components, and performance optimization using techniques like debouncing, memoization, and efficient state management.

It demonstrates real-world frontend development practices including scalable folder structure, custom hooks, async state handling, and user-centric UI/UX.

👉 The application also supports a **multi-user environment**, where each user can manage their own tasks independently with proper data separation.

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
- 👥 Multi-user task support (tasks linked to individual users)
- 🔍 Search Tasks with Debounce (optimized performance)
- ⚡ Fast & responsive UI
- 🧠 Custom Hooks (`useAuth`, `useFetchTask`, `useDebounce`)
- ⏳ Skeleton Loader for better UX
- 📦 Redux Toolkit for state management
- 🚀 Optimized rendering using `useMemo` and `React.memo`

👉 Each task is associated with a specific user, ensuring user-specific data handling.

---

## 🛠️ Tech Stack

- ⚛️ React.js
- 🧰 Redux Toolkit (Slices + Async Thunks)
- 🎨 CSS
- 🔄 JSON Server (Mock Backend)
- 🧠 Custom Hooks

---

## 📸 Screenshots

### 🏠 Dashboard
![Dashboard](assets/Images/screenshots/dashboard.png)

### ✅ Task Manager
![Tasks](assets/Images/screenshots/tasks.png)

> Tasks are user-specific and dynamically fetched based on logged-in user.

### 📚 Course Learning
![Course](assets/Images/screenshots/course.png)

---

## 🧩 Architecture Highlights

- 👥 User-based task filtering (multi-user support)
- 🔗 API filtering using query params (`?userId=`)
- 🧠 Separation of concerns using slices & custom hooks
- 📦 Scalable folder structure

---

## 📂 Project Structure

```bash
src/
│── components/
│   ├── tutorial/
│   │   ├── TutContent.jsx
│   │   ├── TutSidebar.jsx
│   │
│   ├── TaskManager/
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskSkeleton.jsx
│
│── hooks/
│   ├── useAuth.js
│   ├── useDebounce.js
│   ├── useFetchTask.js
│
│── features/
│   ├── auth/
│   ├── tasks/
│   ├── course/
│
│── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Tutorial.jsx
│
│── App.jsx
│── main.jsx
```

---

## ⚡ Performance Optimizations

- 🚀 Memoized task filtering using `useMemo`
- 🧠 Optimized component rendering using `React.memo`
- ⏱️ Debounced search input
- 📉 Efficient state management with Redux Toolkit

---

## 🌐 Repository

👉 GitHub: https://github.com/thesamarth1608/devpath-project

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/thesamarth1608/devpath-project.git
```

### 2️⃣ Navigate to project
```bash
cd devpath-project
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Start JSON Server
```bash
npx json-server --watch db.json --port 5000
```

### 5️⃣ Run the app
```bash
npm run dev
```

---

## 🧠 Key Learnings

- ⚛️ Gained strong understanding of React Hooks (useState, useEffect, useMemo, useCallback)
- 🚀 Implemented performance optimization using `useMemo` and `React.memo`
- 🧩 Built scalable state management using Redux Toolkit slices
- ♻️ Designed reusable custom hooks for cleaner logic separation
- 👥 Implemented multi-user data handling logic

---

## 🔮 Future Improvements

- 🔐 JWT / Firebase Authentication
- 🌙 Dark Mode
- 🔄 Undo Delete Feature
- 📄 Pagination / Infinite Scroll
- 🌍 Backend Integration (`Node.js` + `MongoDB`)
- 📊 Course progress tracking

---

## 🙌 Author

- Samarth (bhaiii 😎)

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
