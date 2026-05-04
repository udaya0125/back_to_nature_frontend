import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Gsap = () => {
    const locations = [
        {
            id: 1,
            x: 30,
            y: 42,
            title: "Summit Peak",
            description: "The highest point at 2,500m elevation with panoramic views"
        },
        {
            id: 2,
            x: 60,
            y: 70,
            title: "Crystal Lake",
            description: "Alpine lake known for its clear waters and trout fishing"
        },
        {
            id: 3,
            x: 45,
            y: 25,
            title: "Eagle Ridge",
            description: "Popular spot for bird watching and sunset photos"
        },
        {
            id: 4,
            x: 75,
            y: 50,
            title: "Forest Trail",
            description: "Main hiking path through ancient pine forests"
        }
    ];

    const [activeLocation, setActiveLocation] = useState(null);
    const [clickedLocation, setClickedLocation] = useState(null);
    const [mobileTooltip, setMobileTooltip] = useState(null); // For centered tooltip
    const containerRef = useRef(null);
    const descriptionRefs = useRef({});

    const handleLocationClick = (locationId) => {
        const clickedLoc = locations.find(loc => loc.id === locationId);

        if (clickedLocation === locationId) {
            setClickedLocation(null);
        } else {
            setClickedLocation(locationId);
            // Bring the clicked description to front
            Object.keys(descriptionRefs.current).forEach(key => {
                if (descriptionRefs.current[key]) {
                    descriptionRefs.current[key].style.zIndex = '10';
                }
            });
            if (descriptionRefs.current[locationId]) {
                descriptionRefs.current[locationId].style.zIndex = '50';
            }
        }

        // Show mobile tooltip only on small screens
        if (window.innerWidth < 640) {
            setMobileTooltip(clickedLoc);

            setTimeout(() => {
                setMobileTooltip(null);
            }, 3000);
        }
    };

    useEffect(() => {
        const createSnowflakes = () => {
            const container = containerRef.current;
            if (!container) return;
            const existingSnowflakes = container.querySelectorAll('.snowflake');
            existingSnowflakes.forEach(flake => flake.remove());
            const snowflakeCount = 50;
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                const size = Math.random() * 4 + 2;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                snowflake.style.opacity = Math.random() * 0.5 + 0.5;
                const startX = Math.random() * containerWidth;
                const startY = -10;
                snowflake.style.position = 'absolute';
                snowflake.style.left = `${startX}px`;
                snowflake.style.top = `${startY}px`;
                snowflake.style.backgroundColor = 'white';
                snowflake.style.borderRadius = '50%';
                snowflake.style.pointerEvents = 'none';
                container.appendChild(snowflake);

                const duration = Math.random() * 10 + 5;
                const endY = containerHeight + 10;
                const endX = startX + (Math.random() * 100 - 50);

                gsap.to(snowflake, {
                    y: endY,
                    x: endX,
                    duration: duration,
                    ease: 'none',
                    repeat: -1,
                    delay: Math.random() * 5
                });
            }
        };

        createSnowflakes();
        const handleResize = () => createSnowflakes();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className="relative bg-white py-12 md:py-24">
                {/* Connection to previous section */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                <div className="max-w-7xl px-4 mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="bg-[#f5f5f6] bg-opacity-20 backdrop-blur-md rounded-full border border-black/40 border-opacity-30 py-2 px-6 md:py-3 md:px-8 shadow-lg">
                            <h2 className="uppercase text-xs md:text-[12px] tracking-widest font-medium text-black">travel layout pack</h2>
                        </div>
                    </div>

                    <div className="text-center pt-2 md:pt-4">
                        <h1 className="text-black text-4xl md:text-6xl lg:text-[70px] bg-opacity-50">
                            Conquer the
                        </h1>
                        <p className="text-black text-5xl md:text-7xl lg:text-[90px] font-bold bg-opacity-50 mt-2 md:mt-0">
                            Frozen Trails
                        </p>
                    </div>

                    <div className="relative w-full mt-4 md:mt-8 overflow-hidden" ref={containerRef}>
                        <img 
                            src="images/mountain.png" 
                            className='w-full' 
                            alt="Snowy mountain landscape with marked locations" 
                        />

                        {locations.map(location => (
                            <div
                                key={location.id}
                                className="absolute cursor-pointer group"
                                style={{
                                    left: `${location.x}%`,
                                    top: `${location.y}%`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                                onMouseEnter={() => setActiveLocation(location)}
                                onMouseLeave={() => {
                                    if (clickedLocation !== location.id) {
                                        setActiveLocation(null);
                                    }
                                }}
                                onClick={() => handleLocationClick(location.id)}
                            >
                                <div className="relative">
                                    <div className={`
                                        bg-black rounded-full p-1 md:p-2 flex items-center justify-center
                                        transition-all duration-300 ease-in-out
                                        ${activeLocation?.id === location.id || clickedLocation === location.id ? 'scale-125' : 'scale-100'}
                                        ${clickedLocation === location.id ? 'ring-2 md:ring-4 ring-yellow-400' : ''}
                                        group-hover:scale-125 group-hover:shadow-lg
                                        ${clickedLocation !== location.id ? 'animate-pulse hover:animate-none' : ''}
                                        shadow-md hover:shadow-xl
                                        hover:bg-gray-900
                                        relative overflow-visible
                                        z-10
                                    `}>
                                        <svg
                                            className="w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-500"></div>
                                    </div>

                                    {/* Tooltip for larger screens */}
                                    {(activeLocation?.id === location.id || clickedLocation === location.id) && (
                                        <div 
                                            ref={el => descriptionRefs.current[location.id] = el}
                                            className="absolute left-36 -translate-x-1/2 bottom-full mb-2 w-56 md:w-64 bg-white p-3 md:p-4 rounded-lg shadow-xl transition-all duration-200 origin-bottom animate-fadeIn hidden sm:block"
                                            style={{
                                                zIndex: clickedLocation === location.id ? '50' : '20'
                                            }}
                                        >
                                            <h1 className="font-bold text-base md:text-lg text-gray-800 mb-1">{location.title}</h1>
                                            <p className="text-gray-600 text-xs md:text-sm">{location.description}</p>
                                            <div className="absolute left-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform -translate-x-1/2"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        <style jsx global>{`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translate(-50%, -10px); }
                                to { opacity: 1; transform: translate(-50%, 0); }
                            }
                            .animate-fadeIn {
                                animation: fadeIn 0.3s ease-out forwards;
                            }
                        `}</style>
                    </div>

                    <p className='text-[#686868] text-sm md:text-base text-center mt-6 md:mt-8'>
                        For any more information.  <a href="/" className='text-black font-medium underline hover:no-underline'>Contact Now!</a>
                    </p>
                </div>
            </section>

            {/* Centered Mobile Tooltip */}
            {mobileTooltip && (
                <div className="fixed top-1/2 left-1/2 flex items-center justify-center z-50 sm:hidden">
                    <div className="bg-white p-4 rounded-lg shadow-2xl max-w-xs mx-auto text-center animate-fadeIn">
                        <h1 className="font-bold text-base text-gray-800 mb-1">{mobileTooltip.title}</h1>
                        <p className="text-gray-600 text-sm">{mobileTooltip.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gsap;