const mongoose = require("mongoose");

const uri = "mongodb+srv://eric:123@cluster0-fugp8.mongodb.net/simulator?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";


mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

module.exports = mongoose;