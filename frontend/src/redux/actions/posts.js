import * as actionTypes from '../actionTypes'
import { fetchAllPost } from '../../services/postApi'

export const addPost = data => {
  return {
    type: actionTypes.ADD_POST,
    data: data,
  }
}

export const deletePost = id => {
  return {
    type: actionTypes.DELETE_POST,
    id: id,
  }
}

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

// export const fetchMyPost = () => {
//   return {
//     type: actionTypes.FETCH_MY_POST,
//   }
// }

export const fetchHomePost = () => {
  return dispatch => {
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
        console.warn(err)
        dispatch(onStop())
      })
  }
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
