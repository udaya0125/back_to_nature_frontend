import React from 'react';
import { Helmet } from 'react-helmet'; // Import react-helmet
import everest from '../Images/everest2.jpg';
import { Link } from 'react-router-dom';
import slider2 from '../Images/slider2.png';
import about from '../Images/about.jpg';
import north from '../Images/north.jpg';
import bg2 from '../Images/bg2.png';
import chitwan from '../Images/chitwan.jpg';
import bg1 from '../Images/bg1.jpg';
import deal from '../Images/deal.png';
import costumer from '../Images/costumer.png';
import flexible from '../Images/flexible.png';
import resposnibility from '../Images/responsibility.png';
import service from '../Images/service.png';
import transparency from '../Images/transparency.png';
import gril from '../Images/gril.webp';
import Manager from '../Components/Manager';

const About = () => {
  const navItems = [
    'Bardia National Park',
    'Chitwan National Park',
    'Everest Base Camp',
    'North ABC Camp'
  ];

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const services = [
    { icon: service, title: '24/7 Customer Support' },
    { icon: resposnibility, title: 'Responsible Travel' },
    { icon: flexible, title: 'Flexibility' },
    { icon: transparency, title: 'Supervision' },
    { icon: costumer, title: 'Experienced Team' },
    { icon: deal, title: 'Journey Partners' }
  ];

  // JSON-LD for Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org ",
    "@type": "Organization",
    "name": "Back To Nature Adventure",
    "url": "https://www.backtonatureadventure.com ",
    "logo": "https://www.backtonatureadventure.com/logo.png ",
    "description": "We create unforgettable experiences for you and your family, with personalized itineraries and exclusive access to the world's most breathtaking locations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Adventure Street",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "postalCode": "44600",
      "addressCountry": "Nepal"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+977-123456789",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.facebook.com/backtonatureadventure ",
      "https://www.instagram.com/backtonatureadventure "
    ]
  };

  return (
    <>
      {/* SEO with react-helmet */}
      <Helmet>
        <title>About Back To Nature Adventure | Your Trusted Travel Partner</title>
        <meta name="description" content="Learn more about Back To Nature Adventure, a travel company offering personalized itineraries and unforgettable experiences in Nepal and beyond." />
        <meta name="keywords" content="travel, adventure, Nepal, Everest, Chitwan, Bardia, trekking, nature, responsible travel, tour operator" />
        <meta property="og:title" content="About Back To Nature Adventure | Your Trusted Travel Partner" />
        <meta property="og:description" content="Learn more about Back To Nature Adventure, a travel company offering personalized itineraries and unforgettable experiences in Nepal and beyond." />
        <meta property="og:image" content={everest} />
        <meta property="og:url" content="https://www.backtonatureadventure.com/about " />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Back To Nature Adventure | Your Trusted Travel Partner" />
        <meta name="twitter:description" content="Learn more about Back To Nature Adventure, a travel company offering personalized itineraries and unforgettable experiences in Nepal and beyond." />
        <meta name="twitter:image" content={everest} />
        <link rel="canonical" href="https://www.backtonatureadventure.com/about " />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat w-full h-[40vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${everest})` }}
      >
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className='uppercase text-3xl sm:text-4xl md:text-5xl font-semibold text-white'>About Us</h2>
          <p className='text-yellow-400 mt-4 text-sm sm:text-md uppercase'>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className='uppercase text-white'>Home</Link> / About Us
          </p>
        </div>
      </div>

      {/* Decorative Slider Image */}
      <div className="w-full absolute top-[40vh] sm:top-[50vh] md:top-[70vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src={slider2} 
          alt="Background" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* About Content Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg2})` }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1.5 }
            }}
          />
        </div>
        {/* Content */}
        <div className="relative z-10 container px-4 sm:px-6 py-12 sm:py-24 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left Image - Hidden on small screens */}
            <div className=" lg:block lg:w-1/4 flex justify-center lg:justify-end">
              <div className="relative overflow-hidden group" style={{ marginTop: "2rem" }}>
                <img 
                  src={about}
                  alt="Tropical beach" 
                  className="w-[40vh] h-[60vh] object-cover rounded-t-full rounded-b-full border-4 border-white"
                />
              </div>
            </div>
            {/* Middle Content */}
            <div className="w-full lg:w-2/4 flex flex-col gap-4 sm:gap-6 text-center px-4 lg:px-8">
              <div className="inline-flex items-center gap-2 mx-auto px-4 text-sm font-semibold w-fit uppercase">
                About Us
              </div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
                Back To Nature Adventure
              </h2>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We create unforgettable experiences for you and your family, with personalized itineraries and exclusive access to the world's most breathtaking locations.
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Whether you're dreaming of relaxing on pristine beaches, exploring ancient ruins, trekking through lush mountains, or immersing yourself in vibrant cultures, we've got you covered. Our expert team designs personalized travel experiences tailored to your interests, budget, and travel style — because every traveler is unique.
              </div>
            </div>
            {/* Right Image - Hidden on small screens */}
            <div className="hidden lg:block lg:w-1/4  justify-center lg:justify-start">
              <div className="relative overflow-hidden group" style={{ marginTop: "2rem" }}>
                <img 
                  src={north}
                  alt="Mountain landscape" 
                  className="w-[40vh] h-[60vh] object-cover rounded-t-full rounded-b-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Selection Section */}
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white w-full flex items-center justify-center py-12 sm:py-24"
           style={{ 
             backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${chitwan}')` 
           }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center">
            {/* Main Title with top border */}
            <div className="border-t-2 border-white pt-8 mb-8 w-full max-w-4xl text-center">
              <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                Choose the Best Tour
              </h1>
            </div>
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center bg-opacity-30 backdrop-blur-sm rounded-lg overflow-hidden w-full max-w-4xl">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`
                    relative px-4 sm:px-6 py-3 sm:py-4 cursor-pointer transition-all duration-300 
                    hover:bg-[#bfa888] group flex-1 text-center
                    ${index !== navItems.length - 1 ? 'border-r-2 border-white' : ''}
                  `}
                >
                  <h2 className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                    {item}
                  </h2>
                </div>
              ))}
            </div>
            {/* Mobile Vertical Layout */}
            <div className="md:hidden mt-8 w-full max-w-sm">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-white pl-4 hover:bg-[#bfa888] p-3 cursor-pointer transition-all duration-300 bg-black bg-opacity-30 backdrop-blur-sm rounded-r-lg"
                  >
                    <h2 className="text-sm sm:text-base font-medium">{item}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Manager/>

      {/* Services Section */}
      <div className="bg-cover bg-center bg-no-repeat w-full h-auto min-h-[50vh] md:min-h-[70vh] flex items-center justify-center" 
           style={{backgroundImage: `url('${bg1}')`}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
            {/* Content Left Side */}
            <div className="order-2 md:order-1">
              <h2 className='text-[#00304a] text-lg sm:text-xl font-semibold mb-2 sm:mb-4'>Our Services</h2>
              <h2 className='mt-2 text-2xl sm:text-3xl md:text-4xl font-bold'>Join the Adventures with Stories</h2>
              <p className='mt-2 sm:mt-4 text-sm sm:text-base text-gray-500'>
                Reconnect with nature through immersive outdoor experiences, eco-friendly stays, and guided activities like hiking and meditation. Perfect for relaxation and renewal.
              </p>
              {/* Services Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-8 sm:mt-16">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col items-center text-center space-y-2 sm:space-y-4 md:space-y-6">
                    <img src={service.icon} alt={service.title} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    <h2 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>{service.title}</h2>
                  </div>
                ))}
              </div>
            </div>
            {/* Image Right Side */}
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                className='w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover ' 
                src={gril} 
                alt="Adventure" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;