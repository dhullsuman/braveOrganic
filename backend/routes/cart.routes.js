const express = require('express');

const cartRoute = express.Router();

cartRoute.post("/", async (req, res) => {
    const data = req.body;
    // let userID=
    try {
    
        
    } catch (err) {
        res.send(err);
    }
})

module.exports = cartRoute;