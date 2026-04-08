import React, { useState } from 'react'
import './socialproofcard.css'
import YoutubeIcon from '../../../../assets/Images/youtubeicon5.png'
import Instagram from '../../../../assets/Images/Instagram_icon.png'
import Twitter from '../../../../assets/Images/twittericon3.avif'
import LinkDn from '../../../../assets/Images/LinkedIn_icon.png'
const SocialProofCard = () => {

  return (
    <div className='devpath-social-card-container'>
      <div className="devpath-socialproofcard">
      
      <div className="social-platform-card">
        <div className="social-stat-value">1M+</div>
        <div className="social-platfom-card">
          <div className="social-platform-icon1">
            <img className="social-icon-img" src={YoutubeIcon}></img>
          </div>
        </div>
      </div>
      <div className="social-platform-card">
        <div className="social-stat-value">8K++</div>
        <div className="social-platfom-card">
          <div className="social-platform-icon1">
            <img className="social-icon-img" src={Twitter}></img>
          </div>
        </div>
      </div>
      <div className="social-platform-card">
        <div className="social-stat-value">234K+</div>
        <div className="social-platfom-card">
          <div className="social-platform-icon1">
            <img className="social-icon-img" src={Instagram}></img>
          </div>
        </div>
      </div>
      <div className="social-platform-card">
        <div className="social-stat-value">522K+</div>
        <div className="social-platfom-card">
          <div className="social-platform-icon1">
            <img className="social-icon-img" src={LinkDn}></img>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default SocialProofCard
