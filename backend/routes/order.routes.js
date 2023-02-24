const express = require('express');
const { UserModel } = require('../model/user.model');

const orderRoute = express.Router();

orderRoute.post("/add/:id", async (req, res) => {
    const data = req.body;
    let userID = req.params.id
    try {
        const user = await UserModel.findById({ _id: userID });
        if (user._id==userID) {
            const order = user.orderItem;
            order.push(data);
            await UserModel.findByIdAndUpdate({ _id: userID }, { orderItem: order });
            res.send({msg:"Added Successfuly"})
        } else {
            res.send({ msg: "User Not Found" });
        }
        
    } catch (err) {
        res.send(err);
    }
})

orderRoute.delete("/delete/:id", async (req, res) => {
    const productid = req.body._id;
    const userId = req.params.id;
    try {
        const user = await UserModel.findById({ _id: userId });
        if (user._id==userId) { 
            const order = user.orderItem;
            const neworder = order.filter((el) => el._id != productid);
            await UserModel.findByIdAndUpdate({ _id: userId }, { orderItem: neworder });
            res.send({msg:"Deleted Successfuly"})
        } else {
            res.send({ msg: "User Not Found" });
        }
     } catch (err) {
        res.send(err);
    }

})


module.exports = orderRoute;