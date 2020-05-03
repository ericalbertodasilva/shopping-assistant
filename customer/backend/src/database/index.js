const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/simulator', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

module.exports = mongoose;