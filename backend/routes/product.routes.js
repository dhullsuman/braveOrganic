const express = require('express');
const ProductModel = require('../model/product.model.js');
const QueryFinder = require('../utils/queryFinder.js');

const productRoutes = express.Router()

productRoutes.get('/', async (req, res) => {
    const { mainCat, limit } = req.query;
    try {
        const totalProductPerPage = limit||20;
        const totalProduct = await ProductModel.countDocuments()
        const result = await ProductModel.find({mainCat});
        // console.log(mainCat)
        const newProduct = new QueryFinder(ProductModel.find(), req.query).sort().search().pagination(totalProductPerPage).filter();
const product = await newProduct.collection
        res.status(200).send({status:"Successfull", data:product, totalProduct, prod:result.length, limit:totalProductPerPage})
    } catch (err) {
        res.send({Error: err.message});
    }
})

module.exports = productRoutes;