import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RestaurantGallery = ({ restaurantImages }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 bg-slate-800 font-trirong">
      <motion.h2 
        className="text-3xl font-bold text-red-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Our Restaurant
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          ref={ref}
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {restaurantImages.map((url, i) => (
            <motion.div
              key={i}
              className="w-64 h-48 rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 } 
              }}
            >
              <img
                src={url}
                alt={`Restaurant image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RestaurantGallery;