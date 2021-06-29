const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: [5, "username too short"],
        max: [30, "username too long"]
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 30,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 30
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 30
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
},

{timestamps: true}
);

module.exports = mongoose.model("User", UserScehma);
