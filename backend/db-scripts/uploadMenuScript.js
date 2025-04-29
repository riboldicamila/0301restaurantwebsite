require('dotenv').config();
const mongoose = require('mongoose');
const MenuItem = require('../src/models/menu.model'); 

console.log(process.env.MONGO_URI);

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
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745933910/pexels-photo-3569706_jqzfr4.jpg"
        },
        {
          id: 102,
          name: "Satay Skewers",
          description: "Grilled chicken skewers with peanut sauce",
          price: 10.95,
          allergens: ["Peanuts"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745933947/free-photo-of-close-up-photo-of-chicken-satay-street-food_k26a4l.jpg"
        },
        {
          id: 103,
          name: "Tom Yum Soup",
          description: "Spicy and sour soup with mushrooms and lemongrass",
          price: 9.95,
          allergens: ["Shellfish"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745933994/pexels-photo-724667_ctfsp8.jpg"
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
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934034/pexels-photo-5939141_k8hjgx.jpg"
        },
        {
          id: 202,
          name: "Som Tam (Papaya Salad)",
          description: "Spicy green papaya salad with tomatoes, peanuts, and a zesty lime dressing",
          price: 12.95,
          allergens: ["Peanuts", "Fish"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934079/free-photo-of-delicious-thai-papaya-salad-with-fresh-ingredients_iz0fym.jpg"
        },
        {
          id: 203,
          name: "Mango Sticky Rice",
          description: "Sweet sticky rice topped with fresh mango slices and coconut cream",
          price: 9.95,
          allergens: [],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934114/free-photo-of-mango-and-rice-on-a-plate_ascla3.jpg"
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
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934142/pexels-photo-5531299_tvw9mz.jpg"
        },
        {
          id: 302,
          name: "Basil Stir Fry",
          description: "Spicy stir-fried meat with Thai holy basil, chili, and garlic",
          price: 15.95,
          allergens: ["Soy"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934174/free-photo-of-delicious-beef-stir-fry-with-vegetables-in-black-bowl_hyt67x.jpg"
        },
        {
          id: 303,
          name: "Massaman Curry",
          description: "Slow-cooked curry with potatoes, onions, and peanuts in a rich sauce",
          price: 17.95,
          allergens: ["Peanuts"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1745934210/pexels-photo-8617361_dfvcof.jpg"
        }
      ]
    }
  ]
};

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await MenuItem.deleteMany(); // Clears the collection before inserting new items

    const itemsToInsert = [];

    // Replacing forEach with for...of
    for (const category of mockData.categories) {
      for (const item of category.items) {
        itemsToInsert.push({
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image,
          allergens: item.allergens,
          category: category.name,
        });
      }
    }

    await MenuItem.insertMany(itemsToInsert);
    console.log('✅ Menú cargado con éxito');
  } catch (err) {
    console.error('❌ Error al insertar el menú:', err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
