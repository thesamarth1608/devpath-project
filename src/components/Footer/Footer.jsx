import React from 'react'
import './footer.css'
import Logo from '../Logo/Logo'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-grid'>
                <div class="footer-brand">
                    <div class="footer-logo">
                         <Logo variant='footer-logo-child' />
                    </div>
                    <p class="footer-brand-desc">
                        Your complete roadmap to becoming a developer.
                    </p>
                </div>
                <div class="footer-links">
                    <h4 class="footer-title">Quick Links</h4>
                    <ul class="footer-list">
                        <li class="footer-link">Home</li>
                        <li class="footer-link">Tutorials</li>
                        <li class="footer-link">Articles</li>
                        <li class="footer-link">Roadmap</li>
                    </ul>
                </div>
                <div class="footer-legal">
                    <h4 class="footer-title">Legal</h4>
                    <ul class="footer-list">
                        <li class="footer-link">Privacy Policy</li>
                        <li class="footer-link">Terms of Use</li>
                        <li class="footer-link">Refund & Cancellation Policy</li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4 class="footer-title">Get In Touch</h4>
                    <p class="footer-contact-item">support@devpath.com</p>
                    <p class="footer-contact-item">Pune, India</p>
                </div>

            </div>
            <div class="footer-bottom">
                <p>© 2026 DevPath. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
