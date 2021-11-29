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
        <div className="container mx-auto my-10">
            <h1 className="text-4xl text-center my-8">Get In Touch</h1>
            <div className="flex justify-center ">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 w-9/12 p-10">
                    <input className="w-full mb-3 py-2 pl-3"  {...register("name", { required: true })} placeholder="Enter Your Name" /> <br />
                    <input type="email" className="w-full mb-3 py-2 pl-3"  {...register("email", { required: true })} placeholder="Enter Your Name" /> <br />

                    <textarea className="w-full mb-3 py-2 pl-3" {...register("massege", { required: true })} placeholder="Write massege here..." /> <br />
                    {errors.massege && <span>This field is required</span>}

                    <input className="w-full mb-3 py-2" type="submit" />
                </form>
            </div>
        </div>
    );
}
export default Contact;