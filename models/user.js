const mongoose = require('./connectDB')

const userSchema = new mongoose.Schema({
    name : String,
    age : Number
})

const UserModel = mongoose.model('user', userSchema)
