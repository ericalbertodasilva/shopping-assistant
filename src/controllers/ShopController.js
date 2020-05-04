const Shop = require('../models/shops');

module.exports = {

    async create(request, response) {       
        try{
            const shop = Shop.create(request.body);
            return response.send({ shop });
        } catch (error) {
            return response.status(400).send({              
                error: 'Registration failed'
            });
        }
    },

    async listAll(request , response){
        const shops = await Shop.find({});
        return response.json(shops);
    },

    async findById(request , response){
        const {id} = request.params;
        const shop = await Shop.find({_id:id});
        return response.json(shop);
    },

    async listAllZipCodeSorting(request , response){
        const {zipCode} = request.params;
        const shop = await Shop.find({
            address:{
                zipCode: zipCode
            }
        });

        return response.json(shop);
    },

    async listAllCoodinatesSorting(request , response){
        const {longitude, latitude} = request.params;
        const shop = await Shop.find({
            location: {
                $near: {
                    $maxDistance: 100000,
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    }
                }
            }
        }).find((error, results) => {
            if (error) console.log(error);
            //console.log(JSON.stringify(results, 0, 2));
        });
        return response.json(shop);
    }

};