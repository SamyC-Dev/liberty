const mongoose = require('mongoose');
const Post = mongoose.model("Post");


const postController = {

    getMyPost: (req, res) => {

        Post.find({ postedBy: req.user._id })
            .populate("postedBy", "_id pseudo pic")
            .then(myposts => {
                res.json({ myposts })
            })
            .catch(err => {
                console.log(err)
            })
    },

    getAllPosts: (req, res) => {
        Post.find()
            .populate("postedBy", "_id pseudo pic")
            .populate("comments.postedBy", "_id pseudo pic")
            .sort('-createdAt')
            .then((posts) => {
                res.json({ posts });
            }).catch(err => {
                console.log(err);
            })
    },

    getPostById: (req, res) => {
        Post.findOne({ _id: req.params.postId })
            .populate("postedBy", "_id pseudo pic")
            .populate("comments.postedBy", "_id pseudo pic")
            .then((post) => {
                res.json({ post });
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

    likePost: (req, res) => {
        Post.findByIdAndUpdate(req.body.postId, {
            $push: { likes: req.user._id }
        }, {
            new: true
        })
            .populate("postedBy", "_id pseudo pic ")
            .exec((err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                } else {
                    res.json(result)
                }
            })
    },

    unlikePost: (req, res) => {
        Post.findByIdAndUpdate(req.body.postId, {
            $pull: { likes: req.user._id }
        }, {
            new: true
        })
            .populate("postedBy", "_id pseudo pic ")
            .exec((err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                } else {
                    res.json(result)
                }
            })
    },

    createComment: (req, res) => {
        const comment = {
            text: req.body.text,
            postedBy: req.user._id
        }


        Post.findByIdAndUpdate(req.body.postId, {
            $push: { comments: comment }
        }, {
            new: true
        })
            .populate("comments.postedBy", "_id pseudo pic")
            .populate("postedBy", "_id pseudo pic")
            .exec((err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                } else {
                    res.json(result)
                }
            })
    },

    deletePost: (req, res) => {
        Post.findOne({ _id: req.params.postId })
            .populate("postedBy", "_id")
            .exec((err, post) => {
                if (err || !post) {
                    return res.status(422).json({ error: err })
                }
                if (post.postedBy._id.toString() === req.user._id.toString()) {
                    post.remove()
                        .then(result => {
                            res.json(result)
                        }).catch(err => {
                            console.log(err)
                        })
                }
            })
    },
};


module.exports = postController;



