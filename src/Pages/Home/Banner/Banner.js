import React from 'react';
import bg from '../../../images/bg-1.png'


const Banner = () => {
    return (
        <div className="banner-bg py-20">
            <div className="container mx-auto grid grid-cols-12 items-center py-10">
                <div className="col-span-12 md:col-span-8 text-center">

                    <h5 className="text-xl text-gray-300">Hi there ! </h5>
                    <h4 className="text-3xl py-1 text-gray-200">I am Mamun Ar Roshid</h4>
                    <h1 className="text-4xl py-2 text-gray-200">Welcome To My Profile</h1>
                    <p className="text-gray-400 lg:px-52 pt-6 pb-10">I am a full stack web developer.Building website is my
                        passion.Please
                        download my
                        resume for more
                        information about me.</p>
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1C9Ieyrg12bkuEu6y5b49TmarY0w1ct9a/view?usp=sharing"><button
                        className="common-button">DOWNLOAD RESUME</button></a>



                </div>
                <div className="col-span-12 md:col-span-4">
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;