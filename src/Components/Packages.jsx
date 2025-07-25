import React from 'react';
import chitwan from '../Images/chitwan.jpg';
import bardia1 from '../Images/bardia1.jpg';
import bardia2 from '../Images/bardia2.png';
import pokhara from '../Images/pokhara.jpg';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Chitwan National Park',
    duration: '4 Days / 3 Nights',
    image: chitwan,
    link: '/tours/chitwan-national-park',
  },
  {
    name: 'Chitwan National Park',
    duration: '3 Days / 2 Nights',
    image: chitwan,
    link: '/tours/chitwan-national-park',
  },
  {
    name: 'Bardia National Park',
    duration: '3 Days / 2 Nights',
    image: bardia1,
    link: '/tours/bardia-national-park',
  },
  {
    name: 'Bardia National Park',
    duration: '4 Days / 3 Nights',
    image: bardia2,
    link: '/tours/bardia-national-park',
  },
  {
    name: 'Pokhara Tour Packages',
    duration: '6 Days / 5 Nights',
    image: pokhara,
    link: '/tours/pokhara-tour-package',
  },
];

const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-black">
        Popular Travel Packages
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Big Card - Full Height on Desktop */}
        <Link
          to={packages[0].link}
          onClick={() => window.scrollTo(0, 0)}
          className="relative group overflow-hidden h-56 sm:h-full block"
        >
          <img
            src={packages[0].image}
            alt={packages[0].name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4  sm:p-6">
            <div className="transition-all duration-300 transform group-hover:-translate-y-6 px-6 py-2 border border-white w-fit  ">
              <h3 className="text-base sm:text-2xl font-semibold text-white">
                {packages[0].name}
              </h3>
              <p className="text-gray-200 text-xs sm:text-base">
                {packages[0].duration}
              </p>
            </div>
            {/* Button slides up from bottom (visible only on hover) */}
            <div className="hidden lg:block opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2">
              <span className="bg-[#ca8a04] text-white py-2 px-4 sm:py-3 sm:px-6 w-fit inline-block cursor-pointer">
                View Details
              </span>
            </div>
          </div>
        </Link>

        {/* Smaller Cards - Stack Vertically on Mobile */}
        <div className="grid grid-cols-1 gap-6">
          {packages.slice(1).map((pkg, index) => (
            <Link
              key={index}
              to={pkg.link}
              onClick={() => window.scrollTo(0, 0)}
              className="relative group overflow-hidden h-56 sm:h-auto block"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute  inset-0 bg-gradient-to-t from-black/70 to-transparent p-3 border border-yellow-300 flex flex-col justify-end">
                <div className="transition-all duration-300 transform group-hover:-translate-y-6 px-6 py-2 border border-white w-fit  ">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    {pkg.duration}
                  </p>
                </div>
                {/* Button slides up from bottom (visible only on hover) */}
                <div className="hidden lg:block opacity-0 lg:translate-y-6 group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 mt-2">
                  <span className="bg-[#ca8a04] text-white py-1 px-3 sm:py-2 sm:px-4 w-fit inline-block cursor-pointer">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;