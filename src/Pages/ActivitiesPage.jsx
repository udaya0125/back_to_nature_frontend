// import { Helmet } from 'react-helmet'; // Add this import

// import everest from '../Images/everest2.jpg';
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import data from '../Data/Data.json';

// // Import all activity images
// import cyclingImg from '../Images/cycling.jpg';
// import ultralightImg from '../Images/ultralight.webp';
// import paraglidingImg from '../Images/paraglading.jpg';
// import paraglidingImg2 from '../Images/paraglading2.jpg';
// import kayakingImg from '../Images/kayaking.jpg';
// import kayaking1 from '../Images/kayaking1.jpg';
// import kayaking2 from '../Images/kayaking2.jpg';
// import kayaking3 from '../Images/kayaking3.jpg';
// import kayaking4 from '../Images/kayaking4.jpg';
// import raftingImg from '../Images/rafting.png';
// import balloonImg from '../Images/ballon.webp';
// import ziplineImg from '../Images/zipline.jpg';
// import bungeeImg from '../Images/jump.jpg';
// import bird from '../Images/bird.jpeg';
// import axios from 'axios';

// const ActivitiesPage = () => {
//   const [activitie, setActivitie] = useState([]);
//   const [activities, setActivities] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Create a mapping of image names to imported images
//   const imageMap = {
//     'cycling.jpg': cyclingImg,
//     'ultralight.webp': ultralightImg,
//     'paraglading.jpg': paraglidingImg,
//     'paraglading2.jpg': paraglidingImg2,
//     'kayaking1.jpg': kayaking1,
//     'kayaking2.jpg': kayaking2,
//     'kayaking3.jpg': kayaking3,
//     'kayaking4.jpg': kayaking4,
//     'kayaking.jpg': kayakingImg,
//     'rafting.png': raftingImg,
//     'ballon.webp': balloonImg,
//     'zipline.jpg': ziplineImg,
//     'jump.jpg': bungeeImg,
//     'bird.jpeg': bird
//   };

//   useEffect(() => {
//     try {
//       // Filter activities with category "activity" and add image URLs
//       const activityData = data
//         .filter(item => item.category === "activity")
//         .map(activity => ({
//           ...activity,
//           imageUrl: imageMap[activity.images[0]] || everest // fallback to everest if image not found
//         }));

//       setActivities(activityData);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error loading activity data:", err);
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchActivities = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://127.0.0.1:8000/api/activities");
//         const activitiesData = response.data.data;
//         setActivitie(activitiesData);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error loading activity data:", err);
//         setLoading(false);
//       }
//     };

//     fetchActivities();
//   }, []);

//   console.log("Loaded activities:", activitie);
//   const getImage = (filename) => {
//     return imageMap[filename] || everest; // fallback to everest.jpg if not found
//   };

//   const handleActivityClick = (slug) => {
//     navigate(`/activities/${slug}`);
//   };

//   // SEO Meta Description (optional: you can make this dynamic)
//   const pageDescription = "Explore thrilling adventure activities like paragliding, rafting, bungee jumping, and more. Plan your next adventure with us.";

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>Adventure Activities | Discover Thrilling Experiences</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://backtonatureadventure.com/activities " />

//         {/* Open Graph Tags */}
//         <meta property="og:title" content="Adventure Activities | Discover Thrilling Experiences" />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:image" content={everest} />
//         <meta property="og:url" content="https://backtonatureadventure.com/activities " />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Adventure Activities | Discover Thrilling Experiences" />
//         <meta name="twitter:description" content={pageDescription} />
//         <meta name="twitter:image" content={everest} />
//       </Helmet>

//       {/* Hero Banner Section */}
//       <div className="relative bg-cover bg-center bg-no-repeat w-full h-[40vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center"
//         style={{ backgroundImage: `url(${everest})` }}>
//         <div className="absolute inset-0 bg-gray-900/60"></div>
//         <div className="relative z-10 text-center px-4">
//           <h2 className='uppercase text-3xl sm:text-4xl md:text-5xl font-semibold text-white'>Activities</h2>
//           <p className='text-yellow-400 mt-4 text-sm sm:text-md uppercase'>
//             <Link to="/"  onClick={() => window.scrollTo(0, 0)} className='uppercase text-white hover:text-blue-300'>Home</Link>
//             / Activities
//           </p>
//         </div>
//       </div>

//       {/* Activities Grid Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
//         {activities.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             {activities.map((activity, index) => (
//               <Link
//                 to={`/activities/${activity.slug}`}
//                 onClick={() => window.scrollTo(0, 0)}
//                 key={index}
//                 className="relative group overflow-hidden transition-shadow duration-300"
//               >
//                 <img
//                   src={getImage(activity.images[0])}
//                   alt={activity.title}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                   <div className="text-white">
//                     <h3 className="text-xl font-bold mb-1">{activity.title}</h3>
//                     <p className="text-sm line-clamp-2 mb-2">{activity.description}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">No Activities Found</h3>
//             <p className="text-gray-600">We couldn't find any adventure activities at the moment.</p>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default ActivitiesPage;

import { Helmet } from "react-helmet";
import everest from "../Images/everest2.jpg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Import all activity images
import cyclingImg from "../Images/cycling.jpg";
import ultralightImg from "../Images/ultralight.webp";
import paraglidingImg from "../Images/paraglading.jpg";
import paraglidingImg2 from "../Images/paraglading2.jpg";
import kayakingImg from "../Images/kayaking.jpg";
import kayaking1 from "../Images/kayaking1.jpg";
import kayaking2 from "../Images/kayaking2.jpg";
import kayaking3 from "../Images/kayaking3.jpg";
import kayaking4 from "../Images/kayaking4.jpg";
import raftingImg from "../Images/rafting.png";
import balloonImg from "../Images/ballon.webp";
import ziplineImg from "../Images/zipline.jpg";
import bungeeImg from "../Images/jump.jpg";
import bird from "../Images/bird.jpeg";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Create a mapping of image names to imported images
  const imageMap = {
    "cycling.jpg": cyclingImg,
    "ultralight.webp": ultralightImg,
    "paraglading.jpg": paraglidingImg,
    "paraglading2.jpg": paraglidingImg2,
    "kayaking1.jpg": kayaking1,
    "kayaking2.jpg": kayaking2,
    "kayaking3.jpg": kayaking3,
    "kayaking4.jpg": kayaking4,
    "kayaking.jpg": kayakingImg,
    "rafting.png": raftingImg,
    "ballon.webp": balloonImg,
    "zipline.jpg": ziplineImg,
    "jump.jpg": bungeeImg,
    "bird.jpeg": bird,
  };

  // const getImage = (imagePath) => {
  //   if (!imagePath) return everest;
  //   // Extract filename from path (e.g., "activities/filename.jpg" -> "filename.jpg")
  //   const filename = imagePath.split('/').pop();
  //   return imageMap[filename] || everest;
  // };

  const getImage = (imagePath) => {
    if (!imagePath) return everest;
    // If it's already a full URL or starts with http, return as is
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    // If it's a path from API, construct full URL (adjust base URL as needed)
    if (imagePath.startsWith("activities/")) {
      return `http://127.0.0.1:8000/storage/${imagePath}`;
    }
    return everest;
  };

  // Parse HTML content safely
  const parseHtmlContent = (htmlString) => {
    if (!htmlString) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/activities",
        );
        const activitiesData = response.data.data;

        // Transform API data to match expected structure
        // const transformedActivities = activitiesData.map(activity => ({
        //   id: activity.id,
        //   title: activity.title,
        //   slug: activity.slug,
        //   description: parseHtmlContent(activity.description),
        //   images: activity.images ? activity.images.map(img => img.image) : [],
        //   imageUrl: activity.images && activity.images.length > 0
        //     ? getImage(activity.images[0].image)
        //     : everest
        // }));
        const transformedActivities = activitiesData.map((activity) => ({
          id: activity.id,
          title: activity.title,
          slug: activity.slug,
          description: parseHtmlContent(activity.description),
          images: activity.images
            ? activity.images.map((img) => img.image)
            : [],
          imageUrl:
            activity.images && activity.images.length > 0
              ? getImage(activity.images[0].image)
              : everest,
        }));

        setActivities(transformedActivities);
        setLoading(false);
      } catch (err) {
        console.error("Error loading activity data:", err);
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  console.log("Loaded activities:", activities);

  const handleActivityClick = (slug) => {
    navigate(`/activities/${slug}`);
  };

  const pageDescription =
    "Explore thrilling adventure activities like paragliding, rafting, bungee jumping, and more. Plan your next adventure with us.";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Adventure Activities | Discover Thrilling Experiences</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://backtonatureadventure.com/activities"
        />

        <meta
          property="og:title"
          content="Adventure Activities | Discover Thrilling Experiences"
        />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={everest} />
        <meta
          property="og:url"
          content="https://backtonatureadventure.com/activities"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Adventure Activities | Discover Thrilling Experiences"
        />
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
            Activities
          </h2>
          <p className="text-yellow-400 mt-4 text-sm sm:text-md uppercase">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="uppercase text-white hover:text-blue-300">
              Home
            </Link>
            / Activities
          </p>
        </div>
      </div>

      {/* Activities Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        {activities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {activities.map((activity) => (
              <Link
                to={`/activities/${activity.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                key={activity.id}
                className="relative group overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{activity.title}</h3>
                    <p className="text-sm line-clamp-2 mb-2">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              No Activities Found
            </h3>
            <p className="text-gray-600">
              We couldn't find any adventure activities at the moment.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default ActivitiesPage;
