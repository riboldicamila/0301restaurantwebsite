require('dotenv').config();
const mongoose = require('mongoose');
const MenuItem = require('./src/models/menu.model'); 

console.log(process.env.MONGO_URI);

const mockData = {
  categories: [
    {
      id: 1,
      name: "Starters",
      items: [
        {
          id: 107,
          name: "Tod Mun Pla",
          description: "Thai fish cakes blended with red curry paste and herbs, served with sweet chili sauce",
          price: 9.25,
          allergens: ["Fish", "Eggs"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012590/free-photo-of-spicy-seafood-rice-with-shrimp-and-peppers_piaz3t.jpg"
        },
        {
          id: 108,
          name: "Larb Gai",
          description: "Minced chicken salad with lime juice, chili, mint, and toasted rice powder",
          price: 10.5,
          allergens: [],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012911/free-photo-of-delicious-grilled-chicken-salad-on-ceramic-plate_f2ieqe.jpg"
        },
        {
          id: 109,
          name: "Miang Kham",
          description: "Betel leaves filled with roasted coconut, peanuts, lime, and ginger, drizzled with sweet palm syrup",
          price: 8.95,
          allergens: ["Peanuts"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012991/chef-making-vegan-wrap-with-red-peppers-tomatoes_181624-45389_zcvro2.jpg"
        }
      ]
    },
    {
      id: 2,
      name: "Street Food Favorites",
      items: [
        {
          id: 207,
          name: "Khao Niew Moo Ping",
          description: "Grilled marinated pork skewers served with sticky rice",
          price: 11.5,
          allergens: ["Soy"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012860/pexels-photo-6646360_u8twmi.jpg"
        },
        {
          id: 208,
          name: "Sai Krok Isan",
          description: "Fermented pork and rice sausages, grilled and served with fresh cabbage and chili",
          price: 10.95,
          allergens: [],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746013041/free-photo-of-people-eating-dinner_cs7gyf.jpg"
        },
        {
          id: 209,
          name: "Khanom Buang",
          description: "Crispy Thai crepes filled with coconut cream and sweet egg yolk threads",
          price: 7.25,
          allergens: ["Eggs"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012824/pexels-photo-6824808_zhc85a.jpg"
        }
      ]
    },
    {
      id: 3,
      name: "Main Courses",
      items: [
        {
          id: 307,
          name: "Khao Soi",
          description: "Northern Thai curry noodle soup with coconut milk, crispy noodles, and pickled mustard greens",
          price: 16.5,
          allergens: ["Eggs", "Soy"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012581/pexels-photo-1731535_cmydpq.jpg"
        },
        {
          id: 308,
          name: "Pad Prik King",
          description: "Stir-fried meat with red curry paste, green beans, and kaffir lime leaves",
          price: 15.75,
          allergens: ["Soy"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012786/pexels-photo-2641886_qn4qx1.jpg"
        },
        {
          id: 309,
          name: "Pla Pao",
          description: "Salt-crusted grilled whole fish stuffed with lemongrass and served with spicy dipping sauce",
          price: 18.95,
          allergens: ["Fish"],
          image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1746012761/free-photo-of-fishes-in-fish-soup-on-white-plate_cpnc0i.jpg"
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

    // await MenuItem.deleteMany(); // Clears the collection before inserting new items

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
