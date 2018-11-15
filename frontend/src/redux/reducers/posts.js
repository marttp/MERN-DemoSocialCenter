import * as actionTypes from '../actionTypes'

const initialState = {
  isLoading: false,
  isOnSetName: true,
  name: '',
  homePost: [],
  myPosts: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        homePost: [action.data, ...state.homePost],
        myPosts: [action.data, ...state.myPosts],
      }

    case actionTypes.DELETE_POST:
      const newHomePost = state.homePost.filter(post => post._id !== action.id)
      const newPosts = state.myPosts.filter(post => post._id !== action.id)
      return {
        ...state,
        myPosts: newPosts,
        homePost: newHomePost,
      }

    case actionTypes.INSERT_NAME:
      return {
        ...state,
        name: action.name,
      }

    case actionTypes.TOGGLE_CHANGE_NAME:
      return {
        ...state,
        isOnSetName: !state.isOnSetName,
      }

    case actionTypes.FETCH_HOME_POST:
      return {
        ...state,
        homePost: action.fetchPosts,
      }

    case actionTypes.FETCH_POST_BY_NAME:
      return {
        ...state,
        myPosts: action.fetchPosts,
      }

    case actionTypes.ON_START_PROCESS:
      return {
        ...state,
        isLoading: true,
      }

    case actionTypes.ON_STOP_PROCESS:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default reducer
