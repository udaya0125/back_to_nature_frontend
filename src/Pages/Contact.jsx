import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import everest from '../Images/everest2.jpg';
import { Link } from 'react-router-dom';
import slider2 from '../Images/slider2.png';

const Contact = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Back to Adventure</title>
        <meta name="description" content="Get in touch with Back to Adventure for trekking and adventure tours in Nepal. Contact us via email, phone, or visit our office in Pokhara." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://backtonatureadventure.com/contact " />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us | Back to Adventure" />
        <meta property="og:description" content="Get in touch with Back to Adventure for trekking and adventure tours in Nepal." />
        <meta property="og:image" content={everest} />
        <meta property="og:url" content="https://backtonatureadventure.com/contact " />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Back to Adventure" />
        <meta name="twitter:description" content="Get in touch with Back to Adventure for trekking and adventure tours in Nepal." />
        <meta name="twitter:image" content={everest} />
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat w-full h-[50vh] md:h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${everest})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60"></div>

        {/* Text */}
        <div className="relative z-10 text-center">
          <h2 className='uppercase text-4xl md:text-5xl font-semibold text-white'>Contact Us</h2>
          <p className='text-yellow-400 mt-4 text-md uppercase'>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className='uppercase text-white'>Home</Link> / Contact Us
          </p>
        </div>
      </div>

      {/* Image Slider (Optional Section) */}
      <div className="w-full absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src={slider2} 
          alt="Background" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Contact Content */}
      <div className="bg-white text-black relative">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="">
            <h1 className='uppercase text-xl font-bold mb-6'>Get in Touch</h1>
            <div className="border-t-2 border-gray-400"></div>
            <h2 className='mt-8 uppercase text-xl md:text-5xl font-bold'>Contact us</h2>

            {/* Contact Info */}
            <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">
              <div className="mt-4 flex flex-col items-center">
                <h2 className='text-2xl font-bold'>Location</h2>
                <p className='mt-2'>Between 18th 19th street number lakeside 06</p>
              </div>
              <div className="border-r-2 border-gray-400 h-12 hidden md:block"></div>
              
              <div className="mt-4 flex flex-col items-center">
                <h2 className='text-2xl font-bold'>Email address</h2>
                <p className='mt-2'>backtonatureadventure@gmail.com</p>
              </div>
              <div className="border-r-2 border-gray-400 h-12 hidden md:block"></div>
              
              <div className="mt-4 flex flex-col items-center">
                <h2 className='text-2xl font-bold'>Phone number</h2>
                <p className='mt-2'>+977  9840097901</p>
              </div>
            </div>

            {/* Form and Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {/* Contact Form */}
              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00304a]" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00304a]" 
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00304a]" 
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00304a]" 
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  {/* Terms and Conditions Checkbox */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="focus:ring-[#00304a] h-4 w-4 text-[#00304a] border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                          I agree to the <a href="/terms" className="text-[#00304a] hover:underline">Terms and Conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-[#00304a] text-white px-6 py-3 rounded hover:bg-[#001a2c] transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Google Map */}
              <div className="h-full rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.864255022122!2d83.9637973150829!3d28.212996982573906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995946a5b04d7a9%3A0x8e9e8a3a5d3e1b1e!2sLakeside%2C%20Pokhara%2033700%2C%20Nepal!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp" 
                  width="100%" 
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen="" 
                  loading="lazy"
                  title="Google Map of Lakeside, Pokhara"
                  className="min-h-[400px] w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;