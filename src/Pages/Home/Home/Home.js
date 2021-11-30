import React from 'react';
// import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
// import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Contact></Contact>

        </div>
    );
};

export default Home;