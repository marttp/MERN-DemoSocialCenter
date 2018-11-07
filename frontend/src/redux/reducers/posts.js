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
        myPosts: [...state.myPosts, action.data],
      }

    case actionTypes.DELETE_POST:
      const newPosts = state.myPosts.filter(post => post.id !== action.id)
      return {
        ...state,
        myPosts: newPosts,
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

    // case actionTypes.FETCH_MY_POST:
    //   return

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
