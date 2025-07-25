import React from 'react';

import logo from '../Images/logo.png';
import slider2 from '../Images/slider2.png';
import { Link } from 'react-router-dom';
import everest from '../Images/north.jpg';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Background Image */}
      <img 
        src={everest} 
        alt="Hero background" 
        className="object-cover w-full h-full"
      />
       <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

      {/* Overlay Slider Image - Hidden on mobile, visible on larger screens */}
      {/* <div className="absolute top-32 left-4 md:left-32 lg:left-44 xl:left-166 z-10 hidden md:block">
        <img
          src={logo} 
          alt="Slider content" 
          className="w-24 md:w-32 lg:w-38 h-auto object-contain "
        />
      </div> */}

      {/* Main Content - Responsive positioning and typography */}
      <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full max-w-4xl">
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 md:mt-16 font-bold'>
          Discover the
        </h2>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-3 md:mt-6 font-bold leading-50px'>
          Adventure Travel
        </h2>
        <p className='  mt-4 md:mt-8 mb-8 text-sm sm:text-base md:text-lg px-4'>
          Your Best Adventure Deals with nature.
        </p>
       <Link
  to="/trekking"
  onClick={() => window.scrollTo(0, 0)}
  className="group relative inline-flex h-12 cursor-pointer items-center overflow-hidden rounded-md bg-white px-6 py-2 text-black hover:bg-[#889bbf] hover:text-white md:px-8 md:py-3 md:text-base text-sm transition-colors duration-300"
>
  <span className="relative z-10">View Adventures</span>
  <span className="absolute inset-0 overflow-hidden ">
    <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#00304a] opacity-70 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
  </span>
</Link>
      </div>

      {/* Bottom Slider Image - Responsive positioning */}
      <div className="w-full absolute -bottom-6 sm:-bottom-8 md:-bottom-12">
        <img 
          src={slider2} 
          alt="Background" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;