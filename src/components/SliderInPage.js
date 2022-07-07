import React from 'react';
import { NavLink } from 'react-router-dom';

function SliderInPage({ParentFolder, list = [], childrenContent=[], link}){
    return (
        <section className='SliderInPage'>
            {
                list.map((e, index) => {
                    return(
                        <NavLink className={link === list[index] ? 'SliderInPage-item active' : 'SliderInPage-item'} to={'/'+ParentFolder+'/'+list[index]} key={e+index}>
                            <h5 className="subheading2">{childrenContent === null ? e : childrenContent[index]}</h5>
                        </NavLink>
                    )
                })
            }
        </section>
    );
};

export default SliderInPage;