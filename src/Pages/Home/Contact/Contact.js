import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { IoCallOutline, IoHomeOutline, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zxk4d6s', 'template_ymditp7', form.current, 'user_1pxGepEMSAeVDd2NsmXNA')
            .then((result) => {
                if (result.text) {
                    alert('Your message sent successfully')
                };
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="contact-bg">

            <div className="container mx-auto py-10">
                <h1 className="text-4xl text-center mt-8 mb-4 text-gray-300 ">Contact Me</h1>
                <p className="text-gray-400 text-center mb-4">Reach me on social media or filling out the contact form</p>
                <div className=" grid grid-cols-12">
                    {/* ===========================
                            Contact Information
                    ============================ */}
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex items-center justify-center mt-14">
                            <div className="text-white">
                                <div className="flex items-center gap-2 mb-4">
                                    <div>
                                        <IoHomeOutline className="text-white text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl text-gray-300">Address :</h4>
                                        <h5 className="text-gray-400">Mymensingh, Bangladesh</h5>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div>
                                        <IoCallOutline className="text-white text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl text-gray-300"> Phone :</h4>
                                        <h5 className="text-gray-400">+8801780360597</h5>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div>
                                        <IoMailOutline className="text-white text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl text-gray-300">Email :</h4>
                                        <h5 className="text-gray-400">mamunarr6@gmail.com</h5>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-5 mt-10">
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/rmb.mamun.1/">
                                        <IoLogoFacebook className="text-blue-600 text-3xl" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mamun-ar-roshid/">
                                        <IoLogoLinkedin className="text-blue-500 text-3xl" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mamunarr6/">
                                        <IoLogoInstagram className="text-pink-600  text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===========================
                            Contact Form
                    ============================ */}
                    <div className="flex justify-center col-span-12 md:col-span-6">
                        <form ref={form} onSubmit={sendEmail} className=" w-full p-10">
                            <input type="text" name="name" className="w-full mb-5 py-4 pl-3 bg-gray-900 text-gray-300 rounded-md" placeholder="Enter Your Name" /> <br />

                            <input type="email" name="email" className="w-full mb-5 py-4 pl-3 bg-gray-900 text-gray-300 rounded-md" placeholder="Enter Your Email" /> <br />

                            <input type="text" name="subject" className="w-full mb-5 py-4 pl-3 bg-gray-900 text-gray-300 rounded-md" placeholder="Subject" /> <br />

                            <textarea name="message" className="w-full mb-5 py-4 pl-3 bg-gray-900 text-gray-300 rounded-md" placeholder="Write massege here..." /> <br />

                            <input type="submit" value="Send Message" className="common-button" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;