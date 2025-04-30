import React from "react";
import { motion } from "framer-motion";

const BenefitCard = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-md text-center"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="inline-block mb-4"
        whileHover={{ 
          rotate: 5,
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-[#2D3142]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;