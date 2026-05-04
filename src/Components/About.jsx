import React from 'react';
import bg2 from '../Images/mountainbg.png';
import north from '../Images/north.jpg';
import { Link } from 'react-router-dom';
import everest from '../Images/everest.jpg';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen  bg-cover bg-center " style={{ backgroundImage: `url(${bg2})` }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
       
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1.5 }
          }}
        />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 container px-4 sm:px-6 py-12  sm:py-24 max-w-7xl mx-auto"
        
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2  ">
          
          {/* Text content */}
          <div 
            className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 text-center lg:text-left"

          >
            <div
              className="inline-flex items-center gap-2 mx-auto lg:mx-0 px-4   text-sm font-semibold w-fit uppercase"
             
            >
              
              Extreme Tour
            </div>
            
            <h2 
              className='text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-800 leading-[50px]'
             
            >
              Discover Your Perfect
                Travel Destination
              
            </h2>
              
            <div
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              
            >
              We create unforgettable experiences for you and your family, with personalized itineraries and exclusive access to the world's most breathtaking locations.
            </div>
            
            <div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
             
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <img 
                      key={item}
                      src={`https://randomuser.me/api/portraits/women/${item + 20}.jpg`}
                      alt="Happy customer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-white shadow-lg"
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  +10K travelers
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-amber-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + star * 0.1, type: "spring" }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">4.9/5 rating</p>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
              variants={itemVariants}
            >
              <Link to="/trekking"
              onClick={() => window.scrollTo(0, 0)}
                className="lg:px-8 cursor-pointer lg:py-4 px-4 py-2 bg-[#ca8a04] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                
                Start Your Journey
                
              </Link>
              <Link
              to='/activity'
              onClick={() => window.scrollTo(0, 0)}
                className="lg:px-8 lg:py-4 px-4 py-2 cursor-pointer border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#374151"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/activity"
                 onClick={() => window.scrollTo(0, 0)}>
                View Destinations
                </Link>
              </Link>
            </div>
          </div>

          {/* Image content */}
          <div 
            className="w-full lg:w-1/2 flex justify-center items-center"
          
          >
            <div className="relative">
              {/* Main image container */}
              <div className="flex justify-center items-center gap-6">
                
                {/* First image */}
                <div 
                  className="relative overflow-hidden group"
                   style={{ marginTop: "2rem" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={everest}
                    alt="Mountain landscape" 
                    className="w-[30vh] h-[40vh]  lg:w-[40vh] lg:h-[65vh] object-cover rounded-t-full rounded-b-full border-4 border-white"
                  />
                  <div
                    className="absolute bottom-4 left-4 right-4 text-white text-center z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                 
                  </div>
                </div>

                {/* Second image */}
                <div 
                  className="relative overflow-hidden group"
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ marginTop: "2rem" }}
                >
                  <img 
                    src={north}
                    alt="Tropical beach" 
                    className="w-[30vh] h-[40vh] lg:w-[40vh] lg:h-[65vh] object-cover rounded-t-full rounded-b-full border-4 border-white "
                  />
                  <div
                    className="absolute bottom-4 left-4 right-4 text-white text-center z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                   
                  </div>
                </div>
              </div>

              {/* Floating stats badges */}
              {/* <div 
                className="absolute -top-6 -left-6 bg-white px-4 py-3 rounded-2xl shadow-lg border"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
              
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-semibold text-gray-700">200+ Destinations</p>
                </div>
              </div>

              <div 
                className="absolute -bottom-6 -right-6 bg-white px-4 py-3 rounded-2xl shadow-lg border"
                initial={{ scale: 0, rotate: 45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring" }}
                
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-sm font-semibold text-gray-700">24/7 Support</p>
                </div>
              </div> */}

             
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/50 to-transparent"></div>
    </div>
  );
};

export default About;