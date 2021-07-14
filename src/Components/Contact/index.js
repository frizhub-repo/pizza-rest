import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import { addContactUs } from "../../api/customers";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";
import Hero from "../Home/Hero";

function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const addContactUsHandler = async (data) => {
    try {
      setLoading(true);
      toast.success("Your query has been submitted successfully!");
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const url =
    "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80";
  return (
    <div>
      <Navbar />
      <Hero textOne="Uncle Sammy" textTwo="Contacts" url={url} />

      <section className="text-gray-700 body-font px-64 py-12  mt-12 mb-12 ">
        <div className="w-full py-2 px-4 bg-yellow-500 text-white">
          <h1 className="text-left ml-4 text-xl font-weight-bold">
            Contact us
          </h1>
        </div>
        <div className=" shadow-sm border-l border-r border-b border-gray-300  py-8 mx-auto flex  ">
          <div className="w-1/2 bg-white flex flex-col px-6 md:ml-auto  md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-left">
              Contact Us
            </h2>
            <p className="text-xs text-left mb-5 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis
            </p>
            <form onSubmit={handleSubmit(addContactUsHandler)}>
              <div className="relative mb-4 text-left">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-indigo-400 font-weight-bold text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  ref={register({
                    required: "Name is required",
                  })}
                  name="name"
                  placeholder="Amanda"
                  className="w-full bg-white  border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 text-left">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-indigo-400 font-weight-bold text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  ref={register({
                    required: "Email is required",
                  })}
                  placeholder="amanda@mail.com"
                  className="w-full bg-white border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 text-left">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-indigo-400 font-weight-bold text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={register({
                    required: "Message is required",
                  })}
                  className="w-full bg-white  border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-green-500 border-2 border-green-500 bg-opacity-50 bg-green-500  py-2 px-6 focus:outline-none rounded text-lg align-self-end">
                {loading && (
                  <CircularProgress
                    color="inherit"
                    size={20}
                    style={{ marginRight: "8px" }}
                  />
                )}
                Submit
              </button>
            </form>
          </div>
          <div className="w-1/2 rounded-lg py-8 sm:mr-10 ">
            <div className="w-full h-72 p-0">
              <iframe
                width="100%"
                height="100%"
                className="w-full h-72 p-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
            </div>

            <div className="bg-white w-full flex flex-wrap py-6">
              <div className="w-full px-6 mt-4 lg:mt-0">
                <p className="text-left font-weight-normal text-gray-500 mb-2">
                  <span className="text-black">Address:</span> Vis mario rossi
                  Milan Italy{" "}
                </p>
                <p className="text-left font-weight-normal text-gray-500 mb-2">
                  <span className="text-black">Email:</span> starters@cafe.com{" "}
                </p>
                <p className="text-left font-weight-normal text-gray-500 mb-2">
                  <span className="text-black">Phone:</span> 3334445566{" "}
                </p>
                <p className="text-left font-weight-normal text-gray-500 mb-2">
                  <span className="text-black">Email:</span> starters@cafe.com{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Contact;
