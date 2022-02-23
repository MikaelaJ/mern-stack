const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    // Allow us to have a user asssociated with a goal
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
}
)

module.exports = mongoose.model('Goal', goalSchema)
