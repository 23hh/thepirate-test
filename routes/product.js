const router = require("express").Router();
const productController = require("../controller/product");

router.post("/", productController.addProduct);
router.get("/", productController.prouctList);
router.get("/:id", productController.prouctDetail);
router.get("/:id/delivery", productController.selectDelivery);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
