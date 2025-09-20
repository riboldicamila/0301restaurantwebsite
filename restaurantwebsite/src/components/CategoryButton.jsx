import { motion } from "framer-motion";

const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      transition={{ delay: 0.6, duration: 0.6 }}
      className={`px-6 py-2 mx-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 ${
        isActive ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {category.name}
    </motion.button>
  );
};

export default CategoryButton;
