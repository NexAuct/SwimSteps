import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img  className="w-full h-full object-cover" alt="serene swimming pool with clear blue water" src="https://images.unsplash.com/photo-1679022357447-ed74c2432d6e" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            <span role="img" aria-label="swimmer emoji">🏊‍♀️</span> Learn to Swim with Confidence
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Private Swim Classes for Kids & Adults in Klang Valley
          </p>
          <p className="mt-6 text-xl md:text-2xl font-semibold text-primary">
            🌟 Personalised Coaching. Flexible Scheduling. Real Results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
                <Link to="/booking" className="cursor-pointer">
                    Book Your Free Trial
                </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link to="/benefits" className="cursor-pointer">
                    Learn More
                </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;