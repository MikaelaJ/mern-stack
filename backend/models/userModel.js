// Mongoose is the ODM (Object Document Mapper) for MongoDB
const mongoose = require('mongoose')

// Create the use schema, the fields that you want the user to have
// Pass the schema you want as an object
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please and a name']
    },
    email: {
        type: String,
        required: [true, 'Please and an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please and a password'],
        unique: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)
