import React from 'react';

import Nav from '../components/nav';
import SliderInPage from '../components/SliderInPage';

import data from "../data.json"

const Thecnology = ({ System }) => {
    const children = ["Capsule", "Spaceport", "Vehicle"]
    const childrenContent = [1, 2, 3]

    return (
        <>
            <Nav />
            <main className="Technology">
                <span><h5>03</h5><h5>SPACE LAUNCH 101</h5></span>
                <section className="container">
                    <section className='container-text'>
                        <SliderInPage ParentFolder={'Technology'} list={children} childrenContent={childrenContent} link={System}/>
                        <div>
                            <span className="subheading2">THE TERMINOLOGY…</span>
                            <h3>{data["technology"][System][0]["name"]}</h3>
                            <p>{data["technology"][System][0]["description"]}</p>
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

export default Thecnology;