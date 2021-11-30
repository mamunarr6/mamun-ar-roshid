import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [ok, setOk] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zxk4d6s', 'template_ymditp7', form.current, 'user_1pxGepEMSAeVDd2NsmXNA')
            .then((result) => {
                if (result.text) {
                    setOk(true)
                };
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="contact-bg">
            <div className="container mx-auto py-10">
                <h1 className="text-4xl text-center my-8 text-gray-300 ">Connect With Me</h1>
                <div className=" grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6">
                        <h2 className="text-gray-300 text-2xl mt-10 leading-8 tracking-wide">Reach me on social media or filling out the contact form</h2>
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