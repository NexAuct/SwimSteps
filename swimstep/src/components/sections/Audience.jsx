import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, School, User } from 'lucide-react';

const audiences = [
  {
    icon: <Baby className="h-10 w-10 text-primary" />,
    title: 'Kids (Ages 4+)',
    description: 'A gentle, fun introduction to swimming, building water confidence and safety skills from a young age.',
  },
  {
    icon: <School className="h-10 w-10 text-primary" />,
    title: 'Teens',
    description: 'Master stroke technique, boost confidence &amp; stamina for both competitive and recreational swimming.',
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: 'Adults',
    description: 'From absolute beginners overcoming fear to advanced swimmers refining their form—it&apos;s never too late to learn!',
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

const Audience = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Who Are Our Classes For?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We offer tailored swimming programs for every age and skill level.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
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
                  <CardTitle className="mt-4">{item.title}</CardTitle>
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

export default Audience;