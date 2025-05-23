import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "../components/Button";
import DishCard from "../components/DishCard";
import BenefitCard from "../components/BenefitCard";
import Banner from "../components/BannerInfo";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleOrderNowClick = () => {
    setShowBanner(true);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const heroTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.4,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
              <Button onClick={handleOrderNowClick} variant="primary" >
                ORDER NOW
              </Button>
              <Button variant="outline" onClick={handleMenuClick}>
                VIEW MENU
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-[#2D3142]"
            variants={fadeInUp}
          >
            STREET FOOD FAVORITES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp}>
              <DishCard
                title="Pad Thai"
                description="Stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts in a tangy sauce."
                rating={4.8}
                imageUrl="https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934034/pexels-photo-5939141_k8hjgx.jpg"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <DishCard
                title="Som Tam (Papaya Salad)"
                description="Spicy green papaya salad with tomatoes, peanuts, and a zesty lime dressing."
                rating={4.7}
                imageUrl="https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934142/pexels-photo-5531299_tvw9mz.jpg"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <DishCard
                title="Mango Sticky Rice"
                description="Sweet sticky rice topped with fresh mango slices and coconut cream."
                rating={4.9}
                imageUrl="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746005093/fresh-ripe-mango-sticky-rice-with-coconut-milk-dark-surface_1150-41941_ht9lxe.jpg"
              />
            </motion.div>
          </div>

          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <Button variant="secondary" onClick={handleMenuClick} arrowButton={true}>
              EXPLORE FULL MENU
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>

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
                  icon={
                    <svg
                      className="w-12 h-12 text-[#E63946] "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        stroke="#E63946"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  }
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <BenefitCard
                  title="Fresh Ingredients"
                  description="We use locally sourced ingredients at peak freshness, just like the street vendors in Thailand."
                  icon={
                    <svg
                      className="w-12 h-12 text-[#E63946]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm6 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
                      />
                    </svg>
                  }
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <BenefitCard
                  title="Quick & Satisfying"
                  description="Just like the streets of Bangkok, our dishes are prepared quickly but never compromise on flavor."
                  icon={
                    <svg
                      className="w-12 h-12 text-[#E63946]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

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
              Order now for delivery or pickup and experience the authentic
              flavors of Thai street food from the comfort of your home.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button onClick={handleOrderNowClick} arrowButton={true}>ORDER NOW</Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
      {showBanner && <Banner onClose={handleCloseBanner} />}
    </div>
  );
};

export default Home;
