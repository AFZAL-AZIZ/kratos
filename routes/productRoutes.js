const express = require("express");
const productsController = require("./../controllers/productsController");

const Router = express.Router();

Router.get("/", productsController.getAllProducts);
Router.get("/:id", productsController.getProduct);
Router.post("/", productsController.createProduct);
Router.patch("/:id", productsController.updateProduct);
Router.delete("/:id", productsController.deleteProduct);

module.exports = Router;
