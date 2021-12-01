import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Blog = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="banner-bg">
                <div className="container mx-auto flex justify-center items-center w-screen h-screen">
                    <h1 className="text-gray-200 text-center text-5xl">Blog Is Coming Soon</h1>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;