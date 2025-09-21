import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

import ReserveBanner from "../components/sections/ReserveBanner";
import DishCard from "../components/cards/DishCard";
import CategoryButton from "../components/ui/CategoryButton";
import Loader from "../components/ui/Loader";
import AlertBanner from "../components/common/AlertBanner";

import { fetchMenu } from "../api/menuApi";

const MenuPage = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await fetchMenu();
        setMenuData(data);
      } catch (err) {
        console.error("Failed to load menu:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  const groupedCategories = useMemo(() => {
    return (
      menuData?.categories?.map((category) => ({
        id: category.id,
        name: category.name,
        items: category.items,
      })) || []
    );
  }, [menuData]);

  useEffect(() => {
    if (groupedCategories.length > 0 && !activeCategory) {
      setActiveCategory(groupedCategories[0].id);
    }
  }, [groupedCategories, activeCategory]);

  return (
    <div className="bg-gray-100 min-h-screen font-trirong">
      {/* Header */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }} //translateY vertical
            animate={{ opacity: 1, y: 0 }} //element should end up
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            OUR MENU
          </motion.h1>
          <motion.p
            className="text-xl text-center text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience authentic Thai flavors crafted with passion
          </motion.p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex overflow-x-auto py-4 no-scrollbar"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.10 } }, //inheritance by btn
            }}
          >
            {groupedCategories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <Loader text="Loading menu..." />
        ) : (
          groupedCategories.map((category) => (
            <div
              key={category.id}
              className={`mb-12 transition-opacity duration-500 ${
                activeCategory === category.id
                  ? "opacity-100 block"
                  : "opacity-0 hidden"
              }`}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                {category.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <DishCard
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    imageUrl={item.image}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <ReserveBanner />

      <AlertBanner
        type="error"
        message="Error occurred while receiving data."
        isVisible={error}
      />
      
    </div>
  );
};

export default MenuPage;
