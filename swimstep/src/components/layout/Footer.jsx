import React from 'react';
import { Link } from 'react-router-dom';
import { Footprints, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';


const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center mb-4 md:mb-0">
            <Footprints className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-800">Swim Steps</span>
          </div>
          <div className="flex flex-col items-center md:items-start my-4 md:my-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Swim Steps. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Private Swimming Classes in Klang Valley.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/admin" className="text-sm text-gray-500 hover:text-primary">
              <UserCog className="mr-2 h-4 w-4" />
              Admin Login
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;