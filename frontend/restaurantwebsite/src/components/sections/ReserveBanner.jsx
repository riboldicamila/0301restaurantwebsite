import { motion } from "framer-motion";
import Button from "../Button";
import AnimatedSection from "./AnimatedSection";
import { fadeInUp } from "../../utils/animations";

const ReserveBanner = ({ onReserveClick }) => {
  return (
    <div className="bg-[#2D3142] text-[#F1FAEE] py-16">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <motion.h2
            className="text-3xl font-bold mb-6 text-[#E63946] font-trirong"
            variants={fadeInUp}
          >
            READY FOR A TASTE OF BANGKOK?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto font-trirong"
            variants={fadeInUp}
          >
            Reserve now and experience the authentic flavors of Thai street food.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button onClick={onReserveClick} arrowButton={true}>
              RESERVE NOW
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ReserveBanner;
