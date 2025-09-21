import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer } from "../../utils/animations";

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // only first scroll 
    threshold: 0.15, //percentage of element in viewport
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} 
      variants={staggerContainer} //key to having childs 
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
