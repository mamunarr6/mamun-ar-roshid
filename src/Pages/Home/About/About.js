import React from 'react';
import mamun from '../../../images/mamun12.png'
const About = () => {
    return (
        <div className="about-bg py-20">
            <div className="container mx-auto">
                <h1 className="text-center text-3xl text-gray-300 mb-20">About Me</h1>
                <div className="grid grid-cols-12">
                    <div className="col-span-7">
                        <h3 className="text-gray-200 text-2xl">Get a closer look at who I am</h3>
                        <h4 className="text-gray-50 pt-8 pb-5 text-xl"> <span style={{ color: '#ff8578', }}>-----</span> who i am <span style={{ color: '#ff8578', }}>-----</span></h4>
                        <p className="text-gray-300">I am Mamun Ar Roshid a full stack and react developer from Bangladesh.Learning new skills and technology is my passion and i love it.I also love to serve my client a good and better service mostly.</p>
                    </div>
                    <div className="col-span-4">
                        <img className="about-img" src={mamun} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;