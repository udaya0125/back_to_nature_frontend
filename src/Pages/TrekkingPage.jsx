import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import everest from '../Images/everest.jpg';
import { Link } from 'react-router-dom';
import hiddenlake from '../Images/hiddenlake.jpg';
import khumai from '../Images/khumai.jpg';
import kori from '../Images/kori.jpg';
import poonhill from '../Images/poonhill.jpg';
import bg5 from '../Images/bg1.jpg';
import north from '../Images/north.jpg';
import data from '../Data/Data.json';

const TrekkingPage = () => {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageMap = {
    'north.jpg': north,
    'bg1.jpg': bg5,
    'hiddenlake.jpg': hiddenlake,
    'khumai.jpg': khumai,
    'kori.jpg': kori,
    'poonhill.jpg': poonhill,
    'everest.jpg': everest,
  };

  const getImage = (filename) => {
    return imageMap[filename] || north; // fallback
  };

  // Load trek data from local JSON
useEffect(() => {
  try {
    // Assume 'data' is already available (e.g., imported or in scope)
    const trekkingData = data.filter(item => item.category === "trekking");

    setTreks(trekkingData);
    setLoading(false);
  } catch (err) {
    console.error("Error loading trekking data:", err);
    setLoading(false);
  }
}, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-center">
          <p>Error loading trek data:</p>
          <p>{error}</p>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  // SEO Meta Description
  const pageDescription = "Explore the best trekking destinations including Everest Base Camp, Annapurna, Hidden Lake, and more. Plan your Himalayan adventure now.";
  const pageUrl = "https://backtonatureadventure.com/trekking ";

  // Structured Data (Schema.org for rich snippets)
  const schemaData = {
    "@context": "https://schema.org ",
    "@type": "ItemList",
    "name": "Trekking Adventures in Nepal",
    "description": pageDescription,
    "url": pageUrl,
    "itemListElement": treks.map((trek, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://backtonatureadventure.com/trekkings/ ${trek.slug}`,
      "name": trek.title,
      "description": trek.description
    }))
  };

  return (
    <>
      {/* SEO with React Helmet */}
      <Helmet>
        <title>Trekking Adventures | Best Himalayan Treks in Nepal</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Trekking Adventures | Best Himalayan Treks in Nepal" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={everest} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trekking Adventures | Best Himalayan Treks in Nepal" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={everest} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat w-full h-[40vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${everest})` }}
      >
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className='uppercase text-3xl sm:text-4xl md:text-5xl font-semibold text-white'>Trekking</h2>
          <p className='text-yellow-400 mt-4 text-sm sm:text-md uppercase'>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className='uppercase text-white'>Home</Link> / Trekking
          </p>
        </div>
      </div>

      {/* Trekking Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        {treks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {treks.map((trek, index) => (
              <Link 
                to={`/trekkings/${trek.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                key={index}
                className="relative group overflow-hidden transition-shadow duration-300"
              >
                <img
                  src={getImage(trek.images[0])}
                  alt={trek.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{trek.title}</h3>
                    <p className="text-sm line-clamp-2 mb-2">{trek.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">No Treks Found</h3>
            <p className="text-gray-600">We couldn't find any trekking options at the moment.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default TrekkingPage;