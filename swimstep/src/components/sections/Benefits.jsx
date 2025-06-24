import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Clock, Medal, LifeBuoy } from 'lucide-react';

const benefits = [
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Private & Small Group Classes',
    description: 'Receive personalized, one-on-one instruction or learn in a cozy group. We ensure maximum attention for rapid progress.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Flexible Scheduling',
    description: 'Life is busy, we get it. We offer adaptable scheduling, including weekends and evenings, to fit your family’s lifestyle.',
  },
  {
    icon: <Medal className="h-8 w-8 text-primary" />,
    title: 'Certified, Passionate Instructors',
    description: 'Our coaches aren\'t just certified; they\'re enthusiastic mentors dedicated to making swimming a joyful and rewarding experience.',
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: 'Safe & Supportive Environment',
    description: 'We foster a positive, non-judgmental atmosphere where every student feels secure, confident, and eager to learn.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const Benefits = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Why Choose Swim Steps?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Experience the difference that truly personalized coaching makes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
                <p className="mt-1 text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;