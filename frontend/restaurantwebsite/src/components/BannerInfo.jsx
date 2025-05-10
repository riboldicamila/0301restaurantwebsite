import { motion } from "framer-motion";
import { X } from 'lucide-react';

const Banner = ({ onClose }) => {
    return (
      <motion.div 
        className="fixed top-16 left-0 right-0 z-50 mx-auto w-full max-w-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="backdrop-blur-md bg-white/90 border border-gray-200 text-gray-800 p-4 rounded-lg shadow-lg mx-4 font-trirong">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-2 w-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <p className="font-medium">
                <span className="text-red-500 font-semibold">Online store in progress.</span> Please come back 30/05 to shop our products.
              </p>
            </div>
            <button 
              onClick={onClose} 
              className="ml-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  export default Banner;