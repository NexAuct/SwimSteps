import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainLayout from '@/components/layout/MainLayout';
import AdminLayout from '@/components/layout/AdminLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BenefitsPage from '@/pages/BenefitsPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import BookingPage from '@/pages/BookingPage';
import DashboardPage from '@/pages/admin/DashboardPage';
import BookingsPage from '@/pages/admin/BookingsPage';
import SettingsPage from '@/pages/admin/SettingsPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <>
      <Helmet>
        <title>Swim Steps | Private Swimming Classes in Klang Valley</title>
        <meta
          name="description"
          content="Private swimming lessons for kids, teens, and adults in Klang Valley with Swim Steps. Learn to swim with certified instructors. Book your free trial today!"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="benefits" element={<BenefitsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;