const express = require('express');
const router = express.Router();

// Import Controllers
const postController = require('../controllers/postController');

// Middleware
const loginRequire = require('../middleware/loginRequire');

// Post Routes
router.get('/allpost', loginRequire, postController.getAllPosts);
router.post('/createpost', loginRequire, postController.createPost);
router.get('/mypost', loginRequire, postController.getMyPost);
router.get('/post/:postId', loginRequire, postController.getPostById);
router.delete('/deletepost/:postId', loginRequire, postController.deletePost);

// Like Post Route
router.put('/like', loginRequire, postController.likePost);

// unLike Post Route
router.put('/unlike', loginRequire, postController.unlikePost);

// Comments Post Route
router.put('/comment', loginRequire, postController.createComment);


module.exports = router;