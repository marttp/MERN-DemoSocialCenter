import * as actionTypes from '../actionTypes'
import {
  fetchAllPost,
  fetchPostByName,
  addNewPost,
  deletePostById,
} from '../../services/postApi'

export const insertName = name => {
  return {
    type: actionTypes.INSERT_NAME,
    name: name,
  }
}

export const toggleChangeName = () => {
  return {
    type: actionTypes.TOGGLE_CHANGE_NAME,
  }
}

export const fetchHomePost = () => dispatch => {
  dispatch(onStart())
  fetchAllPost()
    .then(result => {
      dispatch({
        type: actionTypes.FETCH_HOME_POST,
        fetchPosts: result,
      })
      dispatch(onStop())
    })
    .catch(err => {
      console.assert(err)
      dispatch(onStop())
    })
}

export const fetchPostName = name => dispatch => {
  dispatch(onStart())
  fetchPostByName(name)
    .then(result => {
      if (result) {
        dispatch({
          type: actionTypes.FETCH_POST_BY_NAME,
          fetchPosts: result,
        })
      } else {
        dispatch({
          type: actionTypes.FETCH_POST_BY_NAME,
          fetchPosts: [],
        })
      }
      dispatch(onStop())
    })
    .catch(err => {
      console.assert(err)
      dispatch(onStop())
    })
}

// export const addPost = data => {
//   return {
//     type: actionTypes.ADD_POST,
//     data: data,
//   }
// }

export const addPost = post => dispatch => {
  dispatch(onStart())
  addNewPost(post)
    .then(result => {
      dispatch({
        type: actionTypes.ADD_POST,
        data: result,
      })
      dispatch(onStop())
    })
    .catch(err => {
      console.assert(err)
      dispatch(onStop())
    })
}
// export const deletePost = id => {
//   return {
//     type: actionTypes.DELETE_POST,
//     id: id,
//   }
// }

export const deletePost = id => dispatch => {
  dispatch(onStart())
  deletePostById(id)
    .then(result => {
      dispatch({
        type: actionTypes.DELETE_POST,
        id: result._id,
      })
      dispatch(onStop())
    })
    .catch(err => {
      console.assert(err)
      dispatch(onStop())
    })
}
export const onStart = () => {
  return {
    type: actionTypes.ON_START_PROCESS,
  }
}

export const onStop = () => {
  return {
    type: actionTypes.ON_STOP_PROCESS,
  }
}
