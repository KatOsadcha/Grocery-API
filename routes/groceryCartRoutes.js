const express = require("express");
const router = express.Router();
const groceryCartController = require("../controllers/groceryCartController");
const authenticateToken = require("../middleware/authenticateToken");

router.use(authenticateToken);

router.get("/", groceryCartController.getAllCartItems);
router.post("/", groceryCartController.addItemToCart);
router.put("/:id", groceryCartController.updateCart);
router.delete("/:id", groceryCartController.removeItemFromCart);

module.exports = router;
