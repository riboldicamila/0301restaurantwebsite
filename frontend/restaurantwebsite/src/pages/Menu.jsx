import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MenuPage() {
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api/menu"
      : "https://sabaithai.onrender.com/api/menu";

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const apiUrl = API_URL;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const groupedCategories = data.reduce((categories, item) => {
          const category = categories.find((cat) => cat.name === item.category);
          if (category) {
            category.items.push(item);
          } else {
            categories.push({
              name: item.category,
              id: item.category.toLowerCase().replace(/\s+/g, "-"),
              items: [item],
            });
          }
          return categories;
        }, []);

        setMenuCategories(groupedCategories);
        if (groupedCategories.length > 0) {
          setActiveCategory(groupedCategories[0].id);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-trirong">
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex overflow-x-auto py-4 no-scrollbar"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={`px-6 py-2 mx-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-xl text-gray-600">Loading menu...</div>
          </div>
        ) : (
          menuCategories.map((category) => (
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
                  <motion.div
                    key={item._id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-2 rounded">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                      {item.allergens && item.allergens.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Allergens: </span>
                            {item.allergens.join(", ")}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
