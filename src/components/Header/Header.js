import React from 'react';
import './Header.css'
import logo from '../../images/logo.png';
import background from '../../images/background-1.jpg';

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `url(${background})` }}>
            <div className="leftHeader">
                <img className="logo" src={logo} alt="" />
                <h1>Software Hunt</h1>
            </div>
            <div className="rightHeader">
                <div className="right-content">
                    <h1>Build your business in a automation way. Collect your business related neccessary software. </h1>
                    <h2>Total Budget: <span className="budget">$2000</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Header;