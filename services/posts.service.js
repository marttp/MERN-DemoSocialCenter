const mockupData = [{
    id: 'asdasd',
    name: 'test'
}]

exports.getAllPosts = (req, res, next) => {
    return new Promise((resolve, reject) => {
        resolve(mockupData)
    })
}