import React from 'react';
import { Helmet } from 'react-helmet';
import BookingForm from '@/components/sections/BookingForm';

const BookingPage = () => {
  return (
    <>
      <Helmet>
        <title>Book a Trial | Swim Steps</title>
        <meta name="description" content="Book your free trial or consultation for private swimming lessons in Klang Valley. Fill out the form to get started." />
      </Helmet>
      <BookingForm />
    </>
  );
};

export default BookingPage;