import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily R.',
    avatarText: 'A smiling mother with her young son by the pool',
    avatarAlt: 'Avatar of Emily R.',
    quote: 'Coach Sarah is incredibly patient — my son looks forward to every single lesson! We&apos;ve seen so much progress.',
    stars: 5,
  },
  {
    name: 'David L.',
    avatarText: 'A father giving a thumbs up next to a swimming pool',
    avatarAlt: 'Avatar of David L.',
    quote: 'After just a few classes, my daughter could swim confidently across the pool! The one-on-one attention made all the difference.',
    stars: 5,
  },
  {
    name: 'Aisha K.',
    avatarText: 'A woman in athletic wear smiling warmly',
    avatarAlt: 'Avatar of Aisha K.',
    quote: 'Great communication and flexibility with scheduling. Highly recommended for any parent looking for quality swim lessons.',
    stars: 5,
  },
  {
    name: 'Michael C.',
    avatarText: 'A happy man in his 30s standing by the water',
    avatarAlt: 'Avatar of Michael C.',
    quote: 'As an adult learning to swim, I was nervous. The instructors made me feel comfortable and I&apos;m finally confident in the water!',
    stars: 5,
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

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            <span role="img" aria-label="speech bubble">💬</span> What Our Swimmers Are Saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Real stories from our happy swimmers and their families.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full flex flex-col justify-between border-2 border-transparent hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img  className="w-12 h-12 rounded-full mr-4 object-cover" alt={testimonial.avatarAlt} src="https://images.unsplash.com/photo-1561092512-71d917b1b0c4" />
                    <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <div className="flex items-center">
                            {Array(testimonial.stars).fill(0).map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;