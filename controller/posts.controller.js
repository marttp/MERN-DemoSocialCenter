const postsService = require('../services/posts.service')

exports.getAllPosts = async (req,res,next) => {
    try {
        const posts = await postsService.getAllPosts(req,res,next)
        if(posts){
            res.status(200).json({
                posts: posts
            })
        } else {
            res.status(204).json({
                text: 'No content'
            })
        }
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}