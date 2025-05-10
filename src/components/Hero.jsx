import { motion } from 'framer-motion';
import Logo from "../assets/logo.png";
import { FaWindows, FaJira, FaLinux, FaGamepad, FaMicrosoft, FaGoogleDrive, FaAtlassian, FaSalesforce, FaAws } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#023047] to-[#219EBC] text-white h-screen flex items-center justify-center px-6 py-12 relative">
      {/* Top-left logo */}
      <motion.img
        src={Logo}
        alt="SoftSell Logo"
        className="absolute top-6 left-6 w-20 md:w-32 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Main Content */}
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-[#FFB703]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Unlock the Value of Your Software Licenses
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          className="text-md md:text-2xl mb-6 font-light max-w-lg mx-auto text-white"
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

        <div className="hidden sm:flex justify-center gap-6 mt-12 text-6xl text-white opacity-80">
          <div className="hidden sm:flex justify-center gap-6 mt-12 text-6xl text-white opacity-80">
            {[FaWindows, FaGoogleDrive, FaSalesforce, FaAtlassian, FaAws, FaJira, FaMicrosoft, FaGamepad].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: true }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
