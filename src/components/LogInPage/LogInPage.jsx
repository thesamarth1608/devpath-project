import React, { useEffect, useState } from 'react'
import './loginpage.css'
import HeroImg from '../../assets/Images/heroimg.png'
import { loadUserCourse } from '../../utils/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { loadCourseState, resetCourseState } from '../../features/course/courseSlice'
import { login } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { setHydrating } from '../../store/store'
import { toast } from "react-toastify";

const LogInPage = () => {
    const [FormData, setFormData] = useState({
        name:"",
        password:"",
        email:"",
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.auth.currentUser);

    const  handleChange = (e)=>{
        setFormData({
            ...FormData, 
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!FormData.name || !FormData.email || !FormData.password) {
  toast.error("Name, Email and Password required ❌");
  return;
}
        const user = {
            id: FormData.email,
            password:FormData.password,
            name:FormData.name,
        }
        handleLogin(user);
        
    }
    const handleLogin = (user) => {
        setHydrating (true);
  dispatch(login(user))

  const savedCourse = loadUserCourse(user.id)

  if(savedCourse){
    dispatch(loadCourseState(savedCourse))
  }else {
    dispatch(resetCourseState()) // 👈 IMPORTANT FIX
  }
  setHydrating(false);
  navigate("/dashboard");
}

useEffect(()=>{
    if(user){
        navigate("/dashboard")
    }
}, [user])

    return (
        <div className="login-page-container">
            <div className="login-overlay">
                <img  className='login-overlay-img' src={HeroImg}></img>
                </div>
                <div className="login-card">
                    <h2>Welcome Back</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={FormData.name}  className="login-input"  placeholder="Username" onChange={handleChange} />
                        <input type="email" name="email" value={FormData.email}  className="login-input"  placeholder="Enter email" onChange={handleChange} />
                        <input type="password" name="password" value={FormData.password} className="login-input" placeholder="Enter Password" onChange={handleChange} />
                        <button type="submit">Login</button>
                        <div className='forgot-password'>forgot Password</div>
                    </form>
                </div>
            
        </div>
    )
}

export default LogInPage
