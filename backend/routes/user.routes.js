const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const userRoutes = express.Router();

//for register user (http://localhost:8080/user/register)

userRoutes.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      res.send({ status: "Error", message: "IsPresent" });
    } else {
      bcrypt.hash(password, 8, async (err, strongPassword) => {
        if (!err) {
          // Store hash in your password DB.
          const data = new UserModel({
            firstName,
            lastName,
            email,
            password: strongPassword,
          });
          await data.save();
          res.send({ status: "success", message: "registered" });
        } else {
          console.log(err);
          res.send({ "Error hashing": err });
        }
      });
    }
  } catch (err) {
    console.log("Error");
    res.send({ Error: err });
  }
});

//for login user (http://localhost:8080/user/login)

userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        // result == true
        if (result) {
          var token = jwt.sign(
            { firstName: user[0].firstName },
            process.env.KEY
          );

          res.send({
            Token: token,
            user: user[0],
            status: "Successfull",
            isLogin: true,
          });
        } else {
          res.send({ status: "error", message: "wrongPassword" });
        }
      });
    } else {
      res.send({ status: "error", message: "notRegistered" });
    }
  } catch (err) {
    ("Error");
    res.send({ Error: err });
  }
});

//for find user (http://localhost:8080/user/:id)
userRoutes.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    // console.log(user);
    if (user != null) {
      const totalPrice = user.cartItem?.reduce(
        (p, elem) => p += Number(elem.price) * elem.qty,
        0
      );
      const totalMRP = user.cartItem?.reduce(
        (p, elem) => p += Number(elem.origionalPrice) * elem.qty,
        0
      );
        const totalcart = user.cartItem?.reduce((p, elem) => p += elem.qty, 0);
      const totalWisht = user.wishList?.reduce((p, elem) => p += 1, 0);
        
      res.send({ status: "Successfull", user: user, totalPrice, totalcart,totalMRP,totalWisht });
    } else res.send({ status: "eRrror", msg: "User Not Find" });
  } catch (err) {
    res.send({ Error: err.message });
  }
});

module.exports = userRoutes;
