const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String,
        default: "https://france-ameriques.org/wp-content/uploads/2016/11/Statue-of-Liberty-1.jpg",
    },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [{
        text: String,
        postedBy: { type: ObjectId, ref: "User" }
    }],
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
);

mongoose.model("Post", postSchema);