import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#023047] to-[#219EBC] text-white h-screen flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 leading-tight tracking-tight text-[#FFB703]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Unlock the Value of Your Software Licenses
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg mb-6 font-light max-w-lg mx-auto text-[#8ECAE6]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          We make it easy to sell your software licenses quickly and securely.
          Get an instant valuation and cash out in no time.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="bg-[#FB8500] hover:bg-[#FFB703] text-[#023047] py-3 px-6 rounded-full text-xl font-semibold shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            duration: 2,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Sell My Licenses
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
