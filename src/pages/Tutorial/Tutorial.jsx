import React from 'react'
import './tutorial.css'
import Logo from '../../components/Logo/Logo'
import TutorialData from './tutorialData'
import { NavLink } from 'react-router-dom'


const Tutorial = () => {
  return (
    <div className="tutorials-section">
      <div className="tutorials-grid">
        {
          TutorialData.Card.map((item, index)=>(
              <NavLink 
    to={`/tutorial/${item.slug}`} 
    key={index}
    className="tutorial"
  >
          <div className="tutorial__thumb">
            <img className='thumb-img' src={item.thumbnail} alt={item.title}></img>
          </div>
          <div className="tutorial__content">
            <h3 className="tutorial__title">{item.title}</h3>
            <p className="tutorial__desc">{item.description}</p>
            <div className="tutorial__meta">
            <span className='tutorial-logo'><Logo className="tutorial-logo"/></span>
              <span className="tutorial__date">{item.updatedDate}</span>
            </div>
          </div>
        </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Tutorial
