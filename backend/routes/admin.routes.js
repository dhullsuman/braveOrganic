const express = require("express");
const adminAuth = require("../middleware/authAdmin.middleware");
const ProductModel = require("../model/product.model");
const { UserModel } = require("../model/user.model");
const QueryFinder = require("../utils/queryFinder");
require("dotenv").config();
const adminRouter = express.Router();
adminRouter.use(express.json());
adminRouter.use(adminAuth);


//Get All Users
adminRouter.get("/user", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.send({ user: user });
  } catch (err) {
    res.send("Error");
  }
});

//Delete Users
adminRouter.delete("/user/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.send({ user: "success" });
  } catch (err) {
    res.send({ user: "error" });
  }
});
//update users
adminRouter.patch("/user/update/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: id },data);
    res.send({ user: "success" });
  } catch (err) {
    res.send({ user: "error" });
  }
});

//Add New Products
adminRouter.post("/product/add", async (req, res) => {
    const loge = req.body;
    try {
      let data = new ProductModel(loge);
      await data.save();
      res.status(200).send({ msg: "Product product added successfully" });
    } catch (error) {
      res.status(500).send({ msg: "Something Went Wrong!" });
    }
  });
  
  //Delete Product From Database
  adminRouter.delete("/product/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await ProductModel.findByIdAndDelete({ _id: id });
      res.status(200).send({ msg: "delete product successfully" });
    } catch (error) {
      res.status(500).send({ msg: "Something Went Wrong!" });
    }
  });
  
  //Update Products
  adminRouter.patch("/product/update/:id", async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
      await ProductModel.findByIdAndUpdate({ _id: id }, payload);
      res.status(200).send({ msg: "update product successfully" });
    } catch (error) {
      res.status(500).send({ msg: "Something Went Wrong!" });
    }
  });
  
  //Get Single Products
  adminRouter.get("/product/:id", async (req, res) => {
    const id = req.params.id;
    try {
      let data = await ProductModel.find({ _id: id });
      res.status(200).send({ data: data });
    } catch (error) {
      res.status(500).send({ msg: "Something Went Wrong!" });
    }
  });

  //Get All Products
adminRouter.get("/product", async (req, res) => {
  const { limit } = req.query;
  try {
    const totalProductPerPage = limit;
    const totalProduct = await ProductModel.countDocuments();
    const result = await ProductModel.find();
    // console.log(mainCat)
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
        product,
        totalProduct,
        prod: result.length,
        limit: totalProductPerPage,
      });
  }catch (err) {
    res.send({ Error: err.message });
  }
  });
  

module.exports = adminRouter;