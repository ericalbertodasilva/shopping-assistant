const mongoose = require('../database');

const ProductScheme = mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    code: {
        type: String,
        unique: true,
        require: true,
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
    evaluation:{
        type: String,
    },
    price:{
        type: String,
    },
    datasheet:{
        type: Map,
        of: String,
    },
    shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product =  mongoose.model('Product', ProductScheme);

module.exports = Product;