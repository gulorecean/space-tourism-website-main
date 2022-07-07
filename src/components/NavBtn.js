import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBtn = ({ list = [] }) => {
    return (
        <>
            {
                Object.entries(list).map((e, index) => {
                    return (
                        <NavLink to={'/' + e[1]} className={document.location.href.substring(document.location.href.lastIndexOf("/") + 1) === e[1] ? 'active' : ''} key={e[1]}>
                                <div>
                                    <span>{'0' + index}</span>
                                    <span>{e[1]}</span>
                                </div>      
                        </NavLink>
                    )
                })
            }
        </>
    );
};

export default NavBtn;