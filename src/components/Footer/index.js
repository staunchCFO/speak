import React from 'react';
import WHITE_LOGO from '../../assets/images/white_logo.png'

import './style.css';

const Footer = () => {
  return (
    <div className='footer_container'>
        <img 
            src={WHITE_LOGO}
            alt='white_logo'
        />
        <ul>
            <li>Features</li>
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Contacts</li>
            <li>Help</li>
            <li>Privacy</li>
        </ul>
        <div className='divider' />
        <div className='lower'>
            <div className='left'>
                <p>© 2023 Speakerr. All rights reserved.</p>
            </div>
            <div className='right'>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer