import React from 'react'
import './devpathintrolayout.css'

const DevPathIntroLayout = () => {
    return (
        <div className='devpath-intro-layout'>
            <div className='devpath-title-intro-left'>
                <div className='intro-title-container'>
                    <span className='intro-title'>Your Developer Path Starts Here.</span>
                    <span className='intro-title-desc'>Learn coding with structured roadmaps, real projects, and curated resources to guide your journey in tech.</span>
                </div>
                <div className='devpath-intro-action'>
                    <button class="contactButton contact">
                        Contact
                        <div class="iconButton">
                        </div>
                    </button>
                    <button class="contactButton course">
                        View Course
                        <div class="iconButton">
                        </div>
                    </button>
                    {/* <!-- From Uiverse.io by d4niz -->  */}
<button class="contactButtonstatrt start">
  Start Here
  <div class="iconButton">
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
                <div className='intro-review'>
                    <span className='intro-happy-st'>70,000+ Happy Students</span>
                </div>
            </div>
            <div className='devpath-title-intro-right'>
                <div className='devpath-right-card-grid'>
                    <div className='intro-card card-floating-1'><span>Dev Challenges</span></div>
                    <div className='intro-card card-floating-2'><span>Tutorials</span></div>
                    <div className='intro-card card-floating-3'><span>Article</span></div>
                    <div className='intro-card card-floating-4'><span>Core Cs Subject</span></div>
                    <div className='intro-card card-floating-6'><span>Interview Experience</span></div>
                    <div className='intro-card card-floating-7'><span>Mock-Tests</span></div>
                </div>
            </div>
        </div>
    )
}

export default DevPathIntroLayout
