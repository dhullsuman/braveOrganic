const express = require('express');
const { UserModel } = require('../model/user.model');

const cartRoute = express.Router();

//for add cart product (http://localhost:8080/cart/add/:id)
cartRoute.post("/add/:id", async (req, res) => {
    const data = req.body;
    let userID = req.params.id
    try {
        const user = await UserModel.findById({ _id: userID });
        if (user._id==userID) {
            const cart = user.cartItem;
            cart.push(data);
            await UserModel.findByIdAndUpdate({ _id: userID }, { cartItem: cart });
            res.send({msg:"Added Successfuly"})
        } else {
            res.send({ msg: "User Not Found" });
        }
        
    } catch (err) {
        res.send(err);
    }
})

//for delete cart item (http://localhost:8080/cart/delete/:id)

cartRoute.post("/delete/:id", async (req, res) => {
    const productid = req.body._id;
    const userId = req.params.id;
    try {
        const user = await UserModel.findById({ _id: userId });
        if (user._id==userId) { 
            const cart = user.cartItem;
            const newcart = cart.filter((el) => el._id != productid);
            await UserModel.findByIdAndUpdate({ _id: userId }, { cartItem: newcart });
            res.send({msg:"Deleted Successfuly"})
        } else {
            res.send({ msg: "User Not Found" });
        }
    } catch (err) {
        res.send(err);
    }
})
//for delete cart item (http://localhost:8080/cart/edit/:id)

cartRoute.post("/edit/:id", async (req, res) => {
    const productid = req.body._id;
    const userId = req.params.id;
    try {
        const user = await UserModel.findById({ _id: userId });
        if (user._id==userId) { 
            const cart = user.cartItem;
            let ind;
            cart.forEach((el, index) => { if (el._id == productid) ind= index });
            cart[ind] = req.body;
            const totalPrice=cart?.reduce((p,elem)=>p+=Number(elem.price)*elem.qty,0)
            const totalcart=cart?.reduce((p,elem)=>p+=elem.qty,0)
            await UserModel.findByIdAndUpdate({ _id: userId }, { cartItem: cart });

            res.send({totalcart,totalPrice})
        } else {
            res.send({ msg: "User Not Found" });
        }
     } catch (err) {
        res.send(err);
    }
})


module.exports = cartRoute;