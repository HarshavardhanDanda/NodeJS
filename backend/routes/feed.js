const { Router } = require('express');
const express = require('express');


const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth')

const router = express.Router();

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post('/post', isAuth, feedController.createPost);

router.get('/post/:postId', isAuth, feedController.getPost)

router.put('/post/:postId', isAuth, feedController.updatePost)

router.delete('/post/:postId', isAuth, feedController.deletePost)
//
module.exports = router;