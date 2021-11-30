import React from 'react';
import p1 from '../../../images/p-1.png';
import p2 from '../../../images/p-2.png';
import p3 from '../../../images/p-3.png';
import project from '../../../fakeData/project.json'

const Project = () => {
    return (
        <div className="porject-bg py-20">
            <h1 className="text-4xl text-gray-300 text-center pb-10">My Projects</h1>
            <div className="grid grid-cols-12 gap-4">
                {
                    project.map(p =>
                        <div key={p.id} className="col-span-4 p-5 relative" id="demo-details-div">
                            {console.log(p.img)}
                            <img src={p.img} alt="" />
                            <div id="demo-details" className="flex justify-center text-gray-700 gap-5">
                                <button className="py-4 px-8 rounded-xl btn">demo</button>
                                <button className="py-4 px-8 rounded-xl btn">details</button>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Project;