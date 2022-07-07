import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/shared/logo.svg'
import NavBtn from './NavBtn';
import menu from '../assets/shared/icon-hamburger.svg'
import icon from '../assets/shared/icon-close.svg'

const liens = ['Home', 'Destination', 'Crew', 'Technology']

function Nav() {
    const [taskBar, setTaskBar] = useState(false)

    return (
        <nav>
            <div className="logo">
                <NavLink to='/Home'>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <button className="portable-btn" onClick={() => setTaskBar(true)}><img src={menu} alt="btn-open-task-bar" /></button>
            <div className={taskBar ? "left-part active" : "left-part"}>
                <div className='container'>
                    <button className="portable-btn" onClick={() => setTaskBar(false)}><img src={icon} alt="btn-close-task-bar" /></button>
                </div>
                <NavBtn list={liens} />
            </div>
        </nav>
    );
};


export default Nav;