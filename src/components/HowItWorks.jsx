import { useEffect, useRef } from 'react';
import { FaUpload, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

const steps = [
  { title: 'Upload License', icon: <FaUpload />, delay: 0 },
  { title: 'Get Valuation', icon: <FaDollarSign />, delay: 0.5 },
  { title: 'Get Paid', icon: <FaCheckCircle />, delay: 1 },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const lineControls = useAnimation();
  const stepControls = useAnimation();

useEffect(() => {
  if (isInView) {
    lineControls.start({
      width: '100%',
      transition: { duration: 1.5, ease: 'easeInOut' },
    });
    stepControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: steps[i].delay, duration: 0.5 },
    }));
  } else {
    // Reset animation when out of view
    lineControls.set({ width: 0 });
    stepControls.set((i) => ({
      opacity: 0,
      y: 30,
    }));
  }
}, [isInView, lineControls, stepControls]);


  return (
    <section className="py-10 sm:py-14 md:py-20 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          How It Works
        </h2>
        {/* Animated Loader Line */}
        <div className="bg-white rounded-2xl shadow-xl px-3 sm:px-6 md:px-8 py-6 md:py-20 relative">
          {/* Base line */}
          <div className="absolute top-14 sm:top-auto  left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2 z-0" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-14 sm:top-auto left-0 h-[2px] bg-[#023047] -translate-y-1/2 z-10"
            initial={{ width: 0 }}
            animate={lineControls}
          />

          {/* Step indicators */}
          <div className="relative flex justify-between items-center z-20">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="w-1/3 flex flex-col items-center"
                custom={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={stepControls}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#023047] text-white flex items-center justify-center text-2xl sm:text-3xl md:text-5xl shadow-lg md:-translate-y-1/2 z-30">
                  {step.icon}
                </div>
                <p className="mt-2 sm:mt-2 text-center text-xs sm:text-base md:text-lg text-[#023047] font-semibold">{step.title}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
