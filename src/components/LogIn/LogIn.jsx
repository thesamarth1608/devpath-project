import React, { useState } from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import { NavLink } from 'react-router-dom';
import { resetTasks } from '../../features/task/taskSlice';
import { resetCourseState } from '../../features/course/courseSlice';
// import { toast } from 'react-toastify';

const LogIn = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state)=>state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    dispatch(logout());
    dispatch(resetTasks());
    dispatch(resetCourseState());
    navigate("/login", { replace: true });
    
    

  }
//   const testToast = () => {
//   toast.success("Bhaiii toast working 🚀");
// };
  return(
    <div className='LogIn-wrapper'>
      {
        !user ? (
          <div  className='user-wrapper'>
        <div className='user-name-tag'><span>Login</span></div>
      </div>)
      : 
      (<div className='LogIn-wrapper'>
      <div className='Dashboard-wrapper' onClick={()=>navigate("/dashboard")}><span>Dashboard</span></div>
      <div className='user-wrapper'>
        <div className='user-name-tag'><span>{user.name}</span></div>
        <ExpandMoreOutlinedIcon sx={{fontSize:'24px', marginTop:'20px'}}
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
                <div className="dp-user-dropdown">
                  <button onClick={handleLogout}>LogOut</button>
                </div>
              )}
      </div>
    </div>)
      }
    </div>
  )
  // return (
  //   <div className='LogIn-wrapper'>
  //     <div className='Dashboard-wrapper'><span>Dashboard</span></div>
  //     <div className='user-wrapper'>
  //       <div className='user-name-tag'><span>Tej</span></div>
  //       <ExpandMoreOutlinedIcon sx={{fontSize:'24px', marginTop:'20px'}}/>
  //     </div>
  //   </div>
  // )
}

export default LogIn
