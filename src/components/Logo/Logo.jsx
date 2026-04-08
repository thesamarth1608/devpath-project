import React from 'react'
import './logo.css'
const Logo = ({ variant = "hero-logo" }) => {
    return (

        <div className={`logo ${variant}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="devpath-icon"
            >
               <defs>
  <linearGradient
    id="slateFlow"
    x1="0"
    y1="0"
    x2="24"
    y2="24"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0%" stop-color="#0f172a" />
    <stop offset="35%" stop-color="#334155" />
    <stop offset="65%" stop-color="#64748b" />
    <stop offset="100%" stop-color="#94a3b8" />
  </linearGradient>
</defs>








                {/* use gradient on ALL paths */}
                <g stroke="url(#slateFlow)" fill="none" strokeWidth="4.5">
                    <path d="M16 3h5v5" />
                    <path d="M8 3H3v5" />
                    <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
                    <path d="m15 9 6-6" />
                </g>
            </svg>

            <h1 className="devpath-text">
                <span>DevPath</span>
            </h1>
        </div>
    )
}

export default Logo
