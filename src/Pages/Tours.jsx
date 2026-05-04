
// import zone from '../Images/zone.png';
// import hourglass from '../Images/hourglass.png';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import tourData from '../Data/Data.json';
// import bardia1 from '../Images/bardia1.jpg';
// import bardia2 from '../Images/bardia2.png';
// import chitwan from '../Images/chitwan.jpg';
// import pokhara from '../Images/pokhara.jpg';
// import bg5 from '../Images/bg5.jpg';
// import chitwan1 from '../Images/chitwan.jpeg';
// const Tours = () => {
//   const [activeDay, setActiveDay] = useState(null);
//   const { slug } = useParams();
//    const tour = tourData.find(item => item.slug === slug);
  
//     if (!tour) {
//       return <div className="text-center py-20 text-xl">tour not found</div>;
//     }
  
//     const toggleDay = (day) => {
//       setActiveDay(activeDay === day ? null : day);
//     };
//     const getImage = (filename) => {
//         return imageMap[filename] || north; // fallback to north.jpg if not found
//       };
//       const imageMap = {
//        'chitwan.jpeg': chitwan1,
//         'bardia1.jpg': bardia1,
//         'bardia2.png': bardia2,
//         'chitwan.jpg': chitwan,
//         'pokhara.jpg': pokhara,
//         // Add other images as needed
//       }
//      return (
//       <>
//        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg5})` }}>
               

//                <img
//                  src={getImage(tour.images[0])}
//                // Use the first image from the tour data
//                 alt={tour.title}
//                 className="w-full h-[50vh] md:h-[80vh] object-cover"
//               />
//        <div className="absolute inset-0 bg-gray-900/60 h-[50vh] md:h-[80vh] "></div>
//               <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
//                   <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
//                     {tour.title}
//                   </h1>
//                   <div className="flex flex-col sm:flex-row md:justify-center items-start sm:items-center gap-4 md:gap-12">
//                     <div className="flex items-center gap-2 md:gap-4">
//                       <img src={hourglass} alt="Duration" className="w-8 h-8 md:w-12 md:h-12" />
//                       <div>
//                         <h2 className="text-sm md:text-lg font-medium">Duration</h2>
//                         <p className="text-gray-500 text-sm md:text-base">
//                           {tour.itinerary.length} Days
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2 md:gap-4">
//                       <img src={zone} alt="Zone" className="w-8 h-8 md:w-12 md:h-12" />
//                       <div>
//                         <h2 className="text-sm md:text-lg font-medium">Zone</h2>
//                         <p className="text-gray-500 text-sm md:text-base">{tour.sub_category}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
//                   {/* Left Column: Info & Itinerary */}
//                   <div className="lg:col-span-2 space-y-6 md:space-y-8">
//                     {/* Description */}
//                     <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
//                       {tour.description}
//                     </p>
      
//                     {/* Itinerary Accordion */}
//                     <div className="space-y-2">
//                       {tour.itinerary.map((item) => (
//                         <div
//                           key={item.day}
//                           className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//                         >
//                           <button
//                             className="w-full flex justify-between items-center p-3 sm:p-4 md:p-6 text-left focus:outline-none"
//                             onClick={() => toggleDay(item.day)}
//                           >
//                             <div className="flex flex-col sm:flex-row sm:items-center">
//                               <span className="text-blue-800 font-semibold text-base md:text-lg mr-0 sm:mr-4 mb-1 sm:mb-0">
//                                 {item.day}
//                               </span>
//                               <span className="text-gray-700 text-sm sm:text-base">{item.title}</span>
//                             </div>
//                             <svg
//                               className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${
//                                 activeDay === item.day ? 'rotate-180' : ''
//                               }`}
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 9l-7 7-7-7"
//                               />
//                             </svg>
//                           </button>
      
//                           {activeDay === item.day && (
//                             <div className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 pt-1 md:pt-2 bg-gray-50">
//                               <p className="text-gray-600 text-sm md:text-base">
//                                 {item.description}
//                               </p>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
      
//                     {/* Gallery */}
//                     <div className="mt-6 md:mt-8">
//                       <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">Gallery</h2>
//                       <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Each image tells a unique story</p>
//                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
//                         {tour.images.map((image, index) => (
//                           <img
//                             key={index}
//                             src={getImage(image)}
//                            alt={`Gallery ${index + 1}`}
//                             className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
      
//                   {/* Right Column: Sticky Include/Exclude Section */}
//                   <div className="lg:col-span-1 mt-8 md:mt-12">
//                     <div className="">
//                       <div className="border-2 border-gray-700 p-4 sm:p-6 bg-white shadow-md">
//                         <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Include / Exclude</h2>
//                         <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
//                           To help you plan your trip, we have put together a list of what's included and what's not included in your tour package.
//                         </p>
//                         <div className="mb-4 md:mb-6">
//                           <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Included</h3>
//                           <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
//                             {tour.includes.map((item, index) => (
//                               <li key={`included-${index}`}>{item}</li>
//                             ))}
//                           </ul>
//                         </div>
      
//                         <div className="mb-4 md:mb-6">
//                           <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Excluded</h3>
//                           <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
//                             {tour.excludes.map((item, index) => (
//                               <li key={`excluded-${index}`}>{item}</li>
//                             ))}
//                           </ul>
//                         </div>
      
//                         <button className="w-full cursor-pointer border border-gray-700 py-2 px-4 bg-[#00304a] text-white font-medium rounded hover:bg-[#004060] transition text-sm md:text-base">
//                           Book Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//       </>
//       );
// };

// export default Tours;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import motercycle1 from '../Images/motercycle1.jpg';
import motercycle2 from '../Images/motercycle2.jpg';
import zone from '../Images/zone.png';
import hourglass from '../Images/hourglass.png';
import tourData from '../Data/Data.json';
import bardia1 from '../Images/bardia1.jpg';
import bardia2 from '../Images/bardia2.png';
import chitwan2 from '../Images/chitwan2.png';
import pokhara from '../Images/pokhara.jpg';
import bg5 from '../Images/bg5.jpg';
import chitwan1 from '../Images/chitwan.jpeg';
import { X, Calendar, Users, User, DollarSignIcon } from 'lucide-react';

const BookNowPopup = ({ 
  packageName = "Tour Package", 
  isOpen, 
  onClose 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    people: ''
  });

  // WhatsApp number (include country code without + or spaces)
  const WHATSAPP_NUMBER = '9840097901';

  const handleSubmit = () => {
    if (!formData.name || !formData.date || !formData.people) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create a more compatible WhatsApp message
    const message = `New Tour Booking Request\n\nPackage: ${packageName}\nName: ${formData.name}\nDate: ${formData.date}\nNumber of People: ${formData.people}\n\nPlease confirm availability.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create URLs for both web and app
    const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    const appUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Try to detect if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, use api.whatsapp.com which works better with the app
      window.open(appUrl, '_blank');
    } else {
      // For desktop, use web.whatsapp.com but provide fallback
      const whatsappWindow = window.open(webUrl, '_blank');
      
      // Fallback: if the web version doesn't work, offer the app version
      setTimeout(() => {
        if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
          // If popup was blocked or closed, offer alternative
          if (confirm('WhatsApp Web not opened. Would you like to try opening in WhatsApp app instead?')) {
            window.open(appUrl, '_blank');
          }
        }
      }, 1000);
    }
    
    // Reset form and close popup
    setFormData({ name: '', date: '', people: '' });
    onClose();
  };


  


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Close popup when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close popup on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
          aria-label="Close booking popup"
        >
          <X size={20} />
        </button>

        {/* Popup Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Book Your Tour</h3>
          <p className="text-[#00304a] font-semibold mb-6">{packageName}</p>

          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Date Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar size={16} className="inline mr-2" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
                required
              />
            </div>

            {/* Number of People Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users size={16} className="inline mr-2" />
                Number of People
              </label>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={handleChange}
                min="1"
                max="50"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
                placeholder="Enter number of people"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 mt-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send to WhatsApp
            </button>

            {/* Additional Info */}
            <p className="text-xs text-gray-500 text-center mt-4">
              You'll be redirected to WhatsApp to complete your booking
            </p>
            
            {/* WhatsApp Help Text */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> If the message doesn't appear when switching to the WhatsApp app, 
                you may need to manually copy and paste the booking details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tours = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const { slug } = useParams();
  const tour = tourData.find(item => item.slug === slug);

  console.log(slug)
  
  if (!tour) {
    return <div className="text-center py-20 text-xl">Tour not found</div>;
  }

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const getImage = (filename) => {
    return imageMap[filename] || bg5; // fallback to bg5 if not found
  };

  const imageMap = {
    'chitwan.jpeg': chitwan1,
    'bardia1.jpg': bardia1,
    'bardia2.png': bardia2,
    'chitwan2.png': chitwan2,
    'pokhara.jpg': pokhara,
    'motercycle1.jpg': motercycle1,
    'motercycle2.jpg': motercycle2,
    // Add other images as needed
  };

  const openBookNowPopup = () => {
    setIsBookNowOpen(true);
  };

  const closeBookNowPopup = () => {
    setIsBookNowOpen(false);
  };

  return (
    <>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg5})` }}>
        <img
          src={getImage(tour.images[0])}
          alt={tour.title}
          className="w-full h-[50vh] md:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 h-[50vh] md:h-[80vh] "></div>
        
        <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
              {tour.title}
            </h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 md:justify-center items-start sm:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 md:gap-4">
                <img src={hourglass} alt="Duration" className="w-8 h-8 md:w-12 md:h-12" />
                <div>
                  <h2 className="text-sm md:text-lg font-medium">Duration</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {tour.itinerary.length} Days
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <img src={zone} alt="Zone" className="w-8 h-8 md:w-12 md:h-12" />
                <div>
                  <h2 className="text-sm md:text-lg font-medium">Zone</h2>
                  <p className="text-gray-500 text-sm md:text-base">{tour.sub_category}</p>
                </div>
              </div>
              {slug === 'lower-mustang-motorcycle-tour-package' && (
            <div className='md:col-span-2 flex gap-4'>
              <DollarSignIcon className="w-8 h-8 md:w-16 md:h-16" />
              <div>
                  <h2 className="text-sm md:text-lg font-medium">Price</h2>
                  <p className="text-gray-500 text-sm md:text-base">{tour.price}</p>
              </div>
                </div>
          )}
            </div>
             
          </div>
         

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
            {/* Left Column: Info & Itinerary */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Description */}
              <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
                {tour.description}
              </p>

              {/* Itinerary Accordion */}
              <div className="space-y-2">
                {tour.itinerary.map((item) => (
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
                  {tour.images.map((image, index) => (
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
                      {tour.includes.map((item, index) => (
                        <li key={`included-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Excluded</h3>
                    <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
                      {tour.excludes.map((item, index) => (
                        <li key={`excluded-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={openBookNowPopup}
                    className="w-full cursor-pointer border border-gray-700 py-2 px-4 bg-[#00304a] text-white font-medium rounded hover:bg-[#004060] transition text-sm md:text-base"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Popup */}
      <BookNowPopup
        packageName={tour.title}
        isOpen={isBookNowOpen}
        onClose={closeBookNowPopup}
      />
    </>
  );
};

export default Tours;