import React from "react";
import image from "../assets/ujjwal.jpg";

function About() {
  return (
    <div className="bg-black text-white py-16" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={image}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 hover:scale-105 transform transition-transform duration-400"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate frontend developer with a focus on modern and
              responsive UI. with a strong foundation in frontend technologies,
              proficient in JavaScript and React.js.
            </p>
            <div className="space-y-4">
              <div className="felx items-center">
                <label htmlFor="HTMLandCSS" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full max-h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="felx items-center">
                <label htmlFor="HTMLandCSS" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full max-h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="felx items-center">
                <label htmlFor="HTMLandCSS" className="w-2/12">
                  React.js
                </label>
                <div className="grow bg-gray-800 rounded-full max-h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
              <div className="felx items-center">
                <label htmlFor="HTMLandCSS" className="w-2/12">
                  Tailwind CSS
                </label>
                <div className="grow bg-gray-800 rounded-full max-h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">
                  1+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">
                  5+
                </h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;