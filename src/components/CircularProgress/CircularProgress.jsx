import React from 'react'
import './circularprogress.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({percentage=0, size=150, color="#4ade80"}) => {
  return (
    <div style={{width: size, height:size}}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
        styles={buildStyles({
            textColor: "#FF6B35",
          pathColor: color,
          trailColor: "#d6d6d6",
          textSize: "24px",
        })}
      />
    </div>
  )
}

export default CircularProgress
