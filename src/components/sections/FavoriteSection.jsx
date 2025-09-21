import { motion } from "framer-motion";
import DishCard from "../cards/DishCard";
import Button from "../ui/Button";
import AnimatedSection from "../common/AnimatedSection";
import { fadeInUp } from "../../utils/animations";

const FavoritesSection = ({ onMenuClick }) => {
  return (
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
          <Button variant="secondary" onClick={onMenuClick} arrowButton={true}>
            EXPLORE FULL MENU
          </Button>
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default FavoritesSection;
