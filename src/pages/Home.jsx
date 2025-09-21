import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/Button";
import BenefitCard from "../components/cards/BenefitCard";
import AnimatedSection from "../components/sections/AnimatedSection";
import FavoritesSection from "../components/sections/FavoriteSection";
import ReserveBanner from "../components/sections/ReserveBanner";
import {
  fadeInUp,
  heroTextVariants,
  heroItemVariants,
} from "../utils/animations";

import { GiCookingPot, GiKnifeFork } from "react-icons/gi";
import { FiClock } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    // Not <Link>, so can add future logic, extra discount banner before click.
    navigate("/menu");
  };

  return (
    <div className="bg-[#F1FAEE] min-h-screen">
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
            initial="hidden"
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
                <Button variant="primary">RESERVE NOW</Button>
              </Link>
              <Button variant="outline" onClick={handleMenuClick}>
                VIEW MENU
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <FavoritesSection onMenuClick={handleMenuClick} />

      <div className="relative bg-[#E5EFE6] h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
        >
          <source
            src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1746010426/3296290-uhd_2732_1440_25fps_kz1uzq.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-[#9eaca047]/70 z-10"></div>

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-start justify-start h-full pt-10">
          <AnimatedSection>
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-[#ecedf3]"
              variants={fadeInUp}
            >
              THE STREET FOOD EXPERIENCE
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <motion.div variants={fadeInUp}>
                <BenefitCard
                  title="Bold Flavors"
                  className="bg-[#ffffffc7] rounded-xl p-6 shadow-md backdrop-blur"
                  description="Our dishes capture the perfect balance of sweet, sour, salty, and spicy that Thai street food is famous for."
                  icon={<GiCookingPot className="w-12 h-12 text-[#E63946]" />}
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <BenefitCard
                  title="Fresh Ingredients"
                  description="We use locally sourced ingredients at peak freshness, just like the street vendors in Thailand."
                  icon={<GiKnifeFork className="w-12 h-12 text-[#E63946]" />}
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <BenefitCard
                  title="Quick & Satisfying"
                  description="Just like the streets of Bangkok, our dishes are prepared quickly but never compromise on flavor."
                  icon={<FiClock className="w-12 h-12 text-[#E63946]" />}
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <ReserveBanner />
    </div>
  );
};

export default Home;
