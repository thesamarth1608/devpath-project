
import './App.css'
import Hero from './pages/Home/Hero/Hero'
import HeroBadge from './components/HeroBadge/HeroBadge'
import HeroContainer from './components/HeroContainer/HeroContainer'
import Navbar from './components/Navbar/Navbar'
import SparkBackground from './components/SparkBackground/SparkBackground'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Tutorial from './pages/Tutorial/Tutorial'
import Contact from './pages/Contact/Contact'
import TutorialDetails from './pages/Tutorial/TutorialDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DirectionCard from './components/DirectionCard'
import ComingSoon from './components/ComingSoon/ComingSoon'
import LogInPage from './components/LogInPage/LogInPage'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<>
        <Navbar/>
        <Home/>
        <Footer/>
      </>
    },
    {
      path:'/contact',
      element:<>
        <Navbar/>
        <Contact/>
        <Footer/>
      </>
    },
    {
      path:'/tutorial',
      element:(
        <ProtectedRoute>
          <Navbar/>
        <Tutorial/>
        <Footer/>
        </ProtectedRoute>
      )
    },
    {
      path:'/tutorial/:slug',
      element:<>
        <Navbar/>
        <TutorialDetails/>
        <Footer/>
      </>
    },
    {
       path:'/login',
      element:<>
        <Navbar/>
        <LogInPage/>
        <Footer/>
      </>
    },
    {
      path:'/dashboard',
      element:(
        <ProtectedRoute>
          <Navbar/>
        <Dashboard/>
        <Footer/>
        </ProtectedRoute>
      )
    },
    {
       path:'*',
      element:<>
        <Navbar/>
        <ComingSoon/>
        <Footer/>
      </>
    },
  ])
  return (
   <>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer
       icon={false}
        position="top-right"
        autoClose={2000}
        theme="light"
      />
   </>
  )
}

export default App
