const Product = require("./../models/productModel");

async function getAllProducts(req, res) {
    const products = await Product.find();
    res.status(200).json({
        status: "success",
        results: products.length,
        data: {
            products: products,
        },
    });
}

async function createProduct(req, res) {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                NewProduct: newProduct,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Invalid data. Required fields not present!",
        });
    }
}

async function getProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                product: product,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error,
        });
    }
}

function updateProduct(req, res) {
    res.json({ status: "success" });
}

function deleteProduct(req, res) {
    res.json({ status: "success" });
}

module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct,
    getProduct: getProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
};
