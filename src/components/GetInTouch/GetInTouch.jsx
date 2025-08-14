import React from "react";
import { useForm } from "react-hook-form";
import Container from "../Container/Container";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <div className="bg-gray-950 border mb-10 border-gray-700 p-10 py-20 rounded-xl  flex items-center flex-col md:flex-row gap-10">
        {/* Left Side Text */}
        <div className="flex-1">
          <p className="primary-color font-semibold uppercase">Get in Touch</p>
          <h2 className="text-5xl font-rajdhani font-bold mt-2 leading-tight">
            Elevate your brand <br /> with Me
          </h2>
          <p className="mt-4 text-gray-400">
            Let's collaborate to create impactful designs and strategies that elevate your brand, connect with audiences, and drive lasting growth.
          </p>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-4">
          {/* Name & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full py-7 bg-transparent"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full py-7 bg-transparent"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Email & Subject */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full py-7 bg-transparent"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full py-7 bg-transparent"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full bg-transparent"
              rows={4}
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn primary-bg border-none text-white rounded-full w-full py-6"
          >
            Appointment Now <IoArrowForwardSharp size={20} className='mt-1' />
          </button>
        </form>
      </div>
    </Container>
  );
}
