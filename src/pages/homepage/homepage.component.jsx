import React from 'react'
import './homepage.styles.scss'

import MenuItem from '../../components/menu-item/menu-item.component'
import Directory from '../../components/directory/directory.component'

const HomePage = () => (
    <div className='homepage'>
        <Directory /> 
    </div>
)
export default HomePage;


//Without components separation
{/* <div className='directory-menu'>

<div className='menu-item'>
    <div className='content'>
        <h1 className='title'>HATS</h1>
        <span className='title'>SHOP NOW</span>
    </div>
</div>
<div className='menu-item'>
    <div className='content'>
        <h1 className='title'>JACKETS</h1>
        <span className='title'>SHOP NOW</span>
    </div>
</div>
<div className='menu-item'>
    <div className='content'>
        <h1 className='title'>SNEAKERS</h1>
        <span className='title'>SHOP NOW</span>
    </div>
</div>
<div className='menu-item'>
    <div className='content'>
        <h1 className='title'>WOMENS</h1>
        <span className='title'>SHOP NOW</span>
    </div>
</div>
<div className='menu-item'>
    <div className='content'>
        <h1 className='title'>MENS</h1>
        <span className='title'>SHOP NOW</span>
    </div>
</div>
</div> */}
