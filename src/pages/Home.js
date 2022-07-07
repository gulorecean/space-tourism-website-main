import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from "../components/nav"
const Home = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main className='Home'>
                <section>
                    <h5 className='subheading1'>so, you want to travel to</h5>
                    <h1>space</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </section>
                <section>
                    <NavLink to={'/Destination'} className='Langding-Page-Main-Btn'><h5>explore</h5></NavLink>
                </section>
            </main>
        </>

    );
};

export default Home;