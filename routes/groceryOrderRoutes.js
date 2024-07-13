const express = require('express');
const router = express.Router();
const groceryOrderController = require('../controllers/groceryOrderController');
const authenticateToken = require("../middleware/authenticateToken");

router.use(authenticateToken);

router.get('/', groceryOrderController.getAllOrders);
router.post('/', groceryOrderController.addOrder);
router.put('/:id', groceryOrderController.updateOrder);
router.delete('/:id', groceryOrderController.deleteOrder);

module.exports = router;
