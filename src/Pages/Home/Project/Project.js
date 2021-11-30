import React from 'react';
import p1 from '../../../images/p-1.png';
import p2 from '../../../images/p-2.png';
import p3 from '../../../images/p-3.png';

const Project = () => {
    return (
        <div>
            <h1 className="mt-10 mb-5 text-4xl text-gray-800 text-center">My Projects</h1>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 border-4 ">
                    <img className="relative" src={p1} alt="" />
                    <button className="py-2 px-3 border rounded border-gray-400 mr-10">demo</button> <button className="py-2 px-3 border rounded border-gray-400 ml-10">details</button>

                </div>
                <div className="col-span-4 border-4">
                    <img src={p2} alt="" />
                    <button className="py-2 px-3 border rounded border-gray-400 mr-10">demo</button> <button className="py-2 px-3 border rounded border-gray-400 ml-10">details</button>
                </div>
                <div className="col-span-4 border-4">
                    <img src={p3} alt="" />
                    <button className="py-2 px-3 border rounded border-gray-400 mr-10">demo</button> <button className="py-2 px-3 border rounded border-gray-400 ml-10">details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;