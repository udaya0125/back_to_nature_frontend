import bg5 from '../Images/bg2.png';
import zone from '../Images/zone.png';
import hourglass from '../Images/hourglass.png';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import activityData from '../Data/Data.json';
import  balloon from '../Images/balloon.webp';
import paraglading from '../Images/paraglading.jpg';
import rafting from '../Images/rafting.png';
import ultralight from '../Images/ultralight.webp';
import cycling from '../Images/cycling.jpg';
import kayaking from '../Images/kayaking.jpg';
import zipline from '../Images/zipline.jpg';
import jump from '../Images/jump.jpg';
const Activities = () => {
  const [activeDay, setActiveDay] = useState(null);
  const { slug } = useParams();
   const activity = activityData.find(item => item.slug === slug);
  
    if (!activity) {
      return <div className="text-center py-20 text-xl">activity not found</div>;
    }
  
    const toggleDay = (day) => {
      setActiveDay(activeDay === day ? null : day);
    };
    const imageMap = {
      'balloon.webp': balloon,
      'paraglading.jpg': paraglading,
      'rafting.png': rafting,
      'ultralight.webp': ultralight,
      'cycling.jpg': cycling,
      'kayaking.jpg': kayaking,
      'zipline.jpg': zipline,
      'jump.jpg': jump,
      // Add other images as needed
    };
      const getImage = (filename) => {
        return imageMap[filename] || north; // fallback to north.jpg if not found
      };
     return (
      <>
       <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg5})` }}>
              <img
                 src={getImage(activity.images[0])} // Use the first image from the activity data
                alt={activity.title}
                className="w-full h-[50vh] md:h-[80vh] object-cover"
              />
      
              <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
                  <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
                    {activity.title}
                  </h1>
                  <div className="flex flex-col sm:flex-row md:justify-center items-start sm:items-center gap-4 md:gap-12">
                    <div className="flex items-center gap-2 md:gap-4">
                      <img src={hourglass} alt="Duration" className="w-8 h-8 md:w-12 md:h-12" />
                      <div>
                        <h2 className="text-sm md:text-lg font-medium">Duration</h2>
                        <p className="text-gray-500 text-sm md:text-base">
                          {activity.itinerary.length} Days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                      <img src={zone} alt="Zone" className="w-8 h-8 md:w-12 md:h-12" />
                      <div>
                        <h2 className="text-sm md:text-lg font-medium">Zone</h2>
                        <p className="text-gray-500 text-sm md:text-base">{activity.sub_category}</p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
                  {/* Left Column: Info & Itinerary */}
                  <div className="lg:col-span-2 space-y-6 md:space-y-8">
                    {/* Description */}
                    <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
                      {activity.description}
                    </p>
      
                    {/* Itinerary Accordion */}
                    <div className="space-y-2">
                      {activity.itinerary.map((item) => (
                        <div
                          key={item.day}
                          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <button
                            className="w-full flex justify-between items-center p-3 sm:p-4 md:p-6 text-left focus:outline-none"
                            onClick={() => toggleDay(item.day)}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center">
                              <span className="text-blue-800 font-semibold text-base md:text-lg mr-0 sm:mr-4 mb-1 sm:mb-0">
                                {item.day}
                              </span>
                              <span className="text-gray-700 text-sm sm:text-base">{item.title}</span>
                            </div>
                            <svg
                              className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${
                                activeDay === item.day ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
      
                          {activeDay === item.day && (
                            <div className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 pt-1 md:pt-2 bg-gray-50">
                              <p className="text-gray-600 text-sm md:text-base">
                                {item.description}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
      
                    {/* Gallery */}
                    <div className="mt-6 md:mt-8">
                      <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">Gallery</h2>
                      <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Each image tells a unique story</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        {activity.images.map((image, index) => (
                          <img
                            key={index}
                             src={getImage(image)}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
      
                  {/* Right Column: Sticky Include/Exclude Section */}
                  <div className="lg:col-span-1 mt-8 md:mt-12">
                    <div className="">
                      <div className="border-2 border-gray-700 p-4 sm:p-6 bg-white shadow-md">
                        <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Include / Exclude</h2>
                        <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                          To help you plan your trip, we have put together a list of what's included and what's not included in your tour package.
                        </p>
                        <div className="mb-4 md:mb-6">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Included</h3>
                          <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
                            {activity.includes.map((item, index) => (
                              <li key={`included-${index}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
      
                        <div className="mb-4 md:mb-6">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Excluded</h3>
                          <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
                            {activity.excludes.map((item, index) => (
                              <li key={`excluded-${index}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
      
                        <button className="w-full cursor-pointer border border-gray-700 py-2 px-4 bg-[#00304a] text-white font-medium rounded hover:bg-[#004060] transition text-sm md:text-base">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </>
      );
};

export default Activities;