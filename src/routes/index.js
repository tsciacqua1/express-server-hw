const { Router } = require("express");
const { products, randomProduct } = require("../controllers");

const router = Router();

router.get("/productos", products);
router.get("/productoRandom", randomProduct);

module.exports = router;
