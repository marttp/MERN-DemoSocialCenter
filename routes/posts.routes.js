const express = require('express')
const router = express.Router()

const postsController = require('../controller/posts.controller')

// @route GET /social-center/posts
// @desc  Get All Posts
// @access Public
router.get('/', postsController.getAllPosts)

// @route GET /social-center/posts/:name
// @desc  Get Posts By Name criteria
// @access Public
router.get('/:name', postsController.getPostsByName)

// @route POST /social-center/posts
// @desc  Create Post To Database
// @access Public
router.post('/', postsController.createPost)

// @route DELETE /social-center/posts
// @desc  Delete Post By ID Criteria
// @access Public
router.delete('/:postId', postsController.deletePostsById)


module.exports = router