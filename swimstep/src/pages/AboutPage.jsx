import React from 'react';
import { Helmet } from 'react-helmet';
import Audience from '@/components/sections/Audience';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Who It's For | Swim Steps</title>
        <meta name="description" content="Swim Steps offers private swimming classes for all ages: kids, teens, and adults. Find the perfect program for you." />
      </Helmet>
      <Audience />
    </>
  );
};

export default AboutPage;