import React from 'react'

function Education() {
  return (
    <>
      <div className='bg-black text-white py-20 ' id='education'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text'>My Education</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <h3 className='mt-2 text-xl space-x-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Bachelor of Computer Application</h3>
                <div className='mt-8 mb-8 mx-3'>
                  <p className='text-yellow-100'>
                    Currently i am persuing Bachelor of Computer Applicaton from Maharana Pratap College of Professional Studies, Kanpur.
                  </p>
                  <p className='mt-8'>Batch: 2022 - 2025</p>
                </div>
              </div>
              <div className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <h3 className='mt-2 text-xl space-x-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Intermediate</h3>
                <div className='mt-16 mb-8 mx-3'>
                  <p className='text-yellow-100'>
                    I have done my Intermediate from UP Board Vijay Shankar Inter College, Harpalpur (Hardoi).
                  </p>
                  <p className='mt-12'>Batch: 2021-22</p>
                </div>
              </div>
              <div className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                <h3 className='mt-2 text-xl space-x-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>High School</h3>
                <div className='mt-16 mb-8 mx-3'>
                  <p className='text-yellow-100'>
                  I have done my High School from UP Board Vijay Shankar Inter College, Harpalpur (Hardoi).
                  </p>
                  <p className='mt-12'>Batch: 2019-20</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education