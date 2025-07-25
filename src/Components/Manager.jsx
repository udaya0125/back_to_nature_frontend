import React from 'react'
import manager from '../Images/manager.jpg'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'

const Manager = () => {
  return (
    <section className="bg-gray-50 py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white  overflow-hidden">
          <div className="md:flex">
            {/* Manager Photo Section */}
            <div className="md:w-1/3 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
              <div className="relative mb-6">
                <img 
                  className='rounded-full w-48 h-48 object-cover border-4 border-white shadow-md' 
                  src={manager} 
                  alt="Gopal Krishna Sangroula" 
                />
               
              </div>
              <h1 className='text-2xl font-bold text-gray-800 text-center'>Gopal Krishna Sangroula</h1>
              <h2 className='text-lg text-gray-500 mb-4'>Managing Director</h2>
              <div className="flex space-x-4 mt-2">
                <a target='_blank' href="https://www.facebook.com/backtonatureadventure?mibextid=LQQJ4d" className="text-[#00304a]  hover:text-blue-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/backtonatureadventure/" className="text-[#00304a]  hover:text-blue-600">
               <FaInstagram className="w-6 h-6 text-[#00304a] " />
                </a>
                <a href="https://www.linkedin.com/in/back-to-nature-adventure-3458042a3/?originalSubdomain=np" className="text-[#00304a] hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Message Section */}
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#00304a]  rounded-full mb-4">
                  Message from MD
                </span>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Back to Nature Adventure</h3>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  <span className="text-2xl">Dear Adventurers,</span>
                </p>
                <p className="mb-4">
                  <span className="text-xl font-semibold">Namaste!</span>
                </p>
                <p className="mb-6">
                  Welcome to Back to Nature Adventure (P.) Ltd! As Managing Director, I warmly greet trekkers and nature lovers from around the world. Join us for unforgettable journeys through Nepal's stunning landscapes, hills, and Himalayas.
                </p>
                <p className="text-gray-500 italic">
                  "Let the mountains speak to your soul and the trails lead you to unforgettable experiences."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="px-6 py-3 bg-[#00304a] cursor-pointer  text-white font-medium rounded-lg shadow-md transition duration-300">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manager