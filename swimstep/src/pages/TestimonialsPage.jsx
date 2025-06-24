import React from 'react';
import { Helmet } from 'react-helmet';
import Testimonials from '@/components/sections/Testimonials';

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | Swim Steps</title>
        <meta name="description" content="Read what parents and students are saying about their experience with Swim Steps' private swimming lessons." />
      </Helmet>
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;