import React from 'react';
import {Navlink} from 'react-router-dom'

const LangdingPageMainBtn = ({to, text}) => {
    return (
        <Navlink to={to} ClassName='Langding-Page-Main-Btn'>
            <h3>{text}</h3>
        </Navlink>
    );
};

export default LangdingPageMainBtn;