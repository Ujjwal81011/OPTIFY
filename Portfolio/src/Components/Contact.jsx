import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faMapMarkedAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <>
      <div className="bg-black text-white py-16" id="contact">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">Contact Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex-1">
                <h1 className="text-2xl bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Let's talk</h1>
                <p>I'm open to talk about Front-end developement.</p>
                <div className="mb-4 mt-4">
                <FontAwesomeIcon icon={faEnvelope} className='inline-block text-green-400 mr-2' />
                <a href="mishraujjwal9936@gmail.com" className='hover:underline'>mishraujjwal9936@gmail.com</a>
                </div>
                <div className="mb-4 mt-4">
                <FontAwesomeIcon icon={faPhone} className='inline-block text-green-400 mr-2' />
                <span>+91 9936960393</span>
                </div>
                <div className="mb-4 mt-4">
                <FontAwesomeIcon icon={faMapMarkedAlt} className='inline-block text-green-400 mr-2' />
                <a href="https://maps.app.goo.gl/k9fLzQvBunXCCgqH7 " target="_blank">Mandhana Kanpur, India</a>
                </div>
            </div>
            <div className="flex-1 w-full">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Your Name: </label>
                  <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="enter your name"/>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email: </label>
                  <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="enter your email"/>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message: </label>
                  <textarea type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="enter your message"/>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
