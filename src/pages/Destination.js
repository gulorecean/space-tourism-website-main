import React from 'react';

import Nav from '../components/nav';
import SliderInPage from '../components/SliderInPage';

import data from "../data.json"

const Destination = ({ System }) => {
    const children = ["Moon", "Mars", "Titan", "Europa"]

    return (
        <>
            <Nav />
            <main className="Destination">
                <span><h5>01</h5><h5>Pick your Destination</h5></span>
                <section className="container">
                    <section className='container-text'>
                        <SliderInPage ParentFolder={'Destination'} list={children} childrenContent={null} link={System}/>
                        <div>
                            <h3>{data["destinations"][System][0]["name"]}</h3>
                            <p>{data["destinations"][System][0]["description"]}</p>
                            <div>
                                <ul>
                                    <li><span className="subheading2">AVG. DISTANCE</span><span className="subheading1">{data["destinations"][System][0]["distance"]}</span></li>
                                    <li><span className="subheading2">Est. travel time</span><span className="subheading1">{data["destinations"][System][0]["travel"]}</span></li>
                                </ul>
                            </div>
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

export default Destination;