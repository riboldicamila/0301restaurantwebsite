const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');

router.post('/', menuController.createMenuItem);
router.get('/', menuController.getAllMenuItems);
router.get('/:id', menuController.getMenuItemById);
router.put('/:id', menuController.updateMenuItem);
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;
