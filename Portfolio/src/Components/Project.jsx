import React from 'react'
import calculator from "../assets/calculator.jpeg"
import password from "../assets/Password.jpeg" 
import batball from "../assets/batball.jpeg"

function Project() {
  return (
    <>
        <div className='bg-black text-white py-20' id='projects'>
          <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-l  from-pink-400 to-yellow-500 text-transparent bg-clip-text'>My Projects</h2>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
              <span className='bg-gray-800 rounded-lg px-6 pb-6 hover: shadow-lg transform transition-transform hover:scale-105 duration-300 m-3'>
                <img src={calculator} alt="" />
                <h2 className='text-center font-bold text-2xl my-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>Simple Calculator</h2>
                  <div className='px-4 my-3'>
                    <h3>Using Skills-</h3>
                    <p>HTML, CSS, JavaScript</p>
                  </div>
                  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-5 py-2 mx-3 mt-3 rounded-full border-black'>
                    <a href="https://github.com/Ujjwal81011/Minor-Project/blob/main/calculator.html" target='_blank'>Git Hub</a>
                  </button>
              </span>
              
              <span className='bg-gray-800 rounded-lg px-6 pb-6 hover: shadow-lg transform transition-transform hover:scale-105 duration-300 m-3'>
                <img src={password} alt="" className='align-middle' />
                <h2 className='text-center font-bold text-2xl my-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>Pass. Generator</h2>
                  <div className='px-4 my-3'>
                    <h3>Using Skills-</h3>
                    <p>HTML, Tailwind CSS, JavaScript, React.js</p>
                  </div>
                  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-5 py-2 mx-3 mt-3 rounded-full border-black'>
                    <a href="https://github.com/Ujjwal81011/React.js/tree/main/05Password" target='_blank'>Git Hub</a>
                  </button>
              </span>

              <span className='bg-gray-800 rounded-lg px-6 pb-6 hover: shadow-lg transform transition-transform hover:scale-105 duration-300 m-3'>
                <img src={batball} alt="" />
                <h2 className='text-center font-bold text-2xl my-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>Batball Game</h2>
                  <div className='px-4 my-3'>
                    <h3>Using Skills-</h3>
                    <p>HTML, CSS, JavaScript</p>
                  </div>
                  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-5 py-2 mx-3 mt-3 rounded-full border-black'>
                    <a href="https://github.com/Ujjwal81011/Minor-Project/blob/main/Batball.html" target='_blank'>Git Hub</a>
                  </button>
              </span>
            </div>
          </div>
        </div>
    </>
  )
}

export default Project