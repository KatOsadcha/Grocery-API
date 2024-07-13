const express = require('express');
const router = express.Router();
const groceryEmployeeController = require('../controllers/groceryEmployeeController');
const authenticateToken = require('../middleware/authenticateToken');

router.use(authenticateToken);

router.get('/', groceryEmployeeController.getAllEmployees);
router.post('/', groceryEmployeeController.addEmployee);
router.put('/:id', groceryEmployeeController.updateEmployee);
router.delete('/:id', groceryEmployeeController.deleteEmployee);

module.exports = router;
