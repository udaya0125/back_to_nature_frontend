import React, { useState } from 'react';
import quotes from '../Images/quotes.svg';
import bg1 from '../Images/bg1.jpg';
import user from '../Images/user.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "I had the most unforgettable travel experience with Back To NaTure. From the moment I booked my trip to the final drop-off, everything was seamless.",
      name: "Bhakti Devkota",
      image: user,
    },
    {
      text: "The team at Back To NaTure made our family vacation magical. The accommodations were top-notch and every activity was thoughtfully curated.",
      name: "Ramesh Shrestha",
      image: user,
    },
    {
      text: "A truly immersive cultural journey! Our guide was passionate and full of local knowledge that brought each destination to life.",
      name: "Anita Bhandari",
      image: user,
    },
    {
      text: "This was my first solo trip and Back To NaTure made me feel completely safe and well taken care of. Highly recommended for solo travelers!",
      name: "Suman Dahal",
      image: user,
    },
    {
      text: "We celebrated our anniversary with Back To NaTure and it couldn’t have been more perfect. Every detail was personalized and special.",
      name: "Priya & Rajesh",
      image: user,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <div
        className="py-12 sm:py-24"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="box-webkit-border box-border">
            <p
              className="text-5xl sm:text-7xl text-stroke text-center sm:text-left"
              style={{ fontFamily: "'Brygada 1918', serif" }}
            >
               Client Review
            </p>
          </div>
          <div className="flex justify-end items-center max-w-4xl mx-auto mb-4 mt-4">
            <img src={quotes} alt="Quotes" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          {/* Testimonial Text */}
          <div className="max-w-3xl mx-auto text-center pt-4 sm:pt-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic ">
              "{testimonials[currentSlide].text}"
            </p>
          </div>

          <div className="border-t border-gray-500 mt-6 sm:mt-8 max-w-2xl mx-auto"></div>

          {/* Author Info & Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              <p className="text-xl sm:text-2xl font-bold ">{testimonials[currentSlide].name}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={prevSlide}
                className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="sm:size-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="sm:size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;