import React from 'react';
import mamun from '../../../images/mamun1.png'

const Banner = () => {
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto grid grid-cols-12 items-center py-10">
                <div className="col-span-8 text-center">

                    <h5 class="text-xl">Hi there ! </h5>
                    <h4 class="text-3xl py-1">I am Mamun Ar Roshid</h4>
                    <h1 class="text-4xl py-2">Welcome To My Profile</h1>
                    <p class="text-gray-700 py-2 lg:px-52">I am a full web stack developer.Building website is my
                        passion.Please
                        download my
                        resume for more
                        information about me.</p>
                    <button
                        class="border border-gray-700 rounded-3xl px-5 py-2 hover:border-purple-500 hover:text-purple-500">DOWNLOAD</button>

                </div>
                <div className="col-span-4 border-r-8 border-b-8 border-double border-gray-500 flex justify-end">
                    <img src={mamun} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;