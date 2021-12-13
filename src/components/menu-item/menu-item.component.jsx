import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div
        // style={{
        //     backgroundImage: `url(${imageUrl})`
        // }}
        //string interpolate in class to make in dynamic
        className={`${size} menu-item`}>

        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}/>

        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='title'>SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;