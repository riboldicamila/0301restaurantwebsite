import { useState, useEffect } from 'react';

export default function MenuPage() {
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // const response = await fetch('/api/menu');
        // const data = await response.json();
        
        const mockData = {
          categories: [
            {
              id: 1,
              name: "Starters",
              items: [
                {
                  id: 101,
                  name: "Spring Rolls",
                  description: "Crispy vegetable spring rolls served with sweet chili sauce",
                  price: 8.95,
                  allergens: ["Gluten", "Soy"],
                  image: "/api/placeholder/400/300"
                },
                {
                  id: 102,
                  name: "Satay Skewers",
                  description: "Grilled chicken skewers with peanut sauce",
                  price: 10.95,
                  allergens: ["Peanuts"],
                  image: "/api/placeholder/400/300"
                },
                {
                  id: 103,
                  name: "Tom Yum Soup",
                  description: "Spicy and sour soup with mushrooms and lemongrass",
                  price: 9.95,
                  allergens: ["Shellfish"],
                  image: "/api/placeholder/400/300"
                }
              ]
            },
            {
              id: 2,
              name: "Street Food Favorites",
              items: [
                {
                  id: 201,
                  name: "Pad Thai",
                  description: "Stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts in a tangy sauce",
                  price: 14.95,
                  allergens: ["Eggs", "Peanuts", "Soy"],
                  image: "/api/placeholder/400/300"
                },
                {
                  id: 202,
                  name: "Som Tam (Papaya Salad)",
                  description: "Spicy green papaya salad with tomatoes, peanuts, and a zesty lime dressing",
                  price: 12.95,
                  allergens: ["Peanuts", "Fish"],
                  image: "/api/placeholder/400/300"
                },
                {
                  id: 203,
                  name: "Mango Sticky Rice",
                  description: "Sweet sticky rice topped with fresh mango slices and coconut cream",
                  price: 9.95,
                  allergens: [],
                  image: "/api/placeholder/400/300"
                }
              ]
            },
            {
              id: 3,
              name: "Main Courses",
              items: [
                {
                  id: 301,
                  name: "Green Curry",
                  description: "Fragrant green curry with bamboo shoots, bell peppers, and Thai basil",
                  price: 16.95,
                  allergens: ["Shellfish"],
                  image: "/api/placeholder/400/300"
                },
                {
                  id: 302,
                  name: "Basil Stir Fry",
                  description: "Spicy stir-fried meat with Thai holy basil, chili, and garlic",
                  price: 15.95,
                  allergens: ["Soy"],
                  image: "/api/placeholder/400/300"
                },
                {
                  id: 303,
                  name: "Massaman Curry",
                  description: "Slow-cooked curry with potatoes, onions, and peanuts in a rich sauce",
                  price: 17.95,
                  allergens: ["Peanuts"],
                  image: "/api/placeholder/400/300"
                }
              ]
            }
          ]
        };
        
        setMenuCategories(mockData.categories);
        if (mockData.categories.length > 0) {
          setActiveCategory(mockData.categories[0].id);
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
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">OUR MENU</h1>
          <p className="text-xl text-center text-red-500">
            Experience authentic Thai flavors crafted with passion
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 no-scrollbar">
            {menuCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 mx-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-xl text-gray-600">Loading menu...</div>
          </div>
        ) : (
          menuCategories.map(category => (
            <div 
              key={category.id} 
              className={`mb-12 ${activeCategory === category.id ? "block" : "hidden"}`}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{category.name}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
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
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
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
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}