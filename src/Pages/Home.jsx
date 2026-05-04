import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Destination from "../Components/Destination";
import Activities from "../Components/Activities";
import Packages from "../Components/Packages";
import Testimonials from "../Components/Testimonials";
import WesternUnion from "../Components/WesternUnion";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Destination />
      <Activities />
      <Packages />
      <WesternUnion />
      <Testimonials />
    </>
  );
};

export default Home;
