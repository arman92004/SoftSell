import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaTrophy } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-white">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Fast Process */}
          <motion.div
            className="bg-[#023047] text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <FaRocket className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 mb-4 sm:mb-5" />
            <h3 className="text-[#FFB703] text-lg sm:text-xl md:text-2xl font-semibold mb-2">Fast Process</h3>
            <p className="text-[#8ECAE6] text-sm sm:text-base md:text-lg">Get an instant quote and fast payout with minimal hassle.</p>
          </motion.div>

          {/* Trusted by Many */}
          <motion.div
            className="bg-[#023047] text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <FaShieldAlt className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 mb-4 sm:mb-5" />
            <h3 className="text-[#FFB703] text-lg sm:text-xl md:text-2xl font-semibold mb-2">Trusted by Many</h3>
            <p className="text-[#8ECAE6] text-sm sm:text-base md:text-lg">We have a proven track record of secure and trusted transactions.</p>
          </motion.div>

          {/* High Valuation */}
          <motion.div
            className="bg-[#023047] text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
          >
            <FaTrophy className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 mb-4 sm:mb-5" />
            <h3 className="text-[#FFB703] text-lg sm:text-xl md:text-2xl font-semibold mb-2">High Valuation</h3>
            <p className="text-[#8ECAE6] text-sm sm:text-base md:text-lg">Get the best value for your software licenses, guaranteed.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
