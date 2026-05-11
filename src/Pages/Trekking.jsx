import BookNowPopup from "../Components/BookNowPopup";
import bg5 from "../Images/bg1.jpg";
import zone from "../Images/zone.png";
import hourglass from "../Images/hourglass.png";
import north from "../Images/north.jpg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import trekData from "../Data/Data.json";
import hiddenlake from "../Images/hiddenlake.jpg";
import khumai from "../Images/khumai.jpg";
import kori from "../Images/kori.jpg";
import mardi from "../Images/mardihimal.jpg";
import lomanthang from "../Images/lomanthang.jpeg";
import lomanthang1 from "../Images/lomanthang1.jpg";
import lomanthang2 from "../Images/lomanthang2.jpg";
import mardi1 from "../Images/mardihimal1.jpg";
import poonhill from "../Images/poonhill.jpg";
import everest from "../Images/everest.jpg";
import abc1 from "../Images/abc.jpg";
import abc2 from "../Images/abc2.jpg";
import abc3 from "../Images/abc3.jpg";
import abc4 from "../Images/abc4.jpg";
import abc5 from "../Images/abc5.jpg";
import abc6 from "../Images/abc1.jpg";

// Create an image mapping object for static imports
const imageMap = {
  "north.jpg": north,
  "abc.jpg": abc1,
  "abc2.jpg": abc2,
  "abc3.jpg": abc3,
  "abc4.jpg": abc4,
  "abc5.jpg": abc5,
  "abc1.jpg": abc6,
  "mardihimal.jpg": mardi,
  "mardihimal1.jpg": mardi1,
  "bg1.jpg": bg5,
  "hiddenlake.jpg": hiddenlake,
  "khumai.jpg": khumai,
  "kori.jpg": kori,
  "poonhill.jpg": poonhill,
  "everest.jpg": everest,
  "lomanthang.jpeg": lomanthang,
  "lomanthang1.jpg": lomanthang1,
  "lomanthang2.jpg": lomanthang2,
};

const Trekking = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);
  const { slug } = useParams();

  const trek = trekData.find((item) => item.slug === slug);

  if (!trek) {
    return <div className="text-center py-20 text-xl">Trek not found</div>;
  }

  // Function to get image by filename - extract just the filename from path
  const getImage = (imagePath) => {
    // Extract filename from path (e.g., "../Images/abc.jpg" -> "abc.jpg")
    const filename = imagePath.split("/").pop();
    return imageMap[filename] || north; // fallback to north.jpg if not found
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
          src={getImage(trek.images[0])}
          alt={trek.title}
          className="w-full h-[50vh] md:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 h-[50vh] md:h-[80vh] "></div>

        <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#003769] md:col-span-2">
              {trek.title}
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
                    {trek.itinerary.length} Days
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
                    {trek.sub_category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
            {/* Left Column: Info & Itinerary */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Description */}
              {/* <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
                {trek.description}
              </p> */}
              {/* Description */}
              <p className="text-gray-800 text-sm md:text-base mt-6 md:mt-8">
                {trek.description}
              </p>

              {/* Lo Manthang Tour Extra Info */}
              {slug === "lo-manthang-tour" && (
                <div className="mt-4 md:mt-6 space-y-6 text-sm md:text-base text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">
                      This route is perfect for travelers seeking:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Off-road Himalayan jeep adventure</li>
                      <li>Cultural Tibetan heritage experience</li>
                      <li>High-altitude desert landscapes</li>
                      <li>Remote trekking and photography</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">
                      Pokhara to Lo Manthang Route Overview
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>
                        <span className="font-medium">Starting Point:</span>{" "}
                        Pokhara (822m)
                      </li>
                      <li>
                        <span className="font-medium">Destination:</span> Lo
                        Manthang (3,840m)
                      </li>
                      <li>
                        <span className="font-medium">Travel Type:</span> Jeep /
                        Overland tour
                      </li>
                      <li>
                        <span className="font-medium">Duration:</span> 7–8 days
                      </li>
                      <li>
                        <span className="font-medium">Region:</span> Upper
                        Mustang (Restricted Area)
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Itinerary Accordion */}
              <div className="space-y-2">
                {trek.itinerary.map((item) => (
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
                        <p className="text-gray-600 text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Gallery */}
              {/* <div className="mt-6 md:mt-8">
                <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
                  Gallery
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                  Each image tells a unique story
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {trek.images.map((image, index) => (
                    <img
                      key={index}
                      src={getImage(image)}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
                    />
                  ))}
                </div>
              </div> */}
              {/* Gallery */}
              <div className="mt-6 md:mt-8">
                <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
                  Gallery
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                  Each image tells a unique story
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {trek.images.map((image, index) => (
                    <img
                      key={index}
                      src={getImage(image)}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-28 sm:h-32 md:h-40 object-cover rounded"
                    />
                  ))}
                </div>
              </div>

              {/* FAQ - Lo Manthang Tour Only */}
              {slug === "lo-manthang-tour" && (
                <div className="mt-8 md:mt-12">
                  <h2 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        q: "How many days are needed for Lo Manthang trip?",
                        a: "A complete Pokhara to Lo Manthang jeep trip takes 7 to 8 days, including travel, acclimatization, and return.",
                      },
                      {
                        q: "Is Pokhara to Lo Manthang road difficult?",
                        a: "Yes. The route includes off-road mountain tracks, river crossings, and high-altitude desert roads. A 4WD jeep is required.",
                      },
                      {
                        q: "What is the altitude of Lo Manthang?",
                        a: "Lo Manthang is located at 3,840 meters above sea level, making it one of the highest settlements in Nepal.",
                      },
                      {
                        q: "Is altitude sickness a risk in Upper Mustang?",
                        a: "Yes. Since the route crosses above 3,000m quickly, mild altitude sickness can occur. Proper acclimatization is recommended.",
                      },
                      {
                        q: "What is the best time to visit Lo Manthang?",
                        answer: (
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm md:text-base">
                            <li>✔ March–June (best for Tiji Festival)</li>
                            <li>
                              ✔ September–November (clear skies & best views)
                            </li>
                          </ul>
                        ),
                      },
                      {
                        q: "How much does the trip cost?",
                        answer: (
                          <div className="text-gray-600 text-sm md:text-base">
                            <p className="mb-2">Cost depends on:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Jeep (shared/private)</li>
                              <li>Guide service</li>
                              <li>Restricted Area Permit</li>
                            </ul>
                            <p className="mt-2">
                              Upper Mustang is a restricted area, so permits are
                              mandatory.
                            </p>
                          </div>
                        ),
                      },
                      {
                        q: "Why visit Lo Manthang?",
                        answer: (
                          <div className="text-gray-600 text-sm md:text-base">
                            <p className="mb-2">Lo Manthang offers:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Ancient Tibetan kingdom culture</li>
                              <li>Walled medieval city</li>
                              <li>Unique desert Himalaya landscape</li>
                              <li>Spiritual monasteries and caves</li>
                            </ul>
                          </div>
                        ),
                      },
                    ].map((faq, index) => (
                      <div
                        key={index}
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
                            {faq.q}
                          </span>
                          <svg
                            className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0 transform transition-transform ${
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
                            {faq.answer ? (
                              faq.answer
                            ) : (
                              <p className="text-gray-600 text-sm md:text-base">
                                {faq.a}
                              </p>
                            )}
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
                      {trek.includes.map((item, index) => (
                        <li key={`included-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                      Excluded
                    </h3>
                    <ul className="text-gray-500 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
                      {trek.excludes.map((item, index) => (
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
        packageName={trek.title}
        isOpen={isBookingPopupOpen}
        onClose={closeBookingPopup}
      />
    </>
  );
};

export default Trekking;

// hiddenlake
//    {
//     "title": "Hidden Lake",
//     "slug": "hidden-lake",
//     "category": "trekking",
//     "sub_category": "Annapurna Region",
//     "description": "The Hidden Lake Trek takes you to a secluded alpine lake nestled in the Annapurna region. This serene and lesser-known destination is surrounded by towering peaks and pristine wilderness, offering trekkers a tranquil escape into nature's untouched beauty.",
//    "images": [

//     "hiddenlake.jpg"
// ],
//    "includes": [
//       "Accommodation during trek",
//       "All meals during trek",
//       "Licensed trekking guide",
//       "Porter service (1 porter per 2 trekkers)",
//       "Annapurna Conservation Area Permit (ACAP)",
//       "Trekker's Information Management System (TIMS) card",
//       "Transportation to/from Pokhara",
//       "Basic first aid kit"
//     ],
//     "excludes": [
//       "Nepal visa fees",
//       "Travel insurance",
//       "Personal expenses (snacks, beverages, wifi, etc.)",
//       "Hotel accommodation in Pokhara",
//       "Tips for guide and porters",
//       "Equipment rental",
//       "Emergency evacuation costs"
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1",
//         "title": "Drive from Pokhara to Tatopani (5-6 hrs drive) and trek to Narchyang Village",
//         "description": "Start the journey with a scenic drive to Tatopani, followed by a trek to Narchyang Village, passing through terraced fields and traditional settlements."
//       },
//       {
//         "day": "Day 2",
//         "title": "Trek from Narchyang village to Chhotepa (2370m) (7-8 Hrs walk)",
//         "description": "Trek through rhododendron forests with views of the Annapurna and Dhaulagiri ranges, reaching Chhotepa for an overnight stay."
//       },
//       {
//         "day": "Day 3",
//         "title": "Trek from Chhotepa to Bhusket mela (3546m) (6-7Hrs walk)",
//         "description": "Ascend into alpine terrain with panoramic views. Spend the night in Bhusket Mela while acclimatizing to the altitude."
//       },
//       {
//         "day": "Day 4",
//         "title": "Trek from Bhusket mela to Hidden Lake (approx. 4100m)",
//         "description": "Continue the trek to the secluded Hidden Lake, surrounded by snow-capped peaks and untouched wilderness. A perfect spot for reflection and photography."
//       },
//       {
//         "day": "Day 5",
//         "title": "Explore Hidden Lake and surrounding area",
//         "description": "Rest day with optional hikes to nearby viewpoints. Enjoy the serenity of the lake and the majestic mountain backdrop."
//       },
//       {
//         "day": "Day 6",
//         "title": "Trek back to Hum Khola (2890m) from Hidden Lake",
//         "description": "Descend through scenic trails to Hum Khola, passing through forests and streams. Overnight in a teahouse."
//       },
//       {
//         "day": "Day 7",
//         "title": "Trek back to Lower Narchyang from Hum Khola",
//         "description": "Trek back through familiar paths to Lower Narchyang, engaging with local communities and celebrating the journey."
//       },
//       {
//         "day": "Day 8",
//         "title": "Drive back to Pokhara",
//         "description": "Return to Pokhara with photo stops and lunch en route. End the trek with a relaxing evening in Pokhara."
//       }
//     ]
//   },
