const porductRouter = require("./product");
// const deliveryRouter = require("./");
// const optionRouter = require("./");

const router = require("express").Router();

router.use("/product", porductRouter);

module.exports = router;
