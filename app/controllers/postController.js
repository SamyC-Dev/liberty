const mongoose = require('mongoose');
const Post = mongoose.model("Post");


const postController = {

    getAllPosts: (req, res) => {
        Post.find()
            .populate("postedBy", "_id name")
            .populate("comments.postedBy", "_id name")
            .sort('-createdAt')
            .then((posts) => {
                res.json({ posts });
            }).catch(err => {
                console.log(err);
            })
    },

    createPost: (req, res) => {

        const { title, message, photo } = req.body;

        if (!title || !message) {
            return res.status(422).json({ error: "Veuiller remplir tous les champs Merci" });
        };

        req.user.password = undefined;

        const post = new Post({
            title,
            message,
            photo,
            postedBy: req.user
        });

        post.save().then(result => {
            res.json({ post: result });
        })
            .catch(err => {
                console.log(err);
            })
    },
};


module.exports = postController;



