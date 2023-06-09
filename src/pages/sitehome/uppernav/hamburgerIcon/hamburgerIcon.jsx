import React, { useState } from 'react';
import './hamburgerIcon.scss';

export function HamburgerIcon(props) {
    const [isToggle, setIsToggle] = useState(false);
    const navListArr = Object.values(props?.navList);
    // console.log(props., 'meow131313')
    return (
        <div className={`${'hamburger-icon--nav-wrap'} ${isToggle ? 'toggled': ''}`} onClick={()=>{setIsToggle(!isToggle)}}>
            <summary className='hamburger-icon--container'>
                <div className='hamburger-icon--bar1'></div>
                <div className='hamburger-icon--bar2'></div>
                <div className='hamburger-icon--bar3'></div>
            </summary>
            <ul className='hamburger-icon--nav-list'>
                {navListArr.map((item)=>{
                    return(
                        <li className='hamburger-icon--nav-item'>
                            <p>{item.navItem}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default HamburgerIcon;