const Product = require('../models/products');
module.exports = {

    async create(request, response) {       
        try{
            const product = Product.create(request.body);
            return response.send({ product });
        } catch (error) {
            return response.status(400).send({              
                error: 'Registration failed'
            });
        }
    },

    async listAll(request , response){
        const product = await Product.find({});
        return response.json(product);
    },

    async findById(request , response){
        const {id} = request.params;
        const product = await Product.find({_id:id});
        return response.json(product);
    },

    async findByProductContains(request , response){
        const {contains} = request.params;
        const product = await Product.find({ "name": { "$regex": contains , "$options" : "i" } });
        return response.json(product);
    }
};