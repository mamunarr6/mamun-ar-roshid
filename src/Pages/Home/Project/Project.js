import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    const [projects, setProjects] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                console.log(data)
            })
    }, [])
    return (
        <div className="project-bg py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl text-gray-300 text-center pb-10">My Projects</h1>
                <div className="grid grid-cols-12 gap-2">
                    {
                        projects?.map(p =>
                            <div key={p.id} className="col-span-12 lg:col-span-4 relative mx-auto mb-5" id="demo-details-div">
                                <img src={p.img} alt="" />
                                <div id="demo-details" className="flex justify-center text-gray-700 gap-5 py-16 md:py-16 lg:20 xl:28 ">
                                    <button className="py-4 px-8 rounded-xl btn"><a target="_blank" rel="noreferrer" href={p.link}>demo</a></button>
                                    <Link to={`/project/${p._id}`} className="py-4 px-8 rounded-xl btn">details</Link>
                                </div>

                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;