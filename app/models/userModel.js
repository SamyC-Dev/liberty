const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6
    },
    resetToken: String,
    expireToken: Date,
    bio: {
        type: String,
        default: "No Bio",
        max: 224,
        trim: true
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/libertyproject/image/upload/v1616411076/dduhuvgwyjklbiqwhuzc.jpg"
    },
    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }]
},
    {
        timestamps: true
    }
);

mongoose.model("User", userSchema);
