import axios from 'axios'

export const fetchAllPost = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/social-center/posts/`)
      // .get(`http://localhost:5000/social-center/posts/`)
      .then(result => {
        console.log(result.data)
        resolve(result.data.posts)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const fetchPostByName = name => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/social-center/posts/${name}`)
      // .get(`http://localhost:5000/social-center/posts/${name}`)
      .then(result => {
        console.log(result.data)
        resolve(result.data.posts)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const addNewPost = post => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/social-center/posts/`, post)
      // .post(`http://localhost:5000/social-center/posts/`, post)
      .then(result => {
        console.log(result.data)
        resolve(result.data.newPost)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const deletePostById = id => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`/social-center/posts/${id}`)
      // .delete(`http://localhost:5000/social-center/posts/${id}`)
      .then(result => {
        console.log(result.data)
        resolve(result.data.deletedPosts)
      })
      .catch(err => {
        reject(err)
      })
  })
}
