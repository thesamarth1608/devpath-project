// import React from 'react'
// import './whycontainer.css'
// import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
// import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
// import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
// const Whycontainer = () => {
//   return (
//     <div className='whycontainer'>
//     <div className='whycard-left'>
//         <div className='why-feature-card'>
//             <div className='why-icon-box'><TrendingUpOutlinedIcon className='why-card-icon-launch' sx={{fontSize:'25px', color:'#10b981'}}/></div>
//             <div className='why-feature-title'>Learn-Elevate Your Career</div>
//             <div className='why-feature-subtitle'>Learn with a structured roadmap and modern dev tools.</div>
//         </div>
//         <div className='why-feature-card'>
//             <div className='why-icon-box'><CodeOutlinedIcon className='why-card-icon-launch' sx={{fontSize:'25px', color:'#10b981'}}/></div>
//             <div className='why-feature-title'>Build-Create with Confidence</div>
//             <div className='why-feature-subtitle'>Develop real-world projects using modern technologies.</div>
//         </div>
//         <div className='why-feature-card'>
//             <div className='why-icon-box'><RocketLaunchOutlinedIcon className='why-card-icon-launch' sx={{fontSize:'25px', color:'#10b981'}}/></div>
//             <div className='why-feature-title'>Launch-Succeed in Your Career</div>
//             <div className='why-feature-subtitle'>Prepare for jobs and start your professional developer journey.</div>
//         </div>
//     </div>
//     <div className='why-card-right'>
//       <div className='why-title-line'>Why Developers Choose DevPath</div>
//       <div className='why-title-hightlight'>Your Complete Developer Roadmap?</div>
//       <div className='why-right-desc'> Everything you need to learn, build, and launch your developer career.</div>
//       <div className='why-connect-btn'><span>Explore DevPath</span></div>
//     </div>
//     </div>
//   )
// }

// export default Whycontainer
import React from 'react'
import './whycontainer.css'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
const Whycontainer = () => {
  return (
  <div className='whycontainer'>
          <div className='whycard'>
            <div className='whycard-left'>
              <div className='why-slider'>
                <div className='why-feature-card'>
                  <div className='why-icon-box'><TrendingUpOutlinedIcon className='why-card-icon-launch' sx={{ fontSize: '25px', color: '#F97316' }} /></div>
                  <div className='why-feature-title'>Learn-Elevate Your Career</div>
                  <div className='why-feature-subtitle'>Learn with a structured roadmap and modern dev tools.</div>
                </div>
                <div className='why-feature-card'>
                  <div className='why-icon-box'><CodeOutlinedIcon className='why-card-icon-launch' sx={{ fontSize: '25px', color: '#2563EB' }} /></div>
                  <div className='why-feature-title'>Build-Create with Confidence</div>
                  <div className='why-feature-subtitle'>Develop real-world projects using modern technologies.</div>
                </div>
                <div className='why-feature-card'>
                  <div className='why-icon-box'><RocketLaunchOutlinedIcon className='why-card-icon-launch' sx={{ fontSize: '25px', color: '#10B981' }} /></div>
                  <div className='why-feature-title'>Launch-Succeed in Your Career</div>
                  <div className='why-feature-subtitle'>Prepare for jobs and start your professional developer journey.</div>
                </div>
              </div>
            </div>
            <div className='why-card-right'>
              <div className='why-title-line'>Why Developers Choose DevPath</div>
              <div className='why-title-hightlight'>Your Complete Developer Roadmap?</div>
              <div className='why-right-desc'> Everything you need to learn, build, and launch your developer career.</div>
              {/* <!-- From Uiverse.io by d4niz -->  */}
              <button class="explore-why-contactButton">
                Explore
                <div class="explore-why-iconButton">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>

            </div>
          </div>
        </div>

  )
}

export default Whycontainer
