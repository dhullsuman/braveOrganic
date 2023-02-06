const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartItem: Array,
    wishList: Array,
    orderItem: Array,
    role: { type: String, default: "user" },
    
    addAddress:Object
    // {
    //     type: Object,
        // pinCode: { type: Number, required: true, default: 126116 }, landmark: String, city: { type: String, required: true }, state: { type: String, required: true }, mob: {
            // type: Number, required:true}, area: { type: String, required: true }
    // }
},{timestamps:true, versionKey:false})

const UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel };