import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Target, Spline, Award } from 'lucide-react';

const processSteps = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: '1. Book Your Trial',
    description: 'Easily book a no-obligation trial session through our form. It\'s the perfect first step to test the waters!',
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: '2. Get a Custom Plan',
    description: 'After the trial, we\'ll create a personalized lesson plan tailored to your or your child\'s specific goals and abilities.',
  },
  {
    icon: <Spline className="h-10 w-10 text-primary" />,
    title: '3. Start Your Lessons',
    description: 'Begin your weekly lessons with our expert instructors, following your custom plan at a pace that works for you.',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: '4. Swim with Confidence',
    description: 'Achieve your goals and gain lifelong water confidence, whether it\'s for safety, fitness, or fun!',
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1,
    },
  }),
};

const OurProcess = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Take the First Step: Our Simple Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            From your first click to your first confident stroke, we make it easy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    {item.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;