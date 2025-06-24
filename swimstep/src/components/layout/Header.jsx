import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Footprints, X, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { to: '/about', label: 'Who It\'s For' },
  { to: '/benefits', label: 'Why Us' },
  { to: '/testimonials', label: 'Testimonials' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center cursor-pointer">
            <Footprints className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-gray-800">Swim Steps</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button key={link.to} variant="ghost" asChild>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-primary cursor-pointer text-base ${isActive ? 'text-primary font-semibold' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </Button>
            ))}
             <Button asChild>
                <Link to="/booking" className="cursor-pointer">
                  Book a Trial
                </Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden pb-4"
        >
          <nav className="flex flex-col items-center space-y-2">
            {navLinks.map((link) => (
              <Button key={link.to} variant="ghost" asChild>
                <NavLink
                  to={link.to}
                  className="text-gray-600 hover:text-primary cursor-pointer w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </Button>
            ))}
             <Button asChild className="w-4/5 mt-2">
                <Link to="/booking" onClick={() => setIsOpen(false)} className="cursor-pointer">
                  Book a Trial
                </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;