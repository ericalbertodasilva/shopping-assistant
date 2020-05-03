
const User = require('../models/users');

module.exports = {

    async create(request, response) {       
        try{
            const user = User.create(request.body);
            return response.send({ user });
        } catch (error) {
            return response.status(400).send({              
                error: 'Registration failed'
            });
        }
    },

    async listAll(request , response){
        const user = await User.find({});
        return response.json(user);
    },

    async findById(request , response){
        const {id} = request.params;
        const user = await User.find({_id:id});
        return response.json(user);
    }

};