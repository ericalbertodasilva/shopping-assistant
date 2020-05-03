const mongoose = require('../database');

const ProductScheme = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    code: {
        type: String,
        unique: true,
        required: true,
    },
    linkImg:{
        type: String,
    },
    abstract:{
        type: String,
    },
    information:{
        type: String,
    },
    datasheet:{
        type: String,
    },
    assessments:{
        type: Map,
        of: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product =  mongoose.model('Product', ProductScheme);

module.exports = Product;