// import React from 'react'
// import './ide.css'
// import HtmlIcon from '../../assets/Images/icons/html.svg'
// import CssIcon from '../../assets/Images/icons/css.svg'
// import JavascriptIcon from '../../assets/Images/icons/javascript.svg'
// import AngularIcon from '../../assets/Images/icons/Angular.svg'
// import ReactIcon from '../../assets/Images/icons/react.svg'
// import { css } from '@emotion/react'



// const Ide = () => {
//     return (
//         <div className='ide-Section'>
//             <div className="ide-heading">
//                 <h2 class="ide-title">50+ Powerful In-Browser IDE Templates</h2>
//             </div>
//             <div className='ide-icons-row'>
//                 <div className='ide-tech-card'>
//                     <img src={HtmlIcon} className='ide-tech-icon ide-icon-1'></img>
//                     <div className='ide-tech-tooltip'>HTML</div>
//                 </div>
//                 <div class="ide-tech-card">
//                     <img src={CssIcon} class="ide-tech-icon ide-icon-2" />
//                     <div class="ide-tech-tooltip">java</div>
//                 </div>

//                 <div class="ide-tech-card">
//                     <img src={JavascriptIcon} class="ide-tech-icon ide-icon-3" />
//                     <div class="ide-tech-tooltip">React</div>
//                 </div>
//                 <div class="ide-tech-card">
//                     <img src={AngularIcon} class="ide-tech-icon ide-icon-4" />
//                     <div class="ide-tech-tooltip">React</div>
//                 </div>
//                 <div class="ide-tech-card">
//                     <img src={ReactIcon} class="ide-tech-icon ide-icon-5" />
//                     <div class="ide-tech-tooltip">React</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Ide
import React from 'react'
import './ide.css'
import HtmlIcon from '../../assets/Images/icons/html.svg'
import CssIcon from '../../assets/Images/icons/css.svg'
import JavascriptIcon from '../../assets/Images/icons/javascript.svg'
import AngularIcon from '../../assets/Images/icons/Angular.svg'
import ReactIcon from '../../assets/Images/icons/react.svg'
import { css } from '@emotion/react'



const Ide = () => {
    return (
        <div className='ide-container'>
           <div className='ide-content'>
             <div className="ide-heading">
                <h2 class="ide-title">50+ Powerful In-Browser IDE Templates</h2>
            </div>
            <div className='ide-icons-row'>
                <div className='ide-tech-card'>
                    <img src={HtmlIcon} className='ide-tech-icon ide-icon-1'></img>
                    <div className='ide-tech-tooltip'>HTML</div>
                </div>
                <div class="ide-tech-card">
                    <img src={CssIcon} class="ide-tech-icon ide-icon-2" />
                    <div class="ide-tech-tooltip">CSS</div>
                </div>

                <div class="ide-tech-card">
                    <img src={JavascriptIcon} class="ide-tech-icon ide-icon-3" />
                    <div class="ide-tech-tooltip">JavaScript</div>
                </div>
                <div class="ide-tech-card">
                    <img src={AngularIcon} class="ide-tech-icon ide-icon-4" />
                    <div class="ide-tech-tooltip">Angular</div>
                </div>
                <div class="ide-tech-card">
                    <img src={ReactIcon} class="ide-tech-icon ide-icon-5" />
                    <div class="ide-tech-tooltip">React</div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Ide
