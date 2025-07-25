// import React, { useState, useEffect } from 'react'
// import hiddenlake from '../Images/hiddenlake.jpg'
// import kori from '../Images/kori.jpg'
// import north from '../Images/north.jpg'
// import poonhill from '../Images/poonhill.jpg'
// import khumai from '../Images/khumai.jpg'
// import everest from '../Images/everest.jpg'
// import { Link } from 'react-router-dom'

// const Destination = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//   const destinations = [
//     { name: "Poon Hill", duration: "3-4 Days", image: poonhill, slug: "ghorepani-poonhills-trek" },
//     { name: "Khumai Dada", duration: "3-4 Days", image: khumai, slug: "khumai-dada" },
//     { name: "Everest Base Camp", duration: "3-4 Days", image: everest, slug: "everest-base-camp" },
//     { name: "Kori Trek", duration: "5-7 Days", image: kori, slug: "kori-trek" },
//     { name: "North Circuit", duration: "10-14 Days", image: north, slug: "north-abc-trek", },
//     { name: "Hidden Lake", duration: "2-3 Days", image: hiddenlake ,slug: "hidden-lake"},
//   ]

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   // Items per slide based on screen size
//   const getItemsPerSlide = () => {
//     if (windowWidth >= 1024) return 4 // lg screens
//     if (windowWidth >= 768) return 3  // md screens
//     return 1 // mobile - show one at a time for better UX
//   }

//   const itemsPerSlide = getItemsPerSlide()
//   const totalSlides = Math.ceil(destinations.length / itemsPerSlide)
//   const maxIndex = destinations.length - itemsPerSlide

//   // Auto-play effect
//   useEffect(() => {
//     if (isAutoPlaying && windowWidth >= 768) {
//       const interval = setInterval(() => {
//         setCurrentIndex(prev => {
//           const nextIndex = prev + itemsPerSlide
//           return nextIndex > maxIndex ? 0 : nextIndex
//         })
//       }, 4000)
//       return () => clearInterval(interval)
//     }
//   }, [isAutoPlaying, itemsPerSlide, maxIndex, windowWidth])

//   const goToSlide = (slideIndex) => {
//     const newIndex = slideIndex * itemsPerSlide
//     setCurrentIndex(Math.min(newIndex, maxIndex))
//   }

//   const getCurrentSlideIndex = () => {
//     return Math.floor(currentIndex / itemsPerSlide)
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-12 sm:py-24 px-4">
//       <h1 className='uppercase text-black text-center text-sm tracking-widest'>Choose your experience</h1>
//       <h2 className='text-center text-3xl md:text-5xl font-semibold mt-6 text-gray-900'>Top Attraction Destinations</h2>
//       <p className='text-gray-400 text-center mt-8 max-w-3xl mx-auto leading-relaxed'>
//         Perfect for those looking to experience the region's archaeological and cultural treasures in a short amount of time.
//       </p>

//       <div className="relative mt-12">
//         <div 
//           className="overflow-hidden"
//           onMouseEnter={() => windowWidth >= 768 && setIsAutoPlaying(false)}
//           onMouseLeave={() => windowWidth >= 768 && setIsAutoPlaying(true)}
//         >
//           {/* Desktop and Tablet Slider */}
//           <div className="hidden md:block">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out gap-6 px-8"
//               style={{ transform: `translateX(-${(currentIndex * (100 / itemsPerSlide))}%)` }}
//             >
              
//               {destinations.map((trek, index) => (
//                 <Link 
//                                 to={`/trekkings/${trek.slug}`}
//                                 onClick={() => window.scrollTo(0, 0)}
//                                 key={index}
//                                 className="relative group overflow-hidden transition-shadow duration-300">
//                 <div key={index} className="relative group cursor-pointer flex-shrink-0" >
//                   <div className="relative rounded-t-full rounded-b-full px-2">
//                     <img 
//                       className='w-full h-[40vh] lg:h-[65vh] object-cover rounded-t-full rounded-b-full transition-transform duration-500 group-hover:scale-105' 
//                       src={trek.image} 
//                       alt={trek.name}
//                     />
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-full rounded-b-full mx-2">
//                       <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                         <h3 className="text-xl font-semibold mt-32 mb-2">{trek.name}</h3>
//                         <div className="w-12 h-px bg-white mx-auto mb-2"></div>
//                         <p className="text-sm opacity-90">{trek.duration}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                               </Link>

//               ))}
//             </div>
//           </div>

//           {/* Mobile Horizontal Scroll */}
//           <div className="md:hidden">
//             <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
//               {destinations.map((destination, index) => (
              
//                 <div key={index} className="relative group cursor-pointer min-w-[280px] max-w-[280px]" style={{ scrollSnapAlign: 'start' }}>
//                   <div className="relative rounded-t-full rounded-b-full">
//                     <img 
//                       className='w-full sm:h-[40vh] h-[50vh] object-cover rounded-t-full rounded-b-full transition-transform duration-500 group-hover:scale-105' 
//                       src={destination.image} 
//                       alt={destination.name}
//                     />
//                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-full rounded-b-full">
//                       <div className="text-center text-white px-2">
//                         <h3 className="text-lg font-semibold mb-2">{destination.name}</h3>
//                         <div className="w-8 h-px bg-white mx-auto mb-2"></div>
//                         <p className="text-xs opacity-90">{destination.duration}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Desktop/Tablet Indicators */}
//         {windowWidth >= 768 && totalSlides > 1 && (
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({ length: totalSlides }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToSlide(i)}
//                 className={`w-6 h-1 transition-all duration-300 cursor-pointer ${
//                   getCurrentSlideIndex() === i
//                     ? 'bg-gray-800 scale-125'
//                     : 'bg-gray-300 hover:bg-gray-700'
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Custom CSS for hiding scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>

//   )
// }

// export default Destination


import React, { useState, useEffect } from 'react'
import hiddenlake from '../Images/hiddenlake.jpg'
import kori from '../Images/kori.jpg'
import north from '../Images/north.jpg'
import poonhill from '../Images/poonhill.jpg'
import khumai from '../Images/khumai.jpg'
import everest from '../Images/everest.jpg'
import { Link } from 'react-router-dom'

const Destination = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const destinations = [
    { name: "Poon Hill", duration: "3-4 Days", image: poonhill, slug: "ghorepani-poonhills-trek" },
    { name: "Khumai Dada", duration: "3-4 Days", image: khumai, slug: "khumai-dada" },
    { name: "Everest Base Camp", duration: "3-4 Days", image: everest, slug: "everest-base-camp" },
    { name: "Kori Trek", duration: "5-7 Days", image: kori, slug: "kori-trek" },
    { name: "North Circuit", duration: "10-14 Days", image: north, slug: "north-abc-trek" },
    { name: "Hidden Lake", duration: "2-3 Days", image: hiddenlake, slug: "hidden-lake" },
  ]

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getItemsPerSlide = () => {
    if (windowWidth >= 1024) return 3
    if (windowWidth >= 768) return 3
    return 1
  }

  const itemsPerSlide = getItemsPerSlide()

  useEffect(() => {
    if (isAutoPlaying && windowWidth >= 768) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + itemsPerSlide
          return nextIndex >= destinations.length ? 0 : nextIndex
        })
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, itemsPerSlide, windowWidth, destinations.length])

  const goToSlide = (slideIndex) => {
    const newIndex = slideIndex * itemsPerSlide
    setCurrentIndex(Math.min(newIndex, destinations.length - itemsPerSlide))
  }

  const getCurrentSlideIndex = () => {
    return Math.floor(currentIndex / itemsPerSlide)
  }

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-24 px-4">
      <h1 className='uppercase text-black text-center text-sm tracking-widest'>Choose your experience</h1>
      <h2 className='text-center text-3xl md:text-5xl font-semibold mt-6 text-gray-900'>Top Attraction Destinations</h2>
      <p className='text-gray-400 text-center mt-8 max-w-3xl mx-auto leading-relaxed'>
        Perfect for those looking to experience the region's archaeological and cultural treasures in a short amount of time.
      </p>

      <div className="relative mt-12">
        <div
          className="overflow-hidden"
          onMouseEnter={() => windowWidth >= 768 && setIsAutoPlaying(false)}
          onMouseLeave={() => windowWidth >= 768 && setIsAutoPlaying(true)}
        >
          {/* Desktop and Tablet Slider */}
          <div className="hidden md:block">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(100 / itemsPerSlide) * destinations.length}%`,
                transform: `translateX(-${(100 / destinations.length) * currentIndex}%)`,
              }}
            >
              {destinations.map((trek, index) => (
                <Link
                  to={`/trekkings/${trek.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  key={index}
                  className="relative group overflow-hidden transition-shadow duration-300  px-4"
                  style={{
                    flex: `0 0 ${100 / destinations.length}%`
                  }}
                >
                  <div className="relative group cursor-pointer">
                    <div className="relative rounded-t-full rounded-b-full px-2">
                      <img
                        className='w-full h-[40vh] lg:h-[70vh] object-cover rounded-t-full rounded-b-full transition-transform duration-500 '
                        src={trek.image}
                        alt={trek.name}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-full rounded-b-full mx-2 scale-95">
                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-semibold mt-32 mb-2">{trek.name}</h3>
                          <div className="w-12 h-px bg-white mx-auto mb-2"></div>
                          <p className="text-sm opacity-90">{trek.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer min-w-[280px] max-w-[280px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative rounded-t-full rounded-b-full">
                    <img
                      className='w-full sm:h-[40vh] h-[50vh] object-cover rounded-t-full rounded-b-full'
                      src={destination.image}
                      alt={destination.name}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-full rounded-b-full">
                      <div className="text-center text-white px-2">
                        <h3 className="text-lg font-semibold mb-2">{destination.name}</h3>
                        <div className="w-8 h-px bg-white mx-auto mb-2"></div>
                        <p className="text-xs opacity-90">{destination.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Indicators */}
        {windowWidth >= 768 && destinations.length > itemsPerSlide && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(destinations.length / itemsPerSlide) }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-6 h-1 transition-all duration-300 cursor-pointer ${
                  getCurrentSlideIndex() === i
                    ? 'bg-gray-800 scale-125'
                    : 'bg-gray-300 hover:bg-gray-700'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Destination
