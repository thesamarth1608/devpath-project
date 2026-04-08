import React from 'react'
import './contact.css'
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import contactHero from '../../assets/Images/contactimg/contactHero4.png'
import EmailIcon from '@mui/icons-material/Email';
import { Mail } from "lucide-react"
import { Phone } from "lucide-react";
import { Send } from "lucide-react";
const Contact = () => {
    return (
        <div className='devpath-contact-container'>
            <div className="contact-bg">
                <img src={contactHero} className="contact-bg-overlay"></img>
            </div>

            <div className="devpath-contact-content">
                <div className='contact-left-container'>
                    
                <form className="devpath-contact-form">
                <div className='devpath-contact-header'>
                    <h1 className='devpath-contact-title'>Get in Touch</h1>
                    <EmailIcon sx={{ fontSize: '36px' }} />
                </div>
                    <div className="devpath-contact-form-row">
                        <div className="devpath-contact-field">
                            <label className="devpath-contact-label">Name</label>
                            <input className="devpath-contact-input" placeholder='Enter your name' type="text" />
                        </div>

                        <div className="devpath-contact-field">
                            <label className="devpath-contact-label">Email Address</label>
                            <input className="devpath-contact-input" placeholder='Enter your email' type="email" />
                        </div>
                    </div>

                    <div className="devpath-contact-form-row">
                        <div className="devpath-contact-field">
                            <label className="devpath-contact-label">Phone Number</label>
                            <input className="devpath-contact-input" type="tel" placeholder='Enter your Phone Number' />
                        </div>

                        <div className="devpath-contact-field">
                            <label className="devpath-contact-label">Subject</label>
                            <input className="devpath-contact-input" type="text" placeholder='Enter your Subject' />
                        </div>
                    </div>

                    <div className="devpath-contact-field">
                        <label className="devpath-contact-label">Message</label>
                        <textarea className="devpath-contact-textarea" placeholder='Enter your message...'></textarea>
                    </div>

                    <div className='form-btn-wrapper'>
                        <div className="devpath-contact-btn"><span>Send</span> <Send className='send-icon' size={30} /></div>
                    </div>

                </form>
                </div>
                {/* <h2 className="devpath-contact-title">Get in Touch</h2>
                    <p className="devpath-contact-desc">
                        Have questions? Fill the form and our team will reply.
                    </p> */}
                    <div className="devpath-contact-info-container">

                <div className="devpath-info-header"><h1>Contact Information</h1></div>
                <div className="devpath-contact-info">
                    <div className="devpath-contact-info-item">
                        <span className="devpath-contact-icon"><Mail color="#e11d48" size={30}/></span>
                        <span className="devpath-contact-text">support@devpath.com</span>
                    </div>

                    <div className="devpath-contact-info-item">
                        <span className="devpath-contact-icon"><Phone color="#16a34a" size={30}/></span>
                        <span className="devpath-contact-text">+91 98765 43210</span>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Contact
