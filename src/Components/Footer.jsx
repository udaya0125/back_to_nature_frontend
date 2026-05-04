import React from "react";

import natta from "../Images/natta.png";
import nepal from "../Images/nepal.png";
import nma from "../Images/nma.png";
import ntb from "../Images/ntb.png";
import taan from "../Images/taan.png";
// import visa from '../Images/visa.png'
// import qrpay from '../Images/qrpay.jpg'
// import ips from '../Images/ips.png'
// import american from '../Images/american.png'
// import fonepay from '../Images/fone-pay.png'
import trip from "../Images/trip.png";
import bg4 from "../Images/bg4.jpg";
import bg6 from "../Images/bg6.png";
import { Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const affiliations = [
    { image: nma, link: "https://www.nepalmountaineering.org/" },
    { image: ntb, link: "https://ntb.gov.np/" },
    { image: nepal, link: "https://en.wikipedia.org/wiki/Emblem_of_Nepal" },
    { image: natta, link: "https://natta.org.np/" },
    { image: taan, link: "https://www.taan.org.np/" },
    { image: trip, link: "https://www.tripadvisor.com/" },
  ];
  return (
    <>
      <footer
        className="hidden md:block relative text-white w-full bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${bg4})`,
          alt: "Footer Background Image",
        }}>
        {/* Dark overlay for better readability */}

        {/* Main content container */}
        <div className="relative z-10 mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16 lg:py-20">
          {/* Affiliation section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 md:mb-16 lg:mb-20">
            <div className="text-center lg:text-left max-w-lg">
              <h2 className="text-amber-500 text-2xl sm:text-3xl font-bold">
                Affiliation
              </h2>
              <h3 className="text-white text-3xl sm:text-4xl md:text-5xl  mt-2 sm:mt-3">
                We're Associated With
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {affiliations.map((affiliation, index) => (
                <a
                  key={index}
                  href={affiliation.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                    src={affiliation.image}
                    alt={`Affiliation logo ${index + 1}`}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links and contact info - 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12  max-w-5xl mx-auto cursor-pointer ">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ca8a04]">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { text: "Home", path: "/ " },
                  { text: "About Us", path: "/about" },
                  { text: "Contact Us", path: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover:text-[#ca8a04] transition-colors duration-200 block text-sm md:text-base">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ca8a04]">
                Packages
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { text: "Trekking", path: "/trekking " },
                  { text: "Activities", path: "/activity" },
                  { text: "Tours", path: "/tours" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover:text-[#ca8a04] transition-colors duration-200 block text-sm md:text-base">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ca8a04]">
                Get In Touch
              </h3>
              <div className="not-italic space-y-2 md:space-y-3">
                <div className="">
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a target="_blank" href="">
                      Between 18th 19th street number lakeside 06
                    </a>
                  </p>
                </div>
                <div className="">
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a target="_blank" href="">
                      {" "}
                      P.O.BOX NO: 525{" "}
                    </a>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <PhoneCall />
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a target="_blank" href="tel:061453931">
                      {" "}
                      9840097901{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ca8a04]">
                Social Media
              </h3>
              <div className="not-italic space-y-2 md:space-y-3">
                <div className="flex justify-start items-center gap-2">
                  <FaWhatsapp size={25} />
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a className=" " target="_blank" href="tel:9840097901">
                      9840097901
                    </a>
                  </p>
                </div>

                <div className="flex justify-start items-center gap-4">
                  <a
                    className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base"
                    target="_blank"
                    href="https://www.facebook.com/backtonatureadventure?mibextid=LQQJ4d">
                    <FaFacebook size={25} />
                  </a>
                  <a
                    className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base"
                    target="_blank"
                    href="https://www.instagram.com/backtonatureadventure/">
                    <FaInstagram size={25} />
                  </a>
                  <a
                    className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base"
                    target="_blank"
                    href="https://www.tiktok.com/@back.to.nature.ad?_t=ZS-8uNGghB9vJC&_r=1">
                    <FaTiktok size={25} />
                  </a>

                  <a
                    className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base"
                    target="_blank"
                    href="https://www.linkedin.com/in/back-to-nature-adventure-3458042a3/?originalSubdomain=np">
                    <FaLinkedin size={25} />
                  </a>
                </div>

                <div className="flex justify-start items-center gap-2">
                  <Mail />
                  <a
                    target="_blank"
                    href="mailto:info@backtonatureadventure.com"
                    className="hover:text-[#ca8a04] transition-colors duration-200 block text-sm md:text-base">
                    backtonatureadventure@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="border-t-2 border-gray-400 pt-8 pb-18 ">
            <div className="text-center">
              <p className="text-xs sm:text-sm">
                © {new Date().getFullYear()} Back to Nature Adventure. All
                Rights Reserved. Crafted by{" "}
                <a
                  href="https://www.sait.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ca8a04] transition-colors duration-200">
                  S.A I.T Solution Nepal
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="md:hidden block relative text-white w-full bg-cover  bg-no-repeat bg-center bg-[#00304a]">
        <img
          className="absolute w-[300px] h-[350px] top-[410px] left-[50px] invert opacity-30"
          src={bg6}
          alt="Background Image"
        />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16 lg:py-20">
          {/* Affiliation section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 md:mb-16 lg:mb-20">
            <div className="text-center lg:text-left max-w-lg">
              <h2 className="text-amber-500 text-2xl sm:text-3xl font-bold">
                Affiliation
              </h2>
              <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3">
                We're Associated With
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 pb-4">
              {affiliations.map((affiliation, index) => (
                <a
                  key={index}
                  href={affiliation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20
                 hover:scale-110 transition-transform duration-500 ease-in-out
                 transform-gpu will-change-transform">
                  <img
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg"
                    src={affiliation.image}
                    alt={`Affiliation logo ${index + 1}`}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links and contact info - 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12  max-w-5xl mx-auto cursor-pointer ">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ca8a04]">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { text: "Home", path: "/ " },
                  { text: "About Us", path: "/about" },
                  { text: "Contact Us", path: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover:text-[#ca8a04] transition-colors duration-200 block text-sm md:text-base">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ca8a04]">
                Packages
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { text: "Trekking", path: "/trekking " },
                  { text: "Activities", path: "/activity" },
                  { text: "Tours", path: "/tours" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="hover:text-[#ca8a04] transition-colors duration-200 block text-sm md:text-base">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ca8a04]">
                Get In Touch
              </h3>
              <div className="not-italic space-y-2 md:space-y-3">
                <div className="">
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a target="_blank" href="">
                      Between 18th 19th street number lakeside 06
                    </a>
                  </p>
                </div>
                <div className="">
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a target="_blank" href="">
                      {" "}
                      P.O.BOX NO: 525{" "}
                    </a>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <PhoneCall />
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a target="_blank" href="tel:061453931">
                      {" "}
                      9840097901{" "}
                    </a>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <FaWhatsapp size={25} />
                  <p className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base">
                    <a className=" " target="_blank" href="tel:9840097901">
                      9840097901
                    </a>
                  </p>
                </div>

                <div className="flex justify-start items-center gap-4">
                  <a
                    className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base"
                    target="_blank"
                    href="https://www.facebook.com/backtonatureadventure?mibextid=LQQJ4d">
                    <FaFacebook size={25} />
                  </a>
                  <a
                    className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base"
                    target="_blank"
                    href="https://www.instagram.com/backtonatureadventure/">
                    <FaInstagram size={25} />
                  </a>

                  <a
                    className="hover:text-[#ca8a04] transition-colors duration-200 text-sm md:text-base"
                    target="_blank"
                    href="https://www.linkedin.com/in/back-to-nature-adventure-3458042a3/?originalSubdomain=np">
                    <FaLinkedin size={25} />
                  </a>
                </div>

                <div className="flex justify-start items-center gap-2">
                  <Mail />
                  <a
                    target="_blank"
                    href="mailto:info@backtonatureadventure.com"
                    className="hover:text-[#ca8a04] transition-colors duration-200 block text-sm md:text-base">
                    backtonatureadventure@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="border-t-2 border-gray-400 pt-6 pb-12">
            <div className="text-center">
              <p className="text-xs sm:text-sm">
                © {new Date().getFullYear()} Back to Nature Adventure. All
                Rights Reserved. Crafted by{" "}
                <a
                  href="https://www.sait.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ca8a04] transition-colors duration-200">
                  S.A I.T Solution Nepal
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
