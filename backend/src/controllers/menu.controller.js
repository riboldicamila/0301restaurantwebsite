const MenuItem = require('../models/menuItem.model');  // Adjust path as needed

exports.createMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const newItem = new MenuItem({ name, description, price, category, image });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error creating menu item" });
  }
};

exports.getAllMenuItems = async (req, res) => {
  try {
    console.log("Request for menu received"); 
    const items = await MenuItem.find();
    console.log("Items found:", items.length); 
    res.status(200).json(items);
    console.log("Response sent");
  } catch (error) {
    console.error("Error fetching menu items:", error); 
    res.status(500).json({ error: "Error fetching menu items" });
  }
};

exports.getMenuItemById = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Menu item not found" });

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menu item" });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem)
      return res.status(404).json({ error: "Menu item not found" });

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Error updating menu item" });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedItem)
      return res.status(404).json({ error: "Menu item not found" });

    res.status(200).json({ message: "Menu item deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting menu item" });
  }
};
