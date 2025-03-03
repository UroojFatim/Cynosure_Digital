import { motion } from 'framer-motion';
import providerImage from '../assets/providersection.png'; // Ensure the correct path

const ProvidersSection = () => {
  return (
    <section className="relative bg-sky-950 text-white h-screen px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden">
      {/* Background Animation - Enhanced Twinkling Stars */}
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </motion.div>

      {/* Animated Lines */}
      <motion.div 
        className="absolute w-full h-full overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-40 bg-orange-500 opacity-50"
            initial={{ y: '-100%' }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: Math.random() * 4 + 2, repeat: Infinity, delay: Math.random() * 2 }}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Partner with Us for Advanced Skincare</h2>
        <p className="mt-4 text-lg text-gray-200">
          Join our network of professional skincare providers and offer cutting-edge treatments to your clients.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Join Now
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, ease: 'easeOut' }}
        className="md:w-1/2 flex justify-center relative"
      >
        <motion.div 
          initial={{ scale: 0.9, rotate: -10 }} 
          whileInView={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full max-w-lg p-4 bg-white rounded-full shadow-xl overflow-hidden"
        >
          <img src={providerImage} alt="Skincare treatment for providers" className="w-full h-auto rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProvidersSection;
