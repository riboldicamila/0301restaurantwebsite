import { fadeInUp } from "../../utils/animations";
import { motion } from "framer-motion";

import AnimatedSection from "../common/AnimatedSection";
import BenefitCard from "../cards/BenefitCard";

import { GiCookingPot, GiKnifeFork } from "react-icons/gi";
import { FiClock } from "react-icons/fi";

const BenefictsSections = () => {
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
}

export default BenefictsSections;