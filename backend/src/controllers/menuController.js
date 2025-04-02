const MenuItem = require('../models/MenuItem');

// Get all menu items
exports.getMenuItems = async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
};

// Add a new menu item
exports.addMenuItem = async (req, res) => {
  // Logic for adding menu item
};
