import { motion, AnimatePresence } from "framer-motion";

const AlertBanner = ({ type = "success", message, isVisible }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <AnimatePresence>
      {/* conditional rendering --> not in dom*/}
      {isVisible && (
        <motion.div
          className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertBanner;
