import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='logoFM.png' alt="fmdesign" />
            {/* <h2 className='app-subtitle'>React-Express-Mysql App</h2> */}
        </div>
    );
}