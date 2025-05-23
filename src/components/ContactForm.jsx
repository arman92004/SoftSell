import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [drawPath, setDrawPath] = useState(false);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      setDrawPath(true); // Start path drawing
      const timer = setTimeout(() => setFlipped(true), 3000); // Flip after path animation
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div ref={containerRef} className="relative w-full h-[500px] perspective">
          <motion.div
            className="w-full h-full relative preserve-3d"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 1 }}
          >
            {/* Front (SVG) */}
            <div className="absolute w-full h-full backface-hidden flex justify-center">
              <svg viewBox="0 0 32.666 32.666" className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">

                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={drawPath ? { pathLength: 1 } : {}}
                  transition={{ duration: 4 }}
                  stroke="currentColor"
                  d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                  M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                  C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                  c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                  c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                  c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                  c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                  c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                  c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                  c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                  c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                  l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                  C32.666,7.326,25.339,0,16.333,0z"
                />
              </svg>
            </div>

            {/* Back (Form) */}
            <div className="absolute w-full h-full backface-hidden transform rotateY-180 flex items-center justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white focus:border-none"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-white focus:border-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white focus:border-none"
                />
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${formData.licenseType === '' ? 'text-gray-400' : 'text-white'
                    } border border-white focus:border-none`}
                >
                  <option value="">Select License Type</option>
                  <option value="software">Software License</option>
                  <option value="subscription">Subscription</option>
                  <option value="enterprise">Enterprise License</option>
                </select>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white focus:border-none"
                />
                <div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-md"
                    whileTap={{
                      scale: 0.9,
                      backgroundColor: "#FFD60A",
                      boxShadow: "0 0 20px #FFEB3B",
                    }}
                    animate={{
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    }}
                  >
                    Submit
                  </motion.button>
                </div>

              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 right-0 mt-8 mr-8 p-4 bg-green-500 text-white rounded-md shadow-lg"
        >
          Form submitted successfully!
        </motion.div>
      )}
    </section>
  );
};

export default ContactForm;
