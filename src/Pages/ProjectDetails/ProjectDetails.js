import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';

const ProjectDetails = () => {
    const [project, setProject] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])

    return (
        <div className="project-bg">
            <div className="container mx-auto py-20 grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6">
                    <h1 className="text-gray-200 text-center text-5xl font-semibold mb-5">{project?.name}</h1>
                    <p className="text-gray-400 text-center leading-7 tracking-normal text-base">{project?.description}</p>
                    <div className="flex justify-center mt-5">
                        <button className="py-4 px-8 common-button"><a target="_blank" rel="noreferrer" href={project?.link}>Live Preview</a></button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 mx-auto">
                    <img src={project?.img} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;