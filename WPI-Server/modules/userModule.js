const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: Number,
    //type: String,
    userName: String,
    passwd: String,
    email: String,
    products: [sid:Number],
    posts: [pid:Number],
    comments:[cid:Number],
    activate: Boolean
});
const userModel = mongoose.model('userModels', userSchema);
module.exports = userModel;