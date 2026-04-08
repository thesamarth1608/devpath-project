import React from 'react'
import './pathcontainer.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { GraduationCap } from "lucide-react";
import { Award } from "lucide-react";
import { Brain } from "lucide-react";
import { Code2 } from "lucide-react";
import { Crown } from "lucide-react";




import { Monitor, Keyboard } from "lucide-react";

import { Cloud, Database } from "lucide-react";
import { Brush, Palette } from "lucide-react";




const PathContainer = () => {
    return (
        <section class="paths-section">
            <div class="paths-header">
                <h2 class="paths-title">All Learning Paths</h2>
                <p class="paths-subtitle">Choose your journey and grow as a developer</p>
            </div>

            <div class="paths-grid">

                <div className='path-card-container'>
                    <div class="path-card">
                    <div class="path-icon-box"><GraduationCap className='path-icon1'/></div>
                    <div className='path-card-right'>
                        <h3 class="path-title">Beginner <ArrowForwardIosIcon sx={{fontSize:'16px'}}/></h3>
                        <p class="path-desc">Your first step toward becoming a professional developer.</p>
                        <div class="path-duration">Total time: 48 hours, 25 minutes</div>
                    </div>
                </div>
                </div>
                <div className='path-card-container'>
                    <div class="path-card">
                    <div class="path-icon-box"><Award className='path-icon2'/></div>
                    <div className='path-card-right'>
                        <h3 class="path-title">Professional  <ArrowForwardIosIcon sx={{fontSize:'16px'}}/></h3>
                        <p class="path-desc">Advance your journey to professional-level development.</p>
                        <div class="path-duration">Total time: 48 hours, 25 minutes</div>
                    </div>
                </div>
                </div>
               <div className='path-card-container'> <div class="path-card">
                    <div class="path-icon-box"><Crown className='path-icon3'/></div>
                    <div className='path-card-right'>
                        <h3 class="path-title">Expert  <ArrowForwardIosIcon sx={{fontSize:'16px'}}/></h3>
                        <p class="path-desc">Become a senior developer with deep technical expertise.</p>
                        <div class="path-duration">Total time: 48 hours, 25 minutes</div>
                    </div>
                </div></div>
               <div className='path-card-container'>
                 <div class="path-card">
                    <div class="path-icon-box"><Monitor className='path-icon4'/></div>
                    <div className='path-card-right'>
                        <h3 class="path-title">Computer Science  <ArrowForwardIosIcon sx={{fontSize:'16px'}}/></h3>
                        <p class="path-desc">Strengthen your CS fundamentals for a top tech career.</p>
                        <div class="path-duration">Total time: 48 hours, 25 minutes</div>
                    </div>
                </div>
               </div>
                <div className='path-card-container'>
                    <div class="path-card">
                    <div class="path-icon-box"><Database className="path-icon6" /></div>
                        
                    <div className='path-card-right'>
                        <h3 class="path-title">Fullstack to Backend  <ArrowForwardIosIcon sx={{fontSize:'16px'}}/></h3>
                        <p class="path-desc">Master backend technologies and scalable system development.</p>
                        <div class="path-duration">Total time: 48 hours, 25 minutes</div>
                    </div>
                </div>
                </div>
                <div className='path-card-container'><div class="path-card">
                    <div class="path-icon-box"><div className="icon-combo">
                        <Palette className="path-icon8" />
                        <Brush className="path-icon9" />
                    </div></div>
                    <div className='path-card-right'>
                        <h3 class="path-title">Design to Code  <ArrowForwardIosIcon sx={{fontSize:'16px'}}/></h3>
                        <p class="path-desc">Bridge the gap between UI design and real-world development.</p>
                        <div class="path-duration">Total time: 48 hours, 25 minutes</div>
                    </div>
                </div></div>
            </div>
        </section>
    )
}

export default PathContainer
