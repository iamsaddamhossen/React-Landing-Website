import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id="main">
            <Navbar/>

            <div className="name">
                <h1><span>Launch Your App</span> With Confidence And Creativity</h1>
                <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                <a href="#" className="cv-btn">Download</a>
            </div>
        </div>
    )
}

export default Header
