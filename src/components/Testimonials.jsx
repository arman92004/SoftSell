import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      "SoftSell made the process of selling our software licenses so simple and fast. I received payment in under 48 hours!",
    name: 'John Doe',
    role: 'CEO, Tech Innovations',
  },
  {
    quote:
      "A great service with fantastic customer support. I highly recommend SoftSell to anyone looking to sell licenses!",
    name: 'Jane Smith',
    role: 'COO, Software Corp',
  },
  {
    quote:
      "We were amazed by the valuation we got. SoftSell really helped us recover value from unused software.",
    name: 'Raj Patel',
    role: 'IT Manager, NexaWare',
  },
  {
    quote:
      "Excellent experience end-to-end. SoftSell was responsive, transparent, and delivered on their promise.",
    name: 'Lisa Tran',
    role: 'Procurement Lead, TechBridge',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  const nextPair = () => {
    setIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevPair = () => {
    setIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextPair, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, [index]);

  const currentPair = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentPair.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-left"
              >
                <p className="text-base sm:text-lg text-gray-700 mb-4 italic leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm sm:text-base">{testimonial.role}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => {
              prevPair();
              resetTimer();
            }}
            className="px-4 py-2 text-sm sm:text-base bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
          >
            Prev
          </button>
          <button
            onClick={() => {
              nextPair();
              resetTimer();
            }}
            className="px-4 py-2 text-sm sm:text-base bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
