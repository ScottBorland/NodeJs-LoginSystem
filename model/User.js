const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        requird: true,
        max: 255,
        min:6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    apiKey: {
        type: String,
        default: null
    },
    apiRequests: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('User', userSchema);


