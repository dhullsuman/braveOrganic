const express = require('express');
const { UserModel } = require('../model/user.model');

const orderRoute = express.Router();

//for add order product (http://localhost:8080/order/add/:id)
orderRoute.post("/add/:id", async (req, res) => {
    const data = req.body;
    let userID = req.params.id
    try {
        const user = await UserModel.findById({ _id: userID });
        if (user._id==userID) {
            // console.log(user)
            let order = user.orderItem;
            order = [...order, ...data]
            let cartItem = user.cartItem;
            cartItem = [];
            // console.log(order,cartItem)
            await UserModel.findByIdAndUpdate({ _id: userID }, {orderItem: order,cartItem});
            res.send({msg:"Added Successfuly"})
        } else {
            res.send({ msg: "User Not Found" });
        }
        
    } catch (err) {
        res.send(err);
    }
})


module.exports = orderRoute;