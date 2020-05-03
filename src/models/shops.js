const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
});

const ShopScheme = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    location: {
      type: PointSchema,
      required: true,
    },
    address: {
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true
        },
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

ShopScheme.index ({location: "2dsphere"});

const Shop =  mongoose.model('Shop', ShopScheme);

module.exports = Shop;