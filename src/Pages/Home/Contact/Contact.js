import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data) {
            alert('Thanks for getting with us.')
        }
        reset();
    };

    return (
        <div className="contact-bg">
            <div className="container mx-auto py-10">
                <h1 className="text-4xl text-center my-8 text-gray-300 ">Connect With Me</h1>
                <div className=" grid grid-cols-12">
                    <div className="col-span-6">
                        <h2 className="text-gray-300 text-2xl w-80 mt-10 leading-8 tracking-wide">Interested in working with me
                            or perhaps just talk?</h2>
                    </div>
                    <div className="flex justify-center col-span-6">
                        <form onSubmit={handleSubmit(onSubmit)} className=" w-full p-10">
                            <input className="w-full mb-5 py-4 pl-3 bg-gray-900 text-gray-300 rounded-md"  {...register("name", { required: true })} placeholder="Enter Your Name" /> <br />
                            <input type="email" className="w-full mb-5 py-4 pl-3 bg-gray-900 text-gray-300 rounded-md"  {...register("email", { required: true })} placeholder="Enter Your Name" /> <br />

                            <textarea className="w-full mb-5 py-4 pl-3 bg-gray-900 text-gray-300 rounded-md" {...register("massege", { required: true })} placeholder="Write massege here..." /> <br />
                            {errors.massege && <span>This field is required</span>}

                            <input className="common-button" type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;