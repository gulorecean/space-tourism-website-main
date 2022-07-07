import React, { useState } from 'react';
import Nav from "../components/nav"

import engineer from "../assets/crew/image-anousheh-ansari.png"
import commander from "../assets/crew/image-douglas-hurley.png"
import specialist from "../assets/crew/image-mark-shuttleworth.png"
import pilot from "../assets/crew/image-victor-glover.png"

import europa from "../assets/destination/europa.png"
import mars from "../assets/destination/mars.png"
import moon from "../assets/destination/moon.png"
import titan from "../assets/destination/titan.png"

import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg"
import capsule from "../assets/technology/image-space-capsule-landscape.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"




function Explore({ System, parentFolder }) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main className={parentFolder}>
                {
                    parentFolder === ""
                }
            </main>
        </>

    );
};

export default Explore;