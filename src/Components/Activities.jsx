import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import bg from '../Images/bg.jpg'
import cycling from '../Images/cycling.jpg'
import kayaking from '../Images/kayaking.jpg'
import paraglading from '../Images/paraglading.jpg'
import rafting from '../Images/rafting.png'
import ultralight from '../Images/ultralight.webp'
import zipline from '../Images/zipline.jpg'
import brid from '../Images/bird.jpeg'
import { Link } from 'react-router-dom'

const Activities = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const activities = [
    {
      id: 1,
      name: "Mountain Cycling",
      image: cycling,
      description: "Experience thrilling mountain trails and scenic routes on our guided cycling adventures."
    },
    {
      id: 2,
      name: "Kayaking",
      image: kayaking,
      description: "Paddle through crystal clear waters and explore hidden coves and waterways."
    },
    {
      id: 3,
      name: "Paragliding",
      image: paraglading,
      description: "Soar through the skies and witness breathtaking aerial views of the landscape."
    },
    {
      id: 4,
      name: "White Water Rafting",
      image: rafting,
      description: "Navigate exciting rapids and enjoy the adrenaline rush of white water rafting."
    },
    {
      id: 5,
      name: "Ultralight Flying",
      image: ultralight,
      description: "Experience the freedom of flight with our safe and exciting ultralight aircraft."
    },
    {
      id: 6,
      name: "Zip Line Adventure",
      image: zipline,
      description: "Zip through the treetops and enjoy an exhilarating high-speed adventure."
    },
     {
      id: 7,
      name: "Bird Watching",
      image: brid,
      description: "Immerse yourself in nature with a peaceful bird watching experience. Explore forests, wetlands, and reserves to spot colorful and rare bird species in their natural habitat."
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % activities.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, activities.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="bg-center bg-cover " style={{backgroundImage: `url(${bg})`}}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Content */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex justify-start items-center gap-4 mb-12 lg:mb-24 text-black">
              <MapPin size={20}/>
              <h2 className='uppercase text-sm sm:text-base' style={{fontFamily:"'Cormorant Garamond', serif"}}>Activity Location</h2>
            </div>
            
            <h2 className='text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 lg:mb-12 max-w-xl text-black'>
              Best place to Enjoy
            </h2>
            
            <p className='text-sm sm:text-base text-gray-600 mb-8 lg:mb-12 max-w-lg'>
              If you are looking for a fun, exciting and challenging outdoor adventure activity center, look no further than Mill on the Brue and more tours!
            </p>
            
            <Link to="/activity" onClick={() => window.scrollTo(0, 0)} className='flex justify-center items-center gap-2 text-black px-6  py-2 sm:py-3 border border-gray-400 rounded-full hover:bg-black hover:text-white transition-colors duration-300'>
              <div 
              className='cursor-pointer' >Explore more</div>
              <ArrowRight size={20}/>
            </Link>
          </div>

          {/* Right Column - Image Slider */}
          <div className="col-span-1 lg:col-span-2">
            <div 
              className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] overflow-hidden  shadow-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Images */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {activities.map((activity, index) => (
                  <div key={activity.id} className="min-w-full h-full relative">
                    <img 
                      src={activity.image} 
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
                        {activity.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 max-w-md">
                        {activity.description}
                      </p>
                      
                      <Link to="/activity"
                      onClick={() => window.scrollTo(0, 0)} className="bg-white cursor-pointer text-black px-4 sm:px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors duration-300  sm:text-xs mb-4">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className=" sm:flex hidden absolute cursor-pointer left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={nextSlide}
                className=" sm:flex hidden cursor-pointer absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {activities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 cursor-pointer sm:h-3 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Navigation (Optional - for larger screens) */}
            <div className="hidden lg:flex mt-6 space-x-4 overflow-x-auto pb-2 ">
              {activities.map((activity, index) => (
                <button
                  key={activity.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-20 h-16 overflow-hidden border-2 transition-all duration-300 ${
                    index === currentSlide ? 'border-white shadow-lg' : 'border-transparent opacity-70'
                  }`}
                >
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities