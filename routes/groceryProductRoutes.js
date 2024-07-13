// routes/groceryProductRoutes.js
const express = require('express');
const router = express.Router();
const groceryProductController = require('../controllers/groceryProductController');
const authenticateToken = require("../middleware/authenticateToken");

router.use(authenticateToken);

router.get('/', groceryProductController.getAllProducts);
router.post('/', groceryProductController.addProduct);
router.put('/:id', groceryProductController.updateProduct);
router.delete('/:id', groceryProductController.deleteProduct);

module.exports = router;

