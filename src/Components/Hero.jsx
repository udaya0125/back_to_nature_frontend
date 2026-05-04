// Hero.jsx
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import slider2 from '../Images/slider2.png';
import everest from '../Images/north.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSnowflakes = () => {
      container.querySelectorAll('.snowflake').forEach((el) => el.remove());

      const snowflakeCount = window.innerWidth < 768 ? 15 : 40;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        const size = Math.random() * 4 + 2;
        Object.assign(snowflake.style, {
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: Math.random() * 0.7 + 0.3,
          pointerEvents: 'none',
          boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
          zIndex: '10',
        });

        const startX = Math.random() * containerWidth;
        const startY = -10;
        snowflake.style.left = `${startX}px`;
        snowflake.style.top = `${startY}px`;

        container.appendChild(snowflake);

        const duration = Math.random() * 10 + 10;
        const endY = containerHeight + 10;
        const endX = startX + (Math.random() * 100 - 50);

        gsap.to(snowflake, {
          y: endY,
          x: endX,
          duration,
          ease: 'none',
          repeat: -1,
          delay: Math.random() * 5,
        });
      }
    };

    const img = new Image();
    img.src = everest;

    const handleLoad = () => {
      createSnowflakes();
      setLoading(false);
    };

    img.onload = handleLoad;
    img.onerror = handleLoad;

    const fallbackTimer = setTimeout(handleLoad, 1000);

    const handleResize = () => createSnowflakes();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('resize', handleResize);
      gsap.killTweensOf('.snowflake');
      if (container) {
        container.querySelectorAll('.snowflake').forEach((el) => el.remove());
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Image */}
      <img
        src={everest}
        alt="Hero background"
        className="object-cover w-full h-full"
        style={{ imageRendering: 'smooth' }}
        loading="eager"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full max-w-4xl z-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Discover the
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mt-1 sm:mt-2 md:mt-4">
          Adventure Trekking and Travel
        </h2>
        <p className="mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-lg text-gray-100 px-2 sm:px-4">
          Your Best Adventure Deals with nature.
        </p>
        <Link
          to="/trekking"
          onClick={() => window.scrollTo(0, 0)}
          className="group relative inline-flex h-10 sm:h-12 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white px-5 sm:px-6 py-2 text-black hover:bg-[#889bbf] hover:text-white text-sm sm:text-base transition-colors duration-300 mt-4 sm:mt-6"
        >
          <span className="relative z-10">View Adventures</span>
          <span className="absolute inset-0 overflow-hidden">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#00304a] opacity-70 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </Link>
      </div>

      {/* Bottom Slider Image - Constrained to not cause overflow */}
      <div className="absolute bottom-0 left-0 w-full h-auto max-h-[25vh] pointer-events-none">
        <img
          src={slider2}
          alt="Decorative slider"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>

      {/* Snowflakes will be injected here */}
    </div>
  );
};

export default Hero;