import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-20 md:py-24 bg-primary/90 text-white overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-primary rounded-full opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span role="img" aria-label="wave">🌊</span> Ready to Dive In?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            Spots are limited—secure your slot today and take the first step toward water confidence!
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild className="text-primary font-bold hover:bg-slate-200">
                <Link to="/booking" className="cursor-pointer">
                    Book Your Free Trial Now
                </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;