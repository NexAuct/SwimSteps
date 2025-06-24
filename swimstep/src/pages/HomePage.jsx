import React from 'react';
import Hero from '@/components/sections/Hero';
import Audience from '@/components/sections/Audience';
import Benefits from '@/components/sections/Benefits';
import OurProcess from '@/components/sections/OurProcess';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Audience />
      <Benefits />
      <OurProcess />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;