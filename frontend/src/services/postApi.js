import axios from 'axios'

export const fetchAllPost = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
