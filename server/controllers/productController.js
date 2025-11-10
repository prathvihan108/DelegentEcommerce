import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.status(500).json({ message: "Server error fetching products" });
	}
};

export const addProduct = async (req, res) => {
	const { name, price, description } = req.body;
	try {
		const product = await Product.create({ name, price, description });
		res.status(201).json(product);
	} catch (err) {
		res.status(500).json({ message: "Server error adding product" });
	}
};
