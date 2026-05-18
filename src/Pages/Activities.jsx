// import React, { useState, useEffect } from 'react';
// import { X, Calendar, Users, User } from 'lucide-react';
// import bg5 from '../Images/bg2.png';
// import zone from '../Images/zone.png';
// import hourglass from '../Images/hourglass.png';
// import { useParams } from 'react-router-dom';
// import activityData from '../Data/Data.json';
// import balloon from '../Images/ballon.webp';
// import paraglading from '../Images/paraglading.jpg';
// import paraglading2 from '../Images/paraglading2.jpg';
// import rafting from '../Images/rafting.png';
// import ultralight from '../Images/ultralight.webp';
// import cycling from '../Images/cycling.jpg';
// import kayaking from '../Images/kayaking.jpg';
// import kayaking1 from '../Images/kayaking1.jpg';
// import kayaking2 from '../Images/kayaking2.jpg';
// import kayaking3 from '../Images/kayaking3.jpg';
// import kayaking4 from '../Images/kayaking4.jpg';
// import zipline from '../Images/zipline.jpg';
// import jump from '../Images/jump.jpg';
// import bird from '../Images/bird.jpeg';
// import north from '../Images/north.jpg'; // Added fallback import
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// const BookNowPopup = ({ 
//   packageName = "Tour Package", 
//   isOpen, 
//   onClose 
// }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     date: '',
//     people: ''
//   });

//   // WhatsApp number (include country code without + or spaces)
//   const WHATSAPP_NUMBER = '9840097901';

//   const handleSubmit = () => {
//     if (!formData.name || !formData.date || !formData.people) {
//       alert('Please fill in all fields');
//       return;
//     }
    
//     // Create a more compatible WhatsApp message
//     const message = `New Tour Booking Request\n\nPackage: ${packageName}\nName: ${formData.name}\nDate: ${formData.date}\nNumber of People: ${formData.people}\n\nPlease confirm availability.`;
    
//     // Encode the message for URL
//     const encodedMessage = encodeURIComponent(message);
    
//     // Create URLs for both web and app
//     const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
//     const appUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
//     // Try to detect if user is on mobile
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
//     if (isMobile) {
//       // For mobile devices, use api.whatsapp.com which works better with the app
//       window.open(appUrl, '_blank');
//     } else {
//       // For desktop, use web.whatsapp.com but provide fallback
//       const whatsappWindow = window.open(webUrl, '_blank');
      
//       // Fallback: if the web version doesn't work, offer the app version
//       setTimeout(() => {
//         if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
//           // If popup was blocked or closed, offer alternative
//           if (confirm('WhatsApp Web not opened. Would you like to try opening in WhatsApp app instead?')) {
//             window.open(appUrl, '_blank');
//           }
//         }
//       }, 1000);
//     }
    
//     // Reset form and close popup
//     setFormData({ name: '', date: '', people: '' });
//     onClose();
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Close popup when clicking outside
//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // Close popup on Escape key
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
//           aria-label="Close booking popup"
//         >
//           <X size={20} />
//         </button>

//         {/* Popup Content */}
//         <div className="p-6">
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">Book Your Tour</h3>
//           <p className="text-[#00304a] font-semibold mb-6">{packageName}</p>

//           <div className="space-y-4">
//             {/* Name Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <User size={16} className="inline mr-2" />
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             {/* Date Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <Calendar size={16} className="inline mr-2" />
//                 Preferred Date
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 min={new Date().toISOString().split('T')[0]}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
//                 required
//               />
//             </div>

//             {/* Number of People Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 <Users size={16} className="inline mr-2" />
//                 Number of People
//               </label>
//               <input
//                 type="number"
//                 name="people"
//                 value={formData.people}
//                 onChange={handleChange}
//                 min="1"
//                 max="50"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
//                 placeholder="Enter number of people"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 mt-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//             >
//               Send to WhatsApp
//             </button>

//             {/* Additional Info */}
//             <p className="text-xs text-gray-500 text-center mt-4">
//               You'll be redirected to WhatsApp to complete your booking
//             </p>
            
//             {/* WhatsApp Help Text */}
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
//               <p className="text-xs text-yellow-800">
//                 <strong>Note:</strong> If the message doesn't appear when switching to the WhatsApp app, 
//                 you may need to manually copy and paste the booking details.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Activities = () => {
//   const [activeDay, setActiveDay] = useState(null);
//   const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false); // Fixed: Added missing state
//   const { slug } = useParams();
//   const activity = activityData.find(item => item.slug === slug);
  
//   if (!activity) {
//     return <div className="text-center py-20 text-xl">Activity not found</div>;
//   }

//   const toggleDay = (day) => {
//     setActiveDay(activeDay === day ? null : day);
//   };

//   useEffect(() => {
//   Fancybox.bind('[data-fancybox="gallery"]', {
//     Toolbar: {
//       display: {
//         left: ['infobar'],
//         middle: [],
//         right: ['slideshow', 'fullscreen', 'download', 'close'],
//       },
//     },
//     Images: {
//       zoom: true,
//     },
//     animated: true,
//     showClass: 'f-fadeIn',
//     hideClass: 'f-fadeOut',
//   });

//   return () => {
//     Fancybox.unbind('[data-fancybox="gallery"]');
//     Fancybox.close();
//   };
// }, [activity]); // re-bind when activity changes

//   const imageMap = {
//     'ballon.webp': balloon,
//     'paraglading.jpg': paraglading,
//     'paraglading2.jpg': paraglading2,
//     'rafting.png': rafting,
//     'ultralight.webp': ultralight,
//     'cycling.jpg': cycling,
//     'kayaking.jpg': kayaking,
//     'kayaking1.jpg': kayaking1,
//     'kayaking2.jpg': kayaking2,
//     'kayaking3.jpg': kayaking3,
//     'kayaking4.jpg': kayaking4,
//     'zipline.jpg': zipline,
//     'jump.jpg': jump,
//     'bird.jpeg': bird
//   };

//   const getImage = (filename) => {
//     return imageMap[filename] || north; // fallback to north.jpg if not found
//   };

//   const openBookingPopup = () => {
//     setIsBookingPopupOpen(true);
//   };

//   const closeBookingPopup = () => {
//     setIsBookingPopupOpen(false);
//   };

//   return (
//     <>
//       <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg5})` }}>
//         <img
//           src={getImage(activity.images[0])}
//           alt={activity.title}
//           className="w-full h-[50vh] md:h-[80vh] object-cover"
//         />
//         <div className="absolute inset-0 bg-gray-900/60 h-[50vh] md:h-[80vh] "></div>
      
//         <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
//             <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
//               {activity.title}
//             </h1>
//             <div className="flex flex-col sm:flex-row md:justify-center items-start sm:items-center gap-4 md:gap-12">
//               <div className="flex items-center gap-2 md:gap-4">
//                 <img src={hourglass} alt="Duration" className="w-8 h-8 md:w-12 md:h-12" />
//                 <div>
//                   <h2 className="text-sm md:text-lg font-medium">Duration</h2>
//                   <p className="text-gray-500 text-sm md:text-base">
//                     {activity.itinerary.length} Days
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 md:gap-4">
//                 <img src={zone} alt="Zone" className="w-8 h-8 md:w-12 md:h-12" />
//                 <div>
//                   <h2 className="text-sm md:text-lg font-medium">Zone</h2>
//                   <p className="text-gray-500 text-sm md:text-base">{activity.sub_category}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
      
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
//             {/* Left Column: Info & Itinerary */}
//             <div className="lg:col-span-2 space-y-6 md:space-y-8">
//               {/* Description */}
//               <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
//                 {activity.description}
//               </p>
      
//               {/* Itinerary Accordion */}
//               <div className="space-y-2">
//                 {activity.itinerary.map((item) => (
//                   <div
//                     key={item.day} // Fixed: Added unique key prop
//                     className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <button
//                       className="w-full flex justify-between items-center p-3 sm:p-4 md:p-6 text-left focus:outline-none"
//                       onClick={() => toggleDay(item.day)}
//                     >
//                       <div className="flex flex-col sm:flex-row sm:items-center">
//                         <span className="text-blue-800 font-semibold text-base md:text-lg mr-0 sm:mr-4 mb-1 sm:mb-0">
//                           {item.day}
//                         </span>
//                         <span className="text-gray-700 text-sm sm:text-base">{item.title}</span>
//                       </div>
//                       <svg
//                         className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${
//                           activeDay === item.day ? 'rotate-180' : ''
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
      
//                     {activeDay === item.day && (
//                       <div className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 pt-1 md:pt-2 bg-gray-50">
//                         <p className="text-gray-600 text-sm md:text-base">
//                           {item.description}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
      
//               {/* Gallery */}
//               {/* <div className="mt-6 md:mt-8">
//                 <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">Gallery</h2>
//                 <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Each image tells a unique story</p>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
//                   {activity.images.map((image, index) => (
//                     <img
//                       key={index} // Fixed: Added unique key prop
//                       src={getImage(image)}
//                       alt={`Gallery ${index + 1}`}
//                       className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
//                     />
//                   ))}
//                 </div>
//               </div> */}
//               {/* Gallery */}
// <div className="mt-6 md:mt-8">
//   <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">Gallery</h2>
//   <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Each image tells a unique story</p>
//   <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
//     {activity.images.map((image, index) => (
//       <a
//         key={index}
//         href={getImage(image)}
//         data-fancybox="gallery"
//         data-caption={`${activity.title} - Image ${index + 1}`}
//         className="block overflow-hidden rounded cursor-zoom-in group"
//       >
//         <img
//           src={getImage(image)}
//           alt={`Gallery ${index + 1}`}
//           className="w-full h-28 sm:h-32 md:h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
//         />
//       </a>
//     ))}
//   </div>
// </div>
//             </div>
      
//             {/* Right Column: Sticky Include/Exclude Section */}
//             <div className="lg:col-span-1 mt-8 md:mt-12">
//               <div className="">
//                 <div className="border-2 border-gray-700 p-4 sm:p-6 bg-white shadow-md">
//                   <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Include / Exclude</h2>
//                   <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
//                     To help you plan your trip, we have put together a list of what's included and what's not included in your tour package.
//                   </p>
//                   <div className="mb-4 md:mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Included</h3>
//                     <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
//                       {activity.includes.map((item, index) => (
//                         <li key={`included-${index}`}>{item}</li> // Fixed: Added unique key prop
//                       ))}
//                     </ul>
//                   </div>
      
//                   <div className="mb-4 md:mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Excluded</h3>
//                     <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
//                       {activity.excludes.map((item, index) => (
//                         <li key={`excluded-${index}`}>{item}</li> // Fixed: Added unique key prop
//                       ))}
//                     </ul>
//                   </div>
      
//                   <button 
//                     onClick={openBookingPopup} // Fixed: Added onClick handler
//                     className="w-full cursor-pointer border border-gray-700 py-2 px-4 bg-[#00304a] text-white font-medium rounded hover:bg-[#004060] transition text-sm md:text-base"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Booking Popup */}
//       <BookNowPopup
//         packageName={activity.title}
//         isOpen={isBookingPopupOpen}
//         onClose={closeBookingPopup}
//       />
//     </>
//   );
// };

// export default Activities;


import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, User } from 'lucide-react';
import bg5 from '../Images/bg2.png';
import zone from '../Images/zone.png';
import hourglass from '../Images/hourglass.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import balloon from '../Images/ballon.webp';
import paraglading from '../Images/paraglading.jpg';
import paraglading2 from '../Images/paraglading2.jpg';
import rafting from '../Images/rafting.png';
import ultralight from '../Images/ultralight.webp';
import cycling from '../Images/cycling.jpg';
import kayaking from '../Images/kayaking.jpg';
import kayaking1 from '../Images/kayaking1.jpg';
import kayaking2 from '../Images/kayaking2.jpg';
import kayaking3 from '../Images/kayaking3.jpg';
import kayaking4 from '../Images/kayaking4.jpg';
import zipline from '../Images/zipline.jpg';
import jump from '../Images/jump.jpg';
import bird from '../Images/bird.jpeg';
import north from '../Images/north.jpg';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import parse from 'html-react-parser';

// Create an image mapping object for static imports
const imageMap = {
  'ballon.webp': balloon,
  'paraglading.jpg': paraglading,
  'paraglading2.jpg': paraglading2,
  'rafting.png': rafting,
  'ultralight.webp': ultralight,
  'cycling.jpg': cycling,
  'kayaking.jpg': kayaking,
  'kayaking1.jpg': kayaking1,
  'kayaking2.jpg': kayaking2,
  'kayaking3.jpg': kayaking3,
  'kayaking4.jpg': kayaking4,
  'zipline.jpg': zipline,
  'jump.jpg': jump,
  'bird.jpeg': bird,
  'north.jpg': north,
  'bg2.png': bg5
};

// Helper function to clean HTML
const cleanHtml = (html) => {
  if (!html) return '';
  // Remove HTML tags
  return html.replace(/<[^>]*>/g, '');
};

// Helper function to parse HTML list items
const parseListItems = (html) => {
  if (!html) return [];
  const clean = html.replace(/<p>|<\/p>/g, '');
  const items = clean.split(',').map((item) => item.trim().replace(/["]/g, ''));
  return items.filter((item) => item);
};

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

  const WHATSAPP_NUMBER = '9840097901';

  const handleSubmit = () => {
    if (!formData.name || !formData.date || !formData.people) {
      alert('Please fill in all fields');
      return;
    }
    
    const message = `New Tour Booking Request\n\nPackage: ${packageName}\nName: ${formData.name}\nDate: ${formData.date}\nNumber of People: ${formData.people}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    const appUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.open(appUrl, '_blank');
    } else {
      const whatsappWindow = window.open(webUrl, '_blank');
      setTimeout(() => {
        if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
          if (confirm('WhatsApp Web not opened. Would you like to try opening in WhatsApp app instead?')) {
            window.open(appUrl, '_blank');
          }
        }
      }, 1000);
    }
    
    setFormData({ name: '', date: '', people: '' });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
          aria-label="Close booking popup"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Book Your Tour</h3>
          <p className="text-[#00304a] font-semibold mb-6">{packageName}</p>

          <div className="space-y-4">
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

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 mt-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send to WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              You'll be redirected to WhatsApp to complete your booking
            </p>
            
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

const Activities = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
  const [activity, setActivity] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        setLoading(true);
        // Fetch activities
        const activityResponse = await axios.get(`http://127.0.0.1:8000/api/activities`);
        const activities = activityResponse.data.data;
        const foundActivity = activities.find((item) => item.slug === slug);

        if (!foundActivity) {
          setError("Activity not found");
          setLoading(false);
          return;
        }

        // Fetch FAQs for this activity (category_id might be different for activities)
        const faqResponse = await axios.get(`http://127.0.0.1:8000/api/faqs`);
        const allFaqs = faqResponse.data.data;
        
        // Filter FAQs for this activity (assuming category_id for activities is something like 6 or based on your data)
        const activityFaqs = allFaqs.filter(
          (faq) => faq.activity_id === foundActivity.id || faq.category_id === 6
        );

        // Parse includes and excludes from HTML
        const includes = parseListItems(foundActivity.includes);
        const excludes = parseListItems(foundActivity.excludes);

        // Parse itineraries from the itineraries array in the response
        let itineraries = [];
        if (foundActivity.itineraries && foundActivity.itineraries.length > 0) {
          itineraries = foundActivity.itineraries.map((item) => ({
            day: `Day ${item.day}`,
            title: item.title,
            description: cleanHtml(item.description),
          }));
        }

        // Get images - extract just the image paths
        const images = foundActivity.images
          ? foundActivity.images.map((img) => img.image)
          : [];

        setActivity({
          ...foundActivity,
          includes,
          excludes,
          itinerary: itineraries,
          images: images,
          description: cleanHtml(foundActivity.description),
        });

        setFaqs(activityFaqs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching activity data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchActivityData();
  }, [slug]);

  console.log("Fetched Activity:", activity);

  useEffect(() => {
    if (activity) {
      Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: [],
            right: ["slideshow", "fullscreen", "download", "close"],
          },
        },
        Images: {
          zoom: true,
        },
        animated: true,
        showClass: "f-fadeIn",
        hideClass: "f-fadeOut",
      });
    }

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
      Fancybox.close();
    };
  }, [activity]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !activity) {
    return (
      <div className="text-center py-20 text-xl text-red-500">
        {error || "Activity not found"}
      </div>
    );
  }

  // Function to get image by filename or API path
  const getImage = (imagePath) => {
    if (!imagePath) return north;

    // If it's an API image path (starts with activities/)
    if (imagePath.startsWith("activities/")) {
      return `http://127.0.0.1:8000/storage/${imagePath}`;
    }

    // Extract filename from local path
    const filename = imagePath.split("/").pop();
    return imageMap[filename] || north;
  };

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const openBookingPopup = () => {
    setIsBookingPopupOpen(true);
  };

  const closeBookingPopup = () => {
    setIsBookingPopupOpen(false);
  };

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bg5})` }}>
        <img
          src={getImage(activity.images[0])}
          alt={activity.title}
          className="w-full h-[50vh] md:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 h-[50vh] md:h-[80vh]"></div>

        <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
              {activity.title}
            </h1>
            <div className="flex flex-col sm:flex-row md:justify-center items-start sm:items-center gap-4 md:gap-12">
              <div className="flex items-center gap-2 md:gap-4">
                <img
                  src={hourglass}
                  alt="Duration"
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <div>
                  <h2 className="text-sm md:text-lg font-medium">Duration</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {activity.itinerary.length} Days
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <img
                  src={zone}
                  alt="Zone"
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <div>
                  <h2 className="text-sm md:text-lg font-medium">Zone</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {activity.sub_category || "Adventure Activity"}
                  </p>
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
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                      className="w-full flex justify-between items-center p-3 sm:p-4 md:p-6 text-left focus:outline-none"
                      onClick={() => toggleDay(item.day)}>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="text-blue-800 font-semibold text-base md:text-lg mr-0 sm:mr-4 mb-1 sm:mb-0">
                          {item.day}
                        </span>
                        <span className="text-gray-700 text-sm sm:text-base">
                          {item.title}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${
                          activeDay === item.day ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
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
                        <div className="text-gray-600 text-sm md:text-base prose prose-sm max-w-none">
                          {parse(item.description || "")}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div className="mt-6 md:mt-8">
                <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
                  Gallery
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                  Each image tells a unique story
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {activity.images.map((image, index) => (
                    <a
                      key={index}
                      href={getImage(image)}
                      data-fancybox="gallery"
                      data-caption={`${activity.title} - Image ${index + 1}`}
                      className="block overflow-hidden rounded cursor-zoom-in group">
                      <img
                        src={getImage(image)}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-28 sm:h-32 md:h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = north;
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Section - Dynamic from API */}
              {faqs.length > 0 && (
                <div className="mt-8 md:mt-12">
                  <h2 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={faq.id || index}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <button
                          className="w-full flex justify-between items-center p-4 md:p-5 text-left focus:outline-none"
                          onClick={() =>
                            setActiveDay(
                              activeDay === `faq-${index}`
                                ? null
                                : `faq-${index}`,
                            )
                          }>
                          <span className="font-medium text-gray-800 text-sm md:text-base pr-4">
                            {faq.question}
                          </span>

                          <svg
                            className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-300 ${
                              activeDay === `faq-${index}` ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {activeDay === `faq-${index}` && (
                          <div className="px-4 md:px-5 pb-4 pt-1 bg-gray-50">
                            <div
                              className="text-gray-600 text-sm md:text-base"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Include/Exclude Section */}
            <div className="lg:col-span-1 mt-8 md:mt-12">
              <div className="">
                <div className="border-2 border-gray-700 p-4 sm:p-6 bg-white shadow-md">
                  <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">
                    Include / Exclude
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                    To help you plan your trip, we have put together a list of
                    what's included and what's not included in your tour
                    package.
                  </p>
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                      Included
                    </h3>
                    <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
                      {activity.includes.map((item, index) => (
                        <li key={`included-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                      Excluded
                    </h3>
                    <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
                      {activity.excludes.map((item, index) => (
                        <li key={`excluded-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={openBookingPopup}
                    className="w-full border border-gray-700 py-2 px-4 bg-[#00304a] text-white font-medium rounded cursor-pointer hover:bg-[#004060] transition text-sm md:text-base">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Popup */}
      <BookNowPopup
        packageName={activity.title}
        isOpen={isBookingPopupOpen}
        onClose={closeBookingPopup}
      />
    </>
  );
};

export default Activities;