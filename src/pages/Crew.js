import React from 'react';

import Nav from '../components/nav';
import SliderInPage from '../components/SliderInPage';

import data from "../data.json"

const Crew = ({ System }) => {
    const children = ["Commander", "Pilot", "Specialist", "Engineer"]
    const childrenContent = ["", "", "", ""]

    return (
        <>
            <Nav />
            <main className="Crew">
                <span><h5>02</h5><h5>Meet your crew</h5></span>
                <section className="container">
                    <section className='container-text'>
                        <SliderInPage ParentFolder={'Crew'} list={children} childrenContent={childrenContent} link={System}/>
                        <div>
                            <span className="subheading1">{data["crew"][System][0]["role"]}</span>
                            <h3>{data["crew"][System][0]["name"]}</h3>
                            <p>{data["crew"][System][0]["bio"]}</p>
                        </div>
                    </section>
                    <section className={'container-img ' + System}>
                        <span></span>
                    </section>
                </section>

            </main>

        </>
    );
};

export default Crew;