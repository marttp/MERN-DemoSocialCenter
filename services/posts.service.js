// ! Use for connect to mongoose on MongoDB

// ? Import your Mongoose Model
const Post = require('../models/posts.model.js')

// const mockupData = [{
//     id: 'asdasd',
//     name: 'test'
// }]

exports.getAllPosts = (req, res, next) => {
    return new Promise((resolve, reject) => {
        // resolve(mockupData)
        Post.find({}).sort({
            date: -1
        }).exec().then(posts => {
            resolve(posts)
        }).catch((err) => {
            reject(err)
        });
    })
}

exports.getPostByName = (req, res, next) => {
    return new Promise((resolve, reject) => {
        Post.find({
            name: req.params.name
        }).sort({
            date: -1
        }).exec().then(posts => {
            resolve(posts)
        }).catch((err) => {
            reject(err)
        });
    })
}

exports.createPost = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const newPost = new Post({
            name: req.body.name,
            text: req.body.text,
        })
        newPost.save().then((post) => {
            resolve(post)
        }).catch((err) => {
            reject({ 
                status: 500, 
                success: false,
                message:'Internal server error' 
            })
        });
    })
}

exports.deletePostById = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const id = req.params.postId
        Post.findById(id).then((post) => {
            if(post){
                post.remove().then((post) => {
                    resolve(post)
                }).catch((err) => {
                    reject({ 
                        status: 500, 
                        success: false,
                        message:'Internal server error' 
                    })
                })
            } else {
                reject({ 
                    status: 404, 
                    success: true,
                    message:'No post id' 
                })
            }
        }).catch((err) => {
            reject({ 
                status: 500, 
                success: false,
                message:'Internal server error' 
            })
        })
    })
}