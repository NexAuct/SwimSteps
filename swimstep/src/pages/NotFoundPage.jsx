import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Swim Steps</title>
      </Helmet>
      <div className="py-20 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AlertTriangle className="mx-auto h-16 w-16 text-destructive" />
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-800">404</h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600">Oops! Page not found.</p>
            <p className="mt-2 max-w-xl mx-auto text-gray-500">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button asChild className="mt-8" size="lg">
                <Link to="/">Go back to Homepage</Link>
            </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;