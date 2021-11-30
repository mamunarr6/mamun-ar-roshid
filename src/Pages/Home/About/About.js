import React from 'react';
import mamun from '../../../images/mamun12.png'
import Progressbar from '../../Shared/Progessbar/Progressbar';
const About = () => {

    return (
        <div className="about-bg py-20">
            <div className="container mx-auto">
                <h1 className="text-center text-3xl text-gray-300 mb-20 font-bold">About Me</h1>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-7">
                        <h3 className="text-gray-200 text-2xl">Get a closer look at who I am</h3>
                        <h4 className="text-gray-50 pt-8 pb-5 text-xl"> <span style={{ color: '#ff8578', }}>-----</span> who i am <span style={{ color: '#ff8578', }}>-----</span></h4>
                        <p className="text-gray-300">I am Mamun Ar Roshid a full stack and react developer from Bangladesh.Learning new skills and technology is my passion and i love it.I also love to serve my client a good and better service mostly.</p>
                        <h1 className="text-gray-200 text-center text-2xl font-semibold my-7">My Technical Skills</h1>
                        <div>
                            <h2 className="text-gray-200 text-lg font-medium">Html 5</h2>
                            <Progressbar done="90" />
                            <h2 className="text-gray-200 mt-7 text-lg font-medium">Css</h2>
                            <Progressbar done="85" />
                            <h2 className="text-gray-200 mt-7 text-lg font-medium">Javascript</h2>
                            <Progressbar done="75" />
                            <h2 className="text-gray-200 mt-7 text-lg font-medium">React Js</h2>
                            <Progressbar done="80" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <img className="about-img" src={mamun} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-center text-gray-200 mt-5">To Know For More Information About Me</h1>
                    <div className="flex justify-center mt-5">
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1C9Ieyrg12bkuEu6y5b49TmarY0w1ct9a/view?usp=sharing"><button
                                className="common-button">DOWNLOAD RESUME</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;