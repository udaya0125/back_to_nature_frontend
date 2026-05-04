import React, { useState, useEffect } from 'react';
import logo from '../Images/logo.png';
import data from '../Data/Data.json'; // Import once
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuContainer = document.querySelector('.mobile-menu-container');
      if (isMenuOpen && menuContainer && !menuContainer.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Extract grouped data
  const trekkings = data.filter((item) => item.category === 'trekking');
  const activities = data.filter((item) => item.category === 'activity');
  const tours = data.filter((item) => item.category === 'tour');

  const groupBySubCategory = (items, fallback) =>
    Object.entries(
      items.reduce((acc, item) => {
        const key = item.sub_category || fallback;
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
      }, {})
    );

  return (
    <>
      {/* Desktop & Base Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          hasScrolled ? 'backdrop-blur-sm bg-[#00304a]/80 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveDropdown(null);
                  window.scrollTo(0, 0);
                }}
                className="block"
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-12 w-auto rounded-4xl p-2 bg-white/90"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <ul className="flex space-x-8 font-semibold text-lg">
                <li>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-blue-300 transition text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-blue-300 transition text-white"
                  >
                    About Us
                  </Link>
                </li>

                {/* Trekkings Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('trekkings')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center hover:text-blue-300 text-white transition"
                    aria-expanded={activeDropdown === 'trekkings'}
                  >
                    <Link to="/trekking" onClick={() => window.scrollTo(0, 0)} className="block">
                      Trekkings
                    </Link>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === 'trekkings' && (
                    <div className="absolute left-0  w-64 bg-white rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {groupBySubCategory(trekkings, 'Annapurna Region').map(([region, treks]) => (
                          <div key={region}>
                            <div className="px-4 py-2 text-gray-800 font-medium border-b">
                              {region}
                            </div>
                            {treks.map((trek) => (
                              <Link
                                key={trek.id}
                                to={`/trekkings/${trek.slug}`}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                  window.scrollTo(0, 0);
                                }}
                              >
                                {trek.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {/* Activities Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('activities')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center hover:text-blue-300 text-white transition"
                    aria-expanded={activeDropdown === 'activities'}
                  >
                    <Link to="/activity" onClick={() => window.scrollTo(0, 0)} className="block">
                      Activities
                    </Link>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === 'activities' && (
                    <div className="absolute left-0  w-64 bg-white rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {groupBySubCategory(activities, 'Adventure Activities').map(
                          ([type, list]) => (
                            <div key={type}>
                              <div className="px-4 py-2 text-gray-800 font-medium border-b">
                                {type}
                              </div>
                              {list.map((activity) => (
                                <Link
                                  key={activity.id}
                                  to={`/activities/${activity.slug}`}
                                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                    window.scrollTo(0, 0);
                                  }}
                                >
                                  {activity.title}
                                </Link>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </li>

                {/* Tours Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('tours')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center hover:text-blue-300 text-white transition"
                    aria-expanded={activeDropdown === 'tours'}
                  >
                    <Link to="/tours" onClick={() => window.scrollTo(0, 0)} className="block">
                      Tours
                    </Link>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === 'tours' && (
                    <div className="absolute left-0  w-64 bg-white rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {groupBySubCategory(tours, 'Tour Packages').map(([type, list]) => (
                          <div key={type}>
                            <div className="px-4 py-2 text-gray-800 font-medium border-b">
                              {type}
                            </div>
                            {list.map((tour) => (
                              <Link
                                key={tour.id}
                                to={`/tours/${tour.slug}`}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                  window.scrollTo(0, 0);
                                }}
                              >
                                {tour.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-blue-300 transition text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu */}
      <div
        className={`mobile-menu-container md:hidden fixed inset-0 z-[999] transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setIsMenuOpen(false);
            setActiveDropdown(null);
          }}
        ></div>
        <div className="relative bg-[#003049] h-full w-4/5 max-w-xs ml-auto shadow-xl overflow-y-auto">
          <div className="p-4 flex justify-between items-center border-b border-white/10">
            <Link
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveDropdown(null);
                window.scrollTo(0, 0);
              }}
              className="block"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="h-10 w-auto rounded-xl p-1 bg-white/90"
              />
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }}
              className="text-white hover:text-blue-300 p-2"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="p-2 space-y-1 font-medium text-sm">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveDropdown(null);
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveDropdown(null);
                  window.scrollTo(0, 0);
                }}
              >
                About Us
              </Link>
            </li>

            {/* Mobile Trekkings Dropdown */}
            <li>
              <button
                type="button"
                className="w-full text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition flex justify-between items-center"
                onClick={() => toggleDropdown('mobile-trekkings')}
              >
                <span>Trekkings</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    activeDropdown === 'mobile-trekkings' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === 'mobile-trekkings' && (
                <div className="pl-4 pb-2 space-y-1 border-l-2 border-blue-500">
                  {groupBySubCategory(trekkings, 'Annapurna Region').map(([region, treks]) => (
                    <div key={region}>
                      <div className="px-2 py-1 text-white/80 text-xs font-medium border-b border-white/10">
                        {region}
                      </div>
                      {treks.map((trek) => (
                        <Link
                          key={trek.id}
                          to={`/trekkings/${trek.slug}`}
                          className="block px-4 py-1.5 text-white/70 text-sm hover:bg-white/10 rounded"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {trek.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Mobile Activities Dropdown */}
            <li>
              <button
                type="button"
                className="w-full text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition flex justify-between items-center"
                onClick={() => toggleDropdown('mobile-activities')}
              >
                <span>Activities</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    activeDropdown === 'mobile-activities' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === 'mobile-activities' && (
                <div className="pl-4 pb-2 space-y-1 border-l-2 border-blue-500">
                  {groupBySubCategory(activities, 'Adventure Activities').map(([type, list]) => (
                    <div key={type}>
                      <div className="px-2 py-1 text-white/80 text-xs font-medium border-b border-white/10">
                        {type}
                      </div>
                      {list.map((activity) => (
                        <Link
                          key={activity.id}
                          to={`/activities/${activity.slug}`}
                          className="block px-4 py-1.5 text-white/70 text-sm hover:bg-white/10 rounded"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {activity.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Mobile Tours Dropdown */}
            <li>
              <button
                type="button"
                className="w-full text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition flex justify-between items-center"
                onClick={() => toggleDropdown('mobile-tours')}
              >
                <span>Tours</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    activeDropdown === 'mobile-tours' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === 'mobile-tours' && (
                <div className="pl-4 pb-2 space-y-1 border-l-2 border-blue-500">
                  {groupBySubCategory(tours, 'Tour Packages').map(([type, list]) => (
                    <div key={type}>
                      <div className="px-2 py-1 text-white/80 text-xs font-medium border-b border-white/10">
                        {type}
                      </div>
                      {list.map((tour) => (
                        <Link
                          key={tour.id}
                          to={`/tours/${tour.slug}`}
                          className="block px-4 py-1.5 text-white/70 text-sm hover:bg-white/10 rounded"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {tour.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveDropdown(null);
                  window.scrollTo(0, 0);
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;