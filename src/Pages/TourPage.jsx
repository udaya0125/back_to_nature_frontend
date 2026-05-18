// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet"; // Import Helmet for SEO
// import { Link } from "react-router-dom";

// // Import local images used in tours
// import bardia1 from "../Images/bardia1.jpg";
// import bardia2 from "../Images/bardia2.png"; // Fix extension
// import chitwan from "../Images/chitwan1.png";
// import lomanthang from "../Images/lomanthang.jpeg";
// import lomanthang1 from "../Images/lomanthang1.jpg";
// import lomanthang2 from "../Images/lomanthang2.jpg";
// import chitwan2 from "../Images/chitwan.png";
// import pokhara from "../Images/pokhara.jpg";
// import everest from "../Images/everest2.jpg";
// import motercycle1 from "../Images/motercycle1.jpg";
// import motercycle2 from "../Images/motercycle2.jpg";

// // Import JSON data directly
// import tourData from "../Data/Data.json";
// import axios from "axios";

// const TourPage = () => {
//   const [tours, setTours] = useState([]);
//   const [tour, setTour] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Map image filenames to imported image URLs
//   const imageMap = {
//     "bardia1.jpg": bardia1,
//     "bardia2.png": bardia2,
//     "chitwan1.png": chitwan,
//     "chitwan2.png": chitwan2,
//     "pokhara.jpg": pokhara,
//     "motercycle1.jpg": motercycle1,
//     "motercycle2.jpg": motercycle2,
//     "lomanthang.jpeg": lomanthang,
//     "lomanthang1.jpg": lomanthang1,
//     "lomanthang2.jpg": lomanthang2,
//   };

//   const getImage = (filename) => {
//     return (
//       imageMap[filename] ||
//       "https://via.placeholder.com/400x300?text=Image+Not+Found"
//     );
//   };

//   // Load tour data on component mount
//   useEffect(() => {
//     try {
//       const filteredTours = tourData.filter((item) => item.category === "tour");
//       setTours(filteredTours);
//     } catch (err) {
//       setError("Failed to load tour data");
//       console.error("Error parsing tour data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchTours = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://127.0.0.1:8000/api/tours");
//         const tourData = response.data.data;
//         setTour(tourData);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error loading tour data:", err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchTours();
//   }, []);

//   console.log("Loaded tours:", tour);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-12 text-red-500">
//         <p>Error loading tour data: {error}</p>
//         <p>Please try again later.</p>
//       </div>
//     );
//   }

//   // SEO Meta Description
//   const pageDescription =
//     "Explore a variety of tour packages including cultural, wildlife, and adventure tours in Nepal. Discover Chitwan, Pokhara, Bardia, and more.";

//   return (
//     <>
//       {/* SEO with React Helmet */}
//       <Helmet>
//         <title>Explore Tour Packages | Adventure Tours in Nepal</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="robots" content="index, follow" />
//         <link
//           rel="canonical"
//           href=" https://backtonatureadventure.com/tours "
//         />

//         {/* Open Graph Tags */}
//         <meta
//           property="og:title"
//           content="Explore Tour Packages | Adventure Tours in Nepal"
//         />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:image" content={everest} />
//         <meta
//           property="og:url"
//           content="https://backtonatureadventure.com/tours "
//         />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Explore Tour Packages | Adventure Tours in Nepal"
//         />
//         <meta name="twitter:description" content={pageDescription} />
//         <meta name="twitter:image" content={everest} />
//       </Helmet>

//       {/* Hero Banner Section */}
//       <div
//         className="relative bg-cover bg-center bg-no-repeat w-full h-[40vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center"
//         style={{ backgroundImage: `url(${everest})` }}>
//         <div className="absolute inset-0 bg-gray-900/60"></div>
//         <div className="relative z-10 text-center px-4">
//           <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
//             Tours
//           </h2>
//           <p className="text-yellow-400 mt-4 text-sm sm:text-md uppercase">
//             <Link to="/" className="uppercase text-white hover:text-blue-300">
//               Home
//             </Link>
//             / Tours
//           </p>
//         </div>
//       </div>

//       {/* Tours Grid */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
//         {tours.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             {tours.map((tour, index) => (
//               <Link
//                 to={`/tours/${tour.slug}`}
//                 onClick={() => window.scrollTo(0, 0)}
//                 key={index}
//                 className="relative group overflow-hidden">
//                 <img
//                   src={getImage(tour.images[0])}
//                   alt={tour.title}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                   <div className="text-white">
//                     <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
//                     <p className="text-sm line-clamp-2 mb-2">
//                       {tour.description}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">
//               No Tours Found
//             </h3>
//             <p className="text-gray-600">
//               We couldn't find any tour packages at the moment.
//             </p>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default TourPage;


import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

// Import local images used in tours
import bardia1 from "../Images/bardia1.jpg";
import bardia2 from "../Images/bardia2.png";
import chitwan from "../Images/chitwan1.png";
import lomanthang from "../Images/lomanthang.jpeg";
import lomanthang1 from "../Images/lomanthang1.jpg";
import lomanthang2 from "../Images/lomanthang2.jpg";
import chitwan2 from "../Images/chitwan.png";
import pokhara from "../Images/pokhara.jpg";
import everest from "../Images/everest2.jpg";
import motercycle1 from "../Images/motercycle1.jpg";
import motercycle2 from "../Images/motercycle2.jpg";

const TourPage = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
       const imgurl = import.meta.env.VITE_IMAGE_PATH;

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Map image filenames to imported image URLs (for fallback)
  const imageMap = {
    "bardia1.jpg": bardia1,
    "bardia2.png": bardia2,
    "chitwan1.png": chitwan,
    "chitwan2.png": chitwan2,
    "pokhara.jpg": pokhara,
    "motercycle1.jpg": motercycle1,
    "motercycle2.jpg": motercycle2,
    "lomanthang.jpeg": lomanthang,
    "lomanthang1.jpg": lomanthang1,
    "lomanthang2.jpg": lomanthang2,
  };

  // Helper to get full image URL
 const getImageUrl = (imageData) => {
  // API returns a plain string path like "tours/filename.jpg"
  if (typeof imageData === 'string') {
    // Check if it's a local filename first
    if (imageMap[imageData]) return imageMap[imageData];
    // Otherwise it's an API path
    return `${imgurl}/${imageData}`;
  }
  // Legacy object format fallback
  if (imageData?.image) {
    return `${imgurl}/${imageData.image}`;
  }
  return everest;
};

  // Fetch tours from API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/tours`);
        const tourData = response.data.data;
        setTours(tourData);
        setError(null);
      } catch (err) {
        console.error("Error loading tour data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  console.log("Loaded tours:", tours);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Error loading tour data: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  const pageDescription =
    "Explore a variety of tour packages including cultural, wildlife, and adventure tours in Nepal. Discover Chitwan, Pokhara, Bardia, and more.";

  return (
    <>
      <Helmet>
        <title>Explore Tour Packages | Adventure Tours in Nepal</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://backtonatureadventure.com/tours" />
        <meta property="og:title" content="Explore Tour Packages | Adventure Tours in Nepal" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={everest} />
        <meta property="og:url" content="https://backtonatureadventure.com/tours" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explore Tour Packages | Adventure Tours in Nepal" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={everest} />
      </Helmet>

      {/* Hero Banner Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-[40vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${everest})` }}>
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Tours
          </h2>
          <p className="text-yellow-400 mt-4 text-sm sm:text-md uppercase">
            <Link to="/" className="uppercase text-white hover:text-blue-300">
              Home
            </Link>
            / Tours
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        {tours.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {tours.map((tour) => (
              <Link
                to={`/tours/${tour.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                key={tour.id}
                className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={getImageUrl(tour.image)}
                  alt={tour.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
                    {/* Strip HTML tags for description preview */}
                    <p className="text-sm line-clamp-2 mb-2">
                      {tour.description?.replace(/<[^>]*>/g, '').substring(0, 100)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              No Tours Found
            </h3>
            <p className="text-gray-600">
              We couldn't find any tour packages at the moment.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default TourPage;