import React from "react";
import { motion } from "framer-motion";

const DishCard = ({ title, description, rating, imageUrl }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 font-trirong"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
        />
        <div className="absolute top-2 right-2 bg-[#E63946] text-white py-1 px-2 rounded-full text-sm">
          ★ {rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-[#2D3142]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default DishCard;