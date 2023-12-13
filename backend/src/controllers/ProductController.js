import Product from "../models/Product.js";

async function getProducts(req, res) {
  const products = await Product.find();

  return res.status(200).json(products);
}

async function createProduct(req, res) {
  const product = req.body;

  const newProduct = await Product.create(product);

  return res.status(201).json(newProduct);
}

async function deleteProduct(req, res) {
    const id = req.params.id;

    await Product.findByIdAndDelete({_id: id});

    return res.status(200).json({res: "Produto deletado com Sucesso!"});
  }

export {getProducts, createProduct, deleteProduct };