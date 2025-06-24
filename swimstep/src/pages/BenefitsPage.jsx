import React from 'react';
import { Helmet } from 'react-helmet';
import Benefits from '@/components/sections/Benefits';

const BenefitsPage = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Us | Swim Steps</title>
        <meta name="description" content="Learn about the benefits of choosing Swim Steps: private classes, flexible scheduling, certified instructors, and a safe environment." />
      </Helmet>
      <Benefits />
    </>
  );
};

export default BenefitsPage;