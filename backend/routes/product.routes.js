const express = require("express");
const ProductModel = require("../model/product.model.js");
const QueryFinder = require("../utils/queryFinder.js");

const productRoutes = express.Router();

//for all product (https://braveorganic.onrender.com/products)

productRoutes.get("/", async (req, res) => {
  const { mainCat, limit, subCat } = req.query;
  // console.log(mainCat)
  try {
    const totalProductPerPage = limit || 20;
    const totalProduct = await ProductModel.countDocuments();
    let result;
    if(mainCat) result=await ProductModel.find({mainCat})
    else  result = await ProductModel.find({subCat});
    // console.log(result.length)
    const newProduct = new QueryFinder(ProductModel.find(), req.query)
      .sort()
      .search()
      .pagination(totalProductPerPage)
      .filter();
    const product = await newProduct.collection;
    res
      .status(200)
      .send({
        status: "Successfull",
        data: product,
        totalProduct,
        prod: Math.ceil(result.length/totalProductPerPage),
        limit: totalProductPerPage,
      });
  } catch (err) {
    res.send({ Error: err.message });
  }
});

//for single product (https://braveorganic.onrender.com/products/id)

productRoutes.get("/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const singleProduct = await ProductModel.findById(id);
    res.send({ singleProduct });
  } catch (err) {
    res.send({ Error: err.message });
  }
});

module.exports = productRoutes;