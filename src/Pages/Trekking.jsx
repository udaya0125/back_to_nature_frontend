// import BookNowPopup from "../Components/BookNowPopup";
// import bg5 from "../Images/bg1.jpg";
// import zone from "../Images/zone.png";
// import hourglass from "../Images/hourglass.png";
// import north from "../Images/north.jpg";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import trekData from "../Data/Data.json";
// import hiddenlake from "../Images/hiddenlake.jpg";
// import khumai from "../Images/khumai.jpg";
// import kori from "../Images/kori.jpg";
// import mardi from "../Images/mardihimal.jpg";
// import lomanthang from "../Images/lomanthang.jpeg";
// import lomanthang1 from "../Images/lomanthang1.jpg";
// import lomanthang2 from "../Images/lomanthang2.jpg";
// import mardi1 from "../Images/mardihimal1.jpg";
// import poonhill from "../Images/poonhill.jpg";
// import everest from "../Images/everest.jpg";
// import abc1 from "../Images/abc.jpg";
// import abc2 from "../Images/abc2.jpg";
// import abc3 from "../Images/abc3.jpg";
// import abc4 from "../Images/abc4.jpg";
// import abc5 from "../Images/abc5.jpg";
// import abc6 from "../Images/abc1.jpg";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// // Create an image mapping object for static imports
// const imageMap = {
//   "north.jpg": north,
//   "abc.jpg": abc1,
//   "abc2.jpg": abc2,
//   "abc3.jpg": abc3,
//   "abc4.jpg": abc4,
//   "abc5.jpg": abc5,
//   "abc1.jpg": abc6,
//   "mardihimal.jpg": mardi,
//   "mardihimal1.jpg": mardi1,
//   "bg1.jpg": bg5,
//   "hiddenlake.jpg": hiddenlake,
//   "khumai.jpg": khumai,
//   "kori.jpg": kori,
//   "poonhill.jpg": poonhill,
//   "everest.jpg": everest,
//   "lomanthang.jpeg": lomanthang,
//   "lomanthang1.jpg": lomanthang1,
//   "lomanthang2.jpg": lomanthang2,
// };

// const Trekking = () => {
//   const [activeDay, setActiveDay] = useState(null);
//   const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
//   const { slug } = useParams();

//   const trek = trekData.find((item) => item.slug === slug);

//   useEffect(() => {
//     Fancybox.bind('[data-fancybox="gallery"]', {
//       Toolbar: {
//         display: {
//           left: ["infobar"],
//           middle: [],
//           right: ["slideshow", "fullscreen", "download", "close"],
//         },
//       },
//       Images: {
//         zoom: true,
//       },
//       animated: true,
//       showClass: "f-fadeIn",
//       hideClass: "f-fadeOut",
//     });

//     return () => {
//       Fancybox.unbind('[data-fancybox="gallery"]');
//       Fancybox.close();
//     };
//   }, [trek]); // re-bind when trek changes

//   if (!trek) {
//     return <div className="text-center py-20 text-xl">Trek not found</div>;
//   }

//   // Function to get image by filename - extract just the filename from path
//   const getImage = (imagePath) => {
//     // Extract filename from path (e.g., "../Images/abc.jpg" -> "abc.jpg")
//     const filename = imagePath.split("/").pop();
//     return imageMap[filename] || north; // fallback to north.jpg if not found
//   };

//   const toggleDay = (day) => {
//     setActiveDay(activeDay === day ? null : day);
//   };

//   const openBookingPopup = () => {
//     setIsBookingPopupOpen(true);
//   };

//   const closeBookingPopup = () => {
//     setIsBookingPopupOpen(false);
//   };

//   return (
//     <>
//       <div
//         className="bg-cover bg-center"
//         style={{ backgroundImage: `url(${bg5})` }}>
//         <img
//           src={getImage(trek.images[0])}
//           alt={trek.title}
//           className="w-full h-[50vh] md:h-[80vh] object-cover"
//         />
//         <div className="absolute inset-0 bg-gray-900/60 h-[50vh] md:h-[80vh] "></div>

//         <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
//             <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
//               {trek.title}
//             </h1>
//             <div className="flex flex-col sm:flex-row md:justify-center items-start sm:items-center gap-4 md:gap-12">
//               <div className="flex items-center gap-2 md:gap-4">
//                 <img
//                   src={hourglass}
//                   alt="Duration"
//                   className="w-8 h-8 md:w-12 md:h-12"
//                 />
//                 <div>
//                   <h2 className="text-sm md:text-lg font-medium">Duration</h2>
//                   <p className="text-gray-500 text-sm md:text-base">
//                     {trek.itinerary.length} Days
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 md:gap-4">
//                 <img
//                   src={zone}
//                   alt="Zone"
//                   className="w-8 h-8 md:w-12 md:h-12"
//                 />
//                 <div>
//                   <h2 className="text-sm md:text-lg font-medium">Zone</h2>
//                   <p className="text-gray-500 text-sm md:text-base">
//                     {trek.sub_category}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
//             {/* Left Column: Info & Itinerary */}
//             <div className="lg:col-span-2 space-y-6 md:space-y-8">
//               {/* Description */}
//               {/* <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
//                 {trek.description}
//               </p> */}
//               {/* Description */}
//               <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
//                 {trek.description}
//               </p>

//               {/* Lo Manthang Treak Extra Info */}
//               {slug === "lo-manthang-trek" && (
//                 <div className="mt-4 md:mt-6 space-y-6 text-sm md:text-base text-gray-800">
//                   <div>
//                     <p className="font-semibold mb-2">
//                       Why Choose the Lo Manthang Trek?
//                     </p>
//                     <ul className="list-disc pl-5 space-y-1 text-gray-600">
//                       <li>Explore the hidden kingdom of Upper Mustang</li>
//                       <li>Experience authentic Tibetan Buddhist culture</li>
//                       <li>Visit ancient monasteries and caves</li>
//                       <li>
//                         Trek through unique desert-like Himalayan landscapes
//                       </li>
//                       <li>
//                         Less crowded compared to Everest and Annapurna regions
//                       </li>
//                       <li>Suitable during monsoon season due to dry climate</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <p className="font-semibold mb-2">Major Highlights</p>
//                     <ul className="list-disc pl-5 space-y-1 text-gray-600">
//                       <li>Scenic journey from Pokhara to Jomsom</li>
//                       <li>Trek through the Kali Gandaki Valley</li>
//                       <li>Visit ancient villages and monasteries</li>
//                       <li>Explore the walled city of Lo Manthang</li>
//                       <li>
//                         Stunning views of Nilgiri, Dhaulagiri, and Annapurna
//                         ranges
//                       </li>
//                       <li>Unique Tibetan-influenced culture and lifestyle</li>
//                       <li>
//                         Discover mysterious sky caves and historical sites
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <p className="font-semibold mb-2">
//                       Best Time for Lo Manthang Trek
//                     </p>

//                     <p className="text-gray-600 mb-2">
//                       The best seasons for the Lo Manthang Trek are:
//                     </p>

//                     <ul className="list-disc pl-5 space-y-1 text-gray-600">
//                       <li>Spring (March to May)</li>
//                       <li>Autumn (September to November)</li>
//                       <li>
//                         Monsoon (June to August) – Mustang remains dry and
//                         perfect for trekking
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <p className="font-semibold mb-2">
//                       Lo Manthang Trek Permit Information
//                     </p>

//                     <p className="text-gray-600 mb-2">
//                       Upper Mustang is a restricted area in Nepal. Trekkers
//                       require:
//                     </p>

//                     <ul className="list-disc pl-5 space-y-1 text-gray-600">
//                       <li>Restricted Area Permit (RAP)</li>
//                       <li>Annapurna Conservation Area Permit (ACAP)</li>
//                     </ul>

//                     <p className="text-gray-600 mt-3">
//                       Travelers must trek through a registered trekking agency
//                       with a licensed guide.
//                     </p>
//                   </div>

//                   <div>
//                     <p className="font-semibold mb-2">Typical Trek Duration</p>

//                     <p className="text-gray-600">
//                       The standard Lo Manthang Trek from Pokhara takes around 12
//                       to 16 days depending on itinerary and transportation
//                       options.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Itinerary Accordion */}
//               <div className="space-y-2">
//                 {trek.itinerary.map((item) => (
//                   <div
//                     key={item.day}
//                     className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//                     <button
//                       className="w-full flex justify-between items-center p-3 sm:p-4 md:p-6 text-left focus:outline-none"
//                       onClick={() => toggleDay(item.day)}>
//                       <div className="flex flex-col sm:flex-row sm:items-center">
//                         <span className="text-blue-800 font-semibold text-base md:text-lg mr-0 sm:mr-4 mb-1 sm:mb-0">
//                           {item.day}
//                         </span>
//                         <span className="text-gray-700 text-sm sm:text-base">
//                           {item.title}
//                         </span>
//                       </div>
//                       <svg
//                         className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${
//                           activeDay === item.day ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor">
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
//                 <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
//                   Gallery
//                 </h2>
//                 <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
//                   Each image tells a unique story
//                 </p>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
//                   {trek.images.map((image, index) => (
//                     <img
//                       key={index}
//                       src={getImage(image)}
//                       alt={`Gallery ${index + 1}`}
//                       className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
//                     />
//                   ))}
//                 </div>
//               </div> */}
//               {/* Gallery */}
//               <div className="mt-6 md:mt-8">
//                 <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
//                   Gallery
//                 </h2>
//                 <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
//                   Each image tells a unique story
//                 </p>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
//                   {trek.images.map((image, index) => (
//                     <a
//                       key={index}
//                       href={getImage(image)}
//                       data-fancybox="gallery"
//                       data-caption={`${trek.title} - Image ${index + 1}`}
//                       className="block overflow-hidden rounded cursor-zoom-in group">
//                       <img
//                         src={getImage(image)}
//                         alt={`Gallery ${index + 1}`}
//                         className="w-full h-28 sm:h-32 md:h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* FAQ - Lo Manthang Trek Only */}
//               {slug === "lo-manthang-trek" && (
//                 <div className="mt-8 md:mt-12">
//                   <h2 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">
//                     Frequently Asked Questions
//                   </h2>

//                   <div className="space-y-4">
//                     {[
//                       {
//                         q: "How difficult is the Lo Manthang Trek?",
//                         a: "The trek is considered moderate. Basic fitness and some trekking experience are helpful.",
//                       },
//                       {
//                         q: "Do I need a guide for Upper Mustang?",
//                         a: "Yes. A licensed guide is mandatory because Upper Mustang is a restricted region.",
//                       },
//                       {
//                         q: "Can beginners do the Lo Manthang Trek?",
//                         a: "Yes, beginners with good physical fitness can complete the trek comfortably.",
//                       },
//                       {
//                         q: "What is the altitude of Lo Manthang?",
//                         a: "Lo Manthang is located at approximately 3,840 meters above sea level.",
//                       },
//                       {
//                         q: "Is Upper Mustang open during monsoon?",
//                         a: "Yes. Upper Mustang is one of the best trekking destinations during monsoon because it lies in a rain-shadow area.",
//                       },
//                       {
//                         q: "How much does the Lo Manthang Trek cost?",
//                         a: "The cost varies depending on itinerary, transport, accommodation, permits, and group size.",
//                       },
//                       {
//                         q: "What are the accommodation facilities like?",
//                         a: "Tea houses and lodges are available along the trekking route with basic but comfortable facilities.",
//                       },
//                       {
//                         q: "What can I see in Lo Manthang?",
//                         answer: (
//                           <div className="text-gray-600 text-sm md:text-base">
//                             <p className="mb-2">Travelers can explore:</p>
//                             <ul className="list-disc pl-5 space-y-1">
//                               <li>Ancient monasteries</li>
//                               <li>Royal palaces</li>
//                               <li>Historic caves</li>
//                               <li>Tibetan culture and traditions</li>
//                               <li>Stunning Himalayan landscapes</li>
//                             </ul>
//                           </div>
//                         ),
//                       },
//                       {
//                         q: "How do I reach Lo Manthang from Pokhara?",
//                         a: "Most trekkers travel from Pokhara to Jomsom by flight or jeep before starting the trek.",
//                       },
//                       {
//                         q: "Why is Upper Mustang famous?",
//                         answer: (
//                           <div className="text-gray-600 text-sm md:text-base">
//                             <p className="mb-2">Upper Mustang is famous for:</p>
//                             <ul className="list-disc pl-5 space-y-1">
//                               <li>Ancient Tibetan culture</li>
//                               <li>Hidden kingdom history</li>
//                               <li>Dramatic desert landscapes</li>
//                               <li>The walled city of Lo Manthang</li>
//                             </ul>
//                           </div>
//                         ),
//                       },
//                     ].map((faq, index) => (
//                       <div
//                         key={index}
//                         className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//                         <button
//                           className="w-full flex justify-between items-center p-4 md:p-5 text-left focus:outline-none"
//                           onClick={() =>
//                             setActiveDay(
//                               activeDay === `faq-${index}`
//                                 ? null
//                                 : `faq-${index}`,
//                             )
//                           }>
//                           <span className="font-medium text-gray-800 text-sm md:text-base pr-4">
//                             {faq.q}
//                           </span>

//                           <svg
//                             className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0 transform transition-transform duration-300 ${
//                               activeDay === `faq-${index}` ? "rotate-180" : ""
//                             }`}
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </button>

//                         {activeDay === `faq-${index}` && (
//                           <div className="px-4 md:px-5 pb-4 pt-1 bg-gray-50">
//                             {faq.answer ? (
//                               faq.answer
//                             ) : (
//                               <p className="text-gray-600 text-sm md:text-base">
//                                 {faq.a}
//                               </p>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Right Column: Sticky Include/Exclude Section */}
//             <div className="lg:col-span-1 mt-8 md:mt-12">
//               <div className="">
//                 <div className="border-2 border-gray-700 p-4 sm:p-6 bg-white shadow-md">
//                   <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">
//                     Include / Exclude
//                   </h2>
//                   <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
//                     To help you plan your trip, we have put together a list of
//                     what's included and what's not included in your tour
//                     package.
//                   </p>
//                   <div className="mb-4 md:mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
//                       Included
//                     </h3>
//                     <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
//                       {trek.includes.map((item, index) => (
//                         <li key={`included-${index}`}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mb-4 md:mb-6">
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
//                       Excluded
//                     </h3>
//                     <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
//                       {trek.excludes.map((item, index) => (
//                         <li key={`excluded-${index}`}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <button
//                     onClick={openBookingPopup}
//                     className="w-full border border-gray-700 py-2 px-4 bg-[#00304a] text-white font-medium rounded cursor-pointer hover:bg-[#004060] transition text-sm md:text-base">
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
//         packageName={trek.title}
//         isOpen={isBookingPopupOpen}
//         onClose={closeBookingPopup}
//       />
//     </>
//   );
// };

// export default Trekking;



import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import zone from "../Images/zone.png";
import hourglass from "../Images/hourglass.png";
import bg5 from "../Images/bg5.jpg";
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import parse from 'html-react-parser';

// BookNowPopup Component (same as in Tours)
const BookNowPopup = ({ packageName = "Trek Package", isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    people: "",
  });

  const WHATSAPP_NUMBER = "9840097901";

  const handleSubmit = () => {
    if (!formData.name || !formData.date || !formData.people) {
      alert("Please fill in all fields");
      return;
    }

    const message = `New Trek Booking Request\n\nPackage: ${packageName}\nName: ${formData.name}\nDate: ${formData.date}\nNumber of People: ${formData.people}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    const webUrl = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    const appUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(appUrl, "_blank");
    } else {
      const whatsappWindow = window.open(webUrl, "_blank");
      setTimeout(() => {
        if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == "undefined") {
          if (confirm("WhatsApp Web not opened. Would you like to try opening in WhatsApp app instead?")) {
            window.open(appUrl, "_blank");
          }
        }
      }, 1000);
    }

    setFormData({ name: "", date: "", people: "" });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Book Your Trek</h3>
          <p className="text-[#00304a] font-semibold mb-6">{packageName}</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={handleChange}
                min="1"
                max="50"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Enter number of people"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 mt-6">
              Send to WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              You'll be redirected to WhatsApp to complete your booking
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> If the message doesn't appear when
                switching to the WhatsApp app, you may need to manually copy and
                paste the booking details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Trekking Component
const Trekking = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const [trek, setTrek] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  // Fetch single trek from API
  useEffect(() => {
    const fetchTrek = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/trekkings/${slug}`);
        const trekData = response.data.data;

        // Parse itineraries
        let itineraries = [];
        if (trekData.itineraries && trekData.itineraries.length > 0) {
          itineraries = trekData.itineraries.map((item) => ({
            id: item.id,
            day: item.day,
            title: item.title,
            description: item.description, // Keep HTML for rendering
          }));
        }

        // Get images
        const images = trekData.images
          ? trekData.images.map((img) => img.image)
          : [];

        // Fetch FAQs for this trek
        try {
          const faqResponse = await axios.get(`http://127.0.0.1:8000/api/faqs`);
          const allFaqs = faqResponse.data.data;
          const trekFaqs = allFaqs.filter(
            (faq) => faq.trekking_id === trekData.id
          );
          setFaqs(trekFaqs);
        } catch (faqErr) {
          console.error("Error loading FAQs:", faqErr);
          setFaqs([]);
        }

        setTrek({
          ...trekData,
          // Keep includes/excludes as raw HTML for rich text rendering
          includes: trekData.includes || '',
          excludes: trekData.excludes || '',
          itineraries,
          images,
          description: trekData.description, // Keep HTML for rendering
        });
        setError(null);
      } catch (err) {
        console.error("Error loading trek:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchTrek();
    }
  }, [slug]);

  // Helper to get full image URL from API response
  const getImageUrl = (imageData) => {
    if (!imageData) return bg5;

    if (typeof imageData === 'object' && imageData.image) {
      return `http://127.0.0.1:8000/storage/${imageData.image}`;
    }
    if (typeof imageData === 'string') {
      if (imageData.startsWith('http')) return imageData;
      if (imageData.startsWith('/storage')) return `http://127.0.0.1:8000${imageData}`;
      if (imageData.startsWith('trekkings/')) return `http://127.0.0.1:8000/storage/${imageData}`;
      return `http://127.0.0.1:8000/storage/${imageData}`;
    }
    return bg5;
  };

  console.log("Trek data:", trek);

  // Initialize Fancybox
  useEffect(() => {
    if (trek && trek.images && trek.images.length > 0) {
      Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
          display: {
            left: ['infobar'],
            middle: [],
            right: ['slideshow', 'fullscreen', 'download', 'close'],
          },
        },
        Images: { zoom: true },
        animated: true,
        showClass: 'f-fadeIn',
        hideClass: 'f-fadeOut',
      });
    }

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
      Fancybox.close();
    };
  }, [trek]);

  const toggleDay = (dayId) => {
    setActiveDay(activeDay === dayId ? null : dayId);
  };

  const openBookNowPopup = () => setIsBookNowOpen(true);
  const closeBookNowPopup = () => setIsBookNowOpen(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !trek) {
    return <div className="text-center py-20 text-xl">Trek not found</div>;
  }

  return (
    <>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg5})` }}>
        <img
          src={trek.images && trek.images[0] ? getImageUrl(trek.images[0]) : bg5}
          alt={trek.title}
          className="w-full h-[50vh] md:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 h-[50vh] md:h-[80vh]"></div>

        <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
              {trek.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center items-start sm:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 md:gap-4">
                <img src={hourglass} alt="Duration" className="w-8 h-8 md:w-12 md:h-12" />
                <div>
                  <h2 className="text-sm md:text-lg font-medium">Duration</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {trek.itineraries?.length || 0} Days
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <img src={zone} alt="Zone" className="w-8 h-8 md:w-12 md:h-12" />
                <div>
                  <h2 className="text-sm md:text-lg font-medium">Zone</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {trek.sub_category || trek.category?.name || "Trekking Region"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Description - parsed from rich text HTML */}
              <div className="text-gray-800 text-sm md:text-base mt-6 md:mt-8 prose prose-sm max-w-none">
                {parse(trek.description || '')}
              </div>

              {/* Lo Manthang Trek Extra Info (if needed) */}
              {slug === "lo-manthang-trek" && (
                <div className="mt-4 md:mt-6 space-y-6 text-sm md:text-base text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">Why Choose the Lo Manthang Trek?</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Explore the hidden kingdom of Upper Mustang</li>
                      <li>Experience authentic Tibetan Buddhist culture</li>
                      <li>Visit ancient monasteries and caves</li>
                      <li>Trek through unique desert-like Himalayan landscapes</li>
                      <li>Less crowded compared to Everest and Annapurna regions</li>
                      <li>Suitable during monsoon season due to dry climate</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Major Highlights</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Scenic journey from Pokhara to Jomsom</li>
                      <li>Trek through the Kali Gandaki Valley</li>
                      <li>Visit ancient villages and monasteries</li>
                      <li>Explore the walled city of Lo Manthang</li>
                      <li>Stunning views of Nilgiri, Dhaulagiri, and Annapurna ranges</li>
                      <li>Unique Tibetan-influenced culture and lifestyle</li>
                      <li>Discover mysterious sky caves and historical sites</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Best Time for Lo Manthang Trek</p>
                    <p className="text-gray-600 mb-2">The best seasons for the Lo Manthang Trek are:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Spring (March to May)</li>
                      <li>Autumn (September to November)</li>
                      <li>Monsoon (June to August) – Mustang remains dry and perfect for trekking</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Lo Manthang Trek Permit Information</p>
                    <p className="text-gray-600 mb-2">Upper Mustang is a restricted area in Nepal. Trekkers require:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Restricted Area Permit (RAP)</li>
                      <li>Annapurna Conservation Area Permit (ACAP)</li>
                    </ul>
                    <p className="text-gray-600 mt-3">Travelers must trek through a registered trekking agency with a licensed guide.</p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Typical Trek Duration</p>
                    <p className="text-gray-600">The standard Lo Manthang Trek from Pokhara takes around 12 to 16 days depending on itinerary and transportation options.</p>
                  </div>
                </div>
              )}

              {/* Itinerary Accordion */}
              <div className="space-y-2">
                {trek.itineraries?.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                      className="w-full flex justify-between items-center p-3 sm:p-4 md:p-6 text-left focus:outline-none"
                      onClick={() => toggleDay(item.id)}>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="text-blue-800 font-semibold text-base md:text-lg mr-0 sm:mr-4 mb-1 sm:mb-0">
                          Day {item.day}
                        </span>
                        <span className="text-gray-700 text-sm sm:text-base">
                          {item.title}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${
                          activeDay === item.id ? "rotate-180" : ""
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

                    {activeDay === item.id && (
                      <div className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 pt-1 md:pt-2 bg-gray-50 prose prose-sm max-w-none">
                        {parse(item.description || '')}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Gallery */}
              {trek.images && trek.images.length > 0 && (
                <div className="mt-6 md:mt-8">
                  <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">Gallery</h2>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">Each image tells a unique story</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {trek.images.map((image, index) => (
                      <a
                        key={index}
                        href={getImageUrl(image)}
                        data-fancybox="gallery"
                        data-caption={`${trek.title} - Image ${index + 1}`}
                        className="block overflow-hidden rounded cursor-zoom-in group">
                        <img
                          src={getImageUrl(image)}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-28 sm:h-32 md:h-40 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = bg5;
                          }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}

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
                            <div className="text-gray-600 text-sm md:text-base prose prose-sm max-w-none">
                              {parse(faq.answer || '')}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 mt-8 md:mt-12">
              <div className="border-2 border-gray-700 p-4 sm:p-6 bg-white shadow-md sticky top-4">
                <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">
                  Include / Exclude
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
                  To help you plan your trip, we have put together a list of
                  what's included and what's not included in your trek package.
                </p>

                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Included</h3>
                  <div className="text-gray-500 text-sm md:text-base prose prose-sm max-w-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1">
                    {trek.includes
                      ? parse(trek.includes)
                      : <p>No specific inclusions listed</p>
                    }
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Excluded</h3>
                  <div className="text-gray-500 text-sm md:text-base prose prose-sm max-w-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1">
                    {trek.excludes
                      ? parse(trek.excludes)
                      : <p>No specific exclusions listed</p>
                    }
                  </div>
                </div>

                <button
                  onClick={openBookNowPopup}
                  className="w-full cursor-pointer border border-gray-700 py-2 px-4 bg-[#00304a] text-white font-medium rounded hover:bg-[#004060] transition text-sm md:text-base">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Popup */}
      <BookNowPopup
        packageName={trek.title}
        isOpen={isBookNowOpen}
        onClose={closeBookNowPopup}
      />
    </>
  );
};

export default Trekking;
