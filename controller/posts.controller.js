/*
 *
 * Controller
 * use to decision path on api service
 *
 */

const postsService = require('../services/posts.service')

// @desc  Get All Posts
exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await postsService.getAllPosts(req, res, next)
        if (posts.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Get all posts success',
                posts: posts
            })
        } else {
            return res.status(204).json({
                success: true,
                message: 'No posts',
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}

// @desc  Get Posts By Name criteria
exports.getPostsByName = async (req, res, next) => {
    try {
        const posts = await postsService.getPostByName(req, res, next)
        if (posts.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Get posts by name success',
                posts: posts
            })
        } else {
            return res.status(204).json({
                success: true,
                message: 'No posts',
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}

// @desc  Create Post To Database
exports.createPost = async (req, res, next) => {
    try {
        const newPost = await postsService.createPost(req, res, next)

        if (newPost) {
            return res.status(201).json({
                success: true,
                message: 'Create post to database success',
                newPost: newPost
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Create post to database false',
                newPost: newPost
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}

// @desc  Delete Post By ID Criteria
exports.deletePostsById = async (req, res, next) => {
    try {
        const deletedPosts = await postsService.deletePostById(req, res, next)

        if (deletedPosts) {
            return res.status(200).json({
                success: true,
                message: 'Delete post by id success',
                deletedPosts: deletedPosts
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Delete post by id false',
                deletedPosts: deletedPosts
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        })
    }
}