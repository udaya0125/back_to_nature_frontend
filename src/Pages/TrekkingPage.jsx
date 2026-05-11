import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Import all images
import everest from '../Images/everest2.jpg';
import hiddenlake from '../Images/hiddenlake.jpg';
import khumai from '../Images/khumai.jpg';
import kori from '../Images/kori.jpg';
import poonhill from '../Images/poonhill.jpg';
import bg5 from '../Images/bg1.jpg';
import north from '../Images/north.jpg';
import mardi1 from '../Images/mardihimal1.jpg';
import mardi from '../Images/mardihimal.jpg';
import abc1 from '../Images/abc.jpg';
import abc2 from '../Images/abc2.jpg';
import abc3 from '../Images/abc3.jpg';
import abc4 from '../Images/abc4.jpg';
import abc5 from '../Images/abc5.jpg';
import abc6 from '../Images/abc1.jpg';
import lomanthang from '../Images/lomanthang.jpeg';
import lomanthang1 from '../Images/lomanthang1.jpg';
import lomanthang2 from '../Images/lomanthang2.jpg';

import data from '../Data/Data.json';

const TrekkingPage = () => {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Corrected image mapping with unique assignments
  const imageMap = {
    // Everest
    'everest2.jpg': everest,
    'everest.jpg': everest,
    
    // North
    'north.jpg': north,
    
    // ABC Trek - each gets unique image
    'abc.jpg': abc1,
    'abc1.jpg': abc6,  // Using abc6 for abc1.jpg filename
    'abc2.jpg': abc2,
    'abc3.jpg': abc3,
    'abc4.jpg': abc4,
    'abc5.jpg': abc5,
    
    // Mardi Himal
    'mardihimal.jpg': mardi,
    'mardihimal1.jpg': mardi1,

    // Lo Manthang

    'lomanthang.jpeg': lomanthang,
    'lomanthang1.jpg': lomanthang1,
    'lomanthang2.jpg': lomanthang2,

    // Other treks
    'bg1.jpg': bg5,
    'hiddenlake.jpg': hiddenlake,
    'khumai.jpg': khumai,
    'kori.jpg': kori,
    'poonhill.jpg': poonhill,
  };

  const getImage = (filename) => {
    // Clean the filename in case there are path components
    const cleanFilename = filename.split('/').pop();
    
    if (imageMap[cleanFilename]) {
      return imageMap[cleanFilename];
    }
    
    // Fallback images based on trek type
    if (cleanFilename.includes('everest')) return everest;
    if (cleanFilename.includes('abc')) return abc1;
    if (cleanFilename.includes('mardi')) return mardi;
    if (cleanFilename.includes('poonhill')) return poonhill;
    
    console.warn(`Image not found for: ${cleanFilename}, using default`);
    return north; // default fallback
  };

  // Debug function to check what's happening
  const debugImageLoading = (trek) => {
    console.log('Trek:', trek.title);
    console.log('Image filenames:', trek.images);
    trek.images.forEach((img, index) => {
      const cleanImg = img.split('/').pop();
      console.log(`Image ${index}: ${img} -> ${cleanImg} -> exists: ${!!imageMap[cleanImg]}`);
    });
  };

  // Load trek data from local JSON
  useEffect(() => {
    try {
      const trekkingData = data.filter(item => item.category === "trekking");
      
      // Debug: Check image mapping for each trek
      trekkingData.forEach(trek => {
        debugImageLoading(trek);
      });
      
      setTreks(trekkingData);
      setLoading(false);
    } catch (err) {
      console.error("Error loading trekking data:", err);
      setError(err.message);
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
  const pageUrl = "https://backtonatureadventure.com/trekking";

  // Structured Data (Schema.org for rich snippets)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Trekking Adventures in Nepal",
    "description": pageDescription,
    "url": pageUrl,
    "itemListElement": treks.map((trek, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://backtonatureadventure.com/trekkings/${trek.slug}`,
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
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-24">
        {treks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {treks.map((trek, index) => (
              <Link 
                to={`/trekkings/${trek.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                key={trek.id || index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={getImage(trek.images[0])}
                    alt={trek.title}
                    className="w-full h-[450px] sm:h-[500px] lg:h-[550px] xl:h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image for ${trek.title}:`, trek.images[0]);
                      e.target.src = north; // Fallback if image fails to load
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <div className="text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300">
                      {trek.title}
                    </h3>
                    <p className="text-base sm:text-lg text-white line-clamp-2 mb-6">
                      {trek.description}
                    </p>
                    
                    {/* Pricing Section */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/20">
                      <div className="flex flex-col">
                        <span className="text-sm text-white uppercase tracking-wide">Starting from</span>
                        <span className="text-3xl sm:text-4xl font-bold mt-1">
                          ${trek.price}
                        </span>
                        <span className="text-sm text-white mt-1">per person</span>
                      </div>
                      <div className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-base transition-colors duration-300">
                        View Details
                      </div>
                    </div>
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