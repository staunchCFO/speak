import React from 'react';

import LOGO_FILE from '../../assets/images/logo.png'
import './styles.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <img
                    src={LOGO_FILE}
                    alt='speakerr_logo'
                />
            </div>
            <div className='nav_links'>
                <ul>
                    <li>
                        <a href='/#'>Features</a>
                    </li>
                    <li>
                        <a href='/#'>Testimonials</a>
                    </li>
                    <li>
                        <a href='/#'>FAQ</a>
                    </li>
                    <li>
                        <a href='/#'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='nav_btns'>
                <button className='nav_btn-login'>Login</button>
                <button className='nav_btn-join'>Join Speakerr</button>
            </div>
        </div>
    )
}

export default Navbar;