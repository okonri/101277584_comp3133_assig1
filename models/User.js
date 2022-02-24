const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter username name'],
        unique: [true, 'Username already in use'],
        trim: true
    },
    firstname: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        alias: 'surname',
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: true,
        minLength: 6,
        validate: function(value) {
            regex = /^[A-Za-z0-9#$&_]+$/
            return regex.test(value);
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
        trim: true,
        lowercase: true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;