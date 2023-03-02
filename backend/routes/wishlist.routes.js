const express = require('express');
const { UserModel } = require('../model/user.model');

const wishlistRoute = express.Router();

//for add wishlist product (http://localhost:8080/wishlist/add/:id)
wishlistRoute.post("/add/:id", async (req, res) => {
    const data = req.body;
    let userID = req.params.id
    try {
        const user = await UserModel.findById({ _id: userID });
        if (user._id==userID) {
            const wishlist = user.wishList;
            wishlist.push(data);
            await UserModel.findByIdAndUpdate({ _id: userID }, { wishList: wishlist });
            res.send({msg:"Added Successfuly"})
        } else {
            res.send({ msg: "User Not Found" });
        }
        
    } catch (err) {
        res.send(err);
    }
})


//for delete wishlist product (http://localhost:8080/wishlist/delete/:id)
wishlistRoute.post("/delete/:id", async (req, res) => {
    const productid = req.body._id;
    const userId = req.params.id;
    try {
        const user = await UserModel.findById({ _id: userId });
        if (user._id==userId) { 
            const wishlist = user.wishList;
            const newwishlist = wishlist.filter((el) => el._id != productid);
            await UserModel.findByIdAndUpdate({ _id: userId }, { wishList: newwishlist });
            res.send({msg:"Deleted Successfuly"})
        } else {
            res.send({ msg: "User Not Found" });
        }
     } catch (err) {
        res.send(err);
    }

})


module.exports = wishlistRoute;