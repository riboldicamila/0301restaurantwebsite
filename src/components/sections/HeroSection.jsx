import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroItemVariants, heroTextVariants } from "../../utils/animations"

import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="bg-[#2D3142] text-[#F1FAEE] font-trirong ">
      <div className="relative h-[100vh] overflow-hidden">
        <video
          src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1745861460/12803238_2560_1440_25fps_jirffw.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          Your browser does not support the video tag.
        </video>

        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full text-center text-[#F1FAEE] bg-black/60 px-4"
          initial="hidden" //only parent prop, its inherited
          animate="visible"
          variants={heroTextVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-trirong font-bold mb-4 text-[#E63946]"
            variants={heroItemVariants}
          >
            AUTHENTIC THAI STREET FOOD EXPERIENCE
          </motion.h1>
          <motion.p
            className="text-lg mb-6 max-w-2xl"
            variants={heroItemVariants}
          >
            Bringing the vibrant flavors and energy of Bangkok's street food
            scene right to your table.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={heroItemVariants}
          >
            <Link to="/reservations">
              <Button variant="primary" text="RESERVE NOW" />
            </Link>
            <Link to="/menu">
              <Button variant="outline" text="VIEW MENU" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;