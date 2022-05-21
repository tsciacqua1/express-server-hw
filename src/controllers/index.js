const Contenedor = require("../utils");
const newCont = new Contenedor("products");

const products = async (req, res, next) => {
  try {
    const data = await newCont.getAll();
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

const randomProduct = async (req, res, next) => {
  try {
    const products = await newCont.getAll();
    const id = Math.random() * products.length;
    const data = await newCont.getById(Math.floor(id));
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  products,
  randomProduct,
};
