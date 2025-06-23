const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input a name!"],
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
        },
    },

    password: {
        type: String,
        required: true,
    },

    confirmPassword: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
